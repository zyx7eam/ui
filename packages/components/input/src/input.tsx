'use client';

import { AriaTextFieldOptions, useTextField } from '@react-aria/textfield';
import { useObjectRef } from '@react-aria/utils';
import { forwardRef, ReactNode, useState } from 'react';
import { VariantProps, cva } from 'class-variance-authority';
import { cn, generateId } from '@zyxui/lib';
import { useThemeSafe } from '@zyxui/theme';

const inputVariants = cva(
  'w-full transition-all duration-200 border bg-background text-foreground placeholder:text-muted-foreground focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50',
  {
    variants: {
      variant: {
        default:
          'border-input focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2',
        filled:
          'border-transparent bg-muted focus-visible:bg-background focus-visible:ring-2 focus-visible:ring-ring',
        underlined:
          'border-0 border-b-2 rounded-none bg-transparent focus-visible:border-primary',
        bordered: 'border-2 bg-transparent focus-visible:border-primary',
      },
      size: {
        sm: 'h-8 px-3 text-xs',
        md: 'h-9 px-3 text-sm',
        lg: 'h-11 px-4 text-base',
      },
      radius: {
        none: 'rounded-none',
        sm: 'rounded-sm',
        md: 'rounded-md',
        lg: 'rounded-lg',
        full: 'rounded-full',
      },
      state: {
        default: '',
        error: 'border-error focus-visible:ring-error',
        success: 'border-success focus-visible:ring-success',
        warning: 'border-warning focus-visible:ring-warning',
      },
      hasStartContent: {
        true: 'pl-10',
      },
      hasEndContent: {
        true: 'pr-10',
      },
    },
    compoundVariants: [
      {
        variant: 'underlined',
        radius: ['sm', 'md', 'lg', 'full'],
        className: 'rounded-none',
      },
      {
        variant: 'filled',
        state: 'error',
        className: 'bg-error/10 border-error',
      },
      {
        variant: 'filled',
        state: 'success',
        className: 'bg-success/10 border-success',
      },
      {
        variant: 'filled',
        state: 'warning',
        className: 'bg-warning/10 border-warning',
      },
    ],
    defaultVariants: {
      variant: 'default',
      size: 'md',
      radius: 'md',
      state: 'default',
    },
  },
);

const labelVariants = cva(
  'text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70',
  {
    variants: {
      state: {
        default: 'text-foreground',
        error: 'text-error',
        success: 'text-success',
        warning: 'text-warning',
      },
      required: {
        true: "after:content-['*'] after:ml-0.5 after:text-error",
      },
    },
    defaultVariants: {
      state: 'default',
      required: false,
    },
  },
);

const helperTextVariants = cva('text-xs mt-1', {
  variants: {
    state: {
      default: 'text-muted-foreground',
      error: 'text-error',
      success: 'text-success',
      warning: 'text-warning',
    },
  },
  defaultVariants: {
    state: 'default',
  },
});

export type InputProps = {
  label?: string;
  helperText?: string;
  errorMessage?: string;
  startContent?: ReactNode;
  endContent?: ReactNode;
  className?: string;
  containerClassName?: string;
  labelClassName?: string;
  helperTextClassName?: string;
  clearable?: boolean;
  onClear?: () => void;
} & Omit<
  AriaTextFieldOptions<'input'>,
  'label' | 'description' | 'errorMessage'
> &
  VariantProps<typeof inputVariants>;

const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      label,
      helperText,
      errorMessage,
      startContent,
      endContent,
      className,
      containerClassName,
      labelClassName,
      helperTextClassName,
      variant,
      size,
      radius,
      state: stateProp,
      clearable = false,
      onClear,
      isRequired,
      isInvalid,
      value,
      defaultValue,
      onChange,
      ...props
    },
    ref,
  ) => {
    const forwardedRef = useObjectRef(ref);
    const { config } = useThemeSafe();
    const [inputValue, setInputValue] = useState(value || defaultValue || '');

    // Generate unique IDs for accessibility
    const inputId = generateId('input');
    const labelId = label ? generateId('label') : undefined;
    const descriptionId = helperText ? generateId('description') : undefined;
    const errorId = errorMessage ? generateId('error') : undefined;

    // Determine the current state
    const state = isInvalid || errorMessage ? 'error' : stateProp || 'default';

    const { inputProps, labelProps, descriptionProps, errorMessageProps } =
      useTextField(
        {
          ...props,
          label,
          description: helperText,
          errorMessage,
          isRequired,
          isInvalid: isInvalid || !!errorMessage,
          value: value !== undefined ? value : inputValue,
          onChange: (val) => {
            if (value === undefined) {
              setInputValue(val);
            }
            onChange?.(val);
          },
          id: inputId,
          'aria-labelledby': labelId,
          'aria-describedby':
            [descriptionId, errorId].filter(Boolean).join(' ') || undefined,
        },
        forwardedRef,
      );

    const handleClear = () => {
      if (value === undefined) {
        setInputValue('');
      }
      onClear?.();
      onChange?.('');
    };

    const showClearButton = clearable && (value || inputValue);

    return (
      <div className={cn('space-y-2', containerClassName)}>
        {label && (
          <label
            {...labelProps}
            id={labelId}
            className={cn(
              labelVariants({ state, required: isRequired }),
              labelClassName,
            )}
          >
            {label}
          </label>
        )}

        <div className='relative'>
          {startContent && (
            <div className='text-muted-foreground absolute left-3 top-1/2 -translate-y-1/2'>
              {startContent}
            </div>
          )}

          <input
            {...inputProps}
            ref={forwardedRef}
            className={cn(
              inputVariants({
                variant,
                size,
                radius,
                state,
                hasStartContent: !!startContent,
                hasEndContent: !!(endContent || showClearButton),
              }),
              className,
            )}
          />

          {(endContent || showClearButton) && (
            <div className='absolute right-3 top-1/2 flex -translate-y-1/2 items-center gap-1'>
              {showClearButton && (
                <button
                  type='button'
                  onClick={handleClear}
                  className='text-muted-foreground hover:text-foreground transition-colors'
                  aria-label='Clear input'
                >
                  <svg
                    width='16'
                    height='16'
                    viewBox='0 0 24 24'
                    fill='none'
                    stroke='currentColor'
                    strokeWidth='2'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  >
                    <circle cx='12' cy='12' r='10' />
                    <path d='m15 9-6 6' />
                    <path d='m9 9 6 6' />
                  </svg>
                </button>
              )}
              {endContent && (
                <div className='text-muted-foreground'>{endContent}</div>
              )}
            </div>
          )}
        </div>

        {(helperText || errorMessage) && (
          <div className='space-y-1'>
            {helperText && !errorMessage && (
              <p
                {...descriptionProps}
                id={descriptionId}
                className={cn(
                  helperTextVariants({ state: 'default' }),
                  helperTextClassName,
                )}
              >
                {helperText}
              </p>
            )}
            {errorMessage && (
              <p
                {...errorMessageProps}
                id={errorId}
                className={cn(
                  helperTextVariants({ state: 'error' }),
                  helperTextClassName,
                )}
              >
                {errorMessage}
              </p>
            )}
          </div>
        )}
      </div>
    );
  },
);

Input.displayName = 'Input';

export default Input;
