'use client';

import { AriaButtonOptions, useButton } from '@react-aria/button';
import { useObjectRef } from '@react-aria/utils';
import { ReactNode, forwardRef } from 'react';

import { VariantProps, cva } from 'class-variance-authority';
import { cn } from '@zyxui/lib';
import { useThemeSafe } from '@zyxui/theme';

const buttonVariants = cva(
  'relative inline-flex gap-1 items-center justify-center font-medium transition-all duration-200 border aria-[disabled=true]:opacity-40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      color: {
        default:
          'bg-primary outline-primary text-primary-foreground hover:bg-primary/80 focus-visible:ring-primary',
        error:
          'bg-error outline-error text-error-foreground hover:bg-error/80 focus-visible:ring-error',
        warning:
          'bg-warning outline-warning text-warning-foreground hover:bg-warning/80 focus-visible:ring-warning',
        success:
          'bg-success outline-success text-success-foreground hover:bg-success/80 focus-visible:ring-success',
      },
      variant: {
        solid: 'border-transparent',
        bordered: '',
        light: 'border-transparent',
        ghost: 'hover:text-primary-foreground',
        flat: 'border-transparent',
        shadow: 'border-transparent shadow-md hover:shadow-lg',
      },
      size: {
        sm: 'h-8 px-3 text-xs max-h-8',
        md: 'h-9 px-4 text-sm max-h-9',
        lg: 'h-12 px-5 text-lg max-h-12',
      },
      radius: {
        sm: 'rounded-sm',
        md: 'rounded-md',
        lg: 'rounded-lg',
        circle: 'rounded-full',
        none: 'rounded-none',
      },
      isPressed: {
        true: 'scale-95',
      },
      isLoading: {
        true: 'cursor-not-allowed',
      },
      iconOnly: {
        true: 'p-0',
        false: '',
      },
      glassEffect: {
        true: 'bg-opacity-10 backdrop-blur-sm',
      },
    },
    compoundVariants: [
      {
        variant: ['bordered', 'light', 'flat', 'ghost'],
        className: 'bg-transparent',
      },
      {
        variant: ['bordered', 'light', 'flat', 'ghost'],
        color: 'default',
        className: 'text-primary',
      },
      {
        variant: ['bordered', 'light', 'flat', 'ghost'],
        color: 'error',
        className: 'text-error',
      },
      {
        variant: ['bordered', 'light', 'flat', 'ghost'],
        color: 'success',
        className: 'text-success',
      },
      {
        variant: ['bordered', 'light', 'flat', 'ghost'],
        color: 'warning',
        className: 'text-warning',
      },
      {
        variant: 'ghost',
        color: 'default',
        className: 'hover:bg-primary',
      },
      {
        variant: 'ghost',
        color: 'error',
        className: 'hover:bg-error',
      },
      {
        variant: 'ghost',
        color: 'success',
        className: 'hover:bg-success',
      },
      {
        variant: 'ghost',
        color: 'warning',
        className: 'hover:bg-warning',
      },
      {
        variant: ['bordered', 'light', 'flat'],
        color: 'default',
        className: 'hover:bg-primary/30',
      },
      {
        variant: ['bordered', 'light', 'flat'],
        color: 'error',
        className: 'hover:bg-error/30',
      },
      {
        variant: ['bordered', 'light', 'flat'],
        color: 'success',
        className: 'hover:bg-success/30',
      },
      {
        variant: ['bordered', 'light', 'flat'],
        color: 'warning',
        className: 'hover:bg-warning/30',
      },
      {
        variant: ['bordered', 'ghost'],
        color: 'default',
        className: 'border-primary',
      },
      {
        variant: ['bordered', 'ghost'],
        color: 'error',
        className: 'border-error',
      },
      {
        variant: ['bordered', 'ghost'],
        color: 'success',
        className: 'border-success',
      },
      {
        variant: ['bordered', 'ghost'],
        color: 'warning',
        className: 'border-warning',
      },
      {
        variant: 'flat',
        color: 'default',
        className: 'bg-primary/20',
      },
      {
        variant: 'flat',
        color: 'error',
        className: 'bg-error/20',
      },
      {
        variant: 'flat',
        color: 'success',
        className: 'bg-success/20',
      },
      {
        variant: 'flat',
        color: 'warning',
        className: 'bg-warning/20',
      },
      {
        variant: 'shadow',
        color: 'default',
        className: 'shadow-primary/50',
      },
      {
        variant: 'shadow',
        color: 'error',
        className: 'shadow-error/50',
      },
      {
        variant: 'shadow',
        color: 'success',
        className: 'shadow-success/50',
      },
      {
        variant: 'shadow',
        color: 'warning',
        className: 'shadow-warning/50',
      },
      {
        iconOnly: true,
        size: 'sm',
        className: 'w-8 h-8 p-0',
      },
      {
        iconOnly: true,
        size: 'md',
        className: 'w-9 h-9 p-0',
      },
      {
        iconOnly: true,
        size: 'lg',
        className: 'w-12 h-12 p-0',
      },
    ],
    defaultVariants: {
      color: 'default',
      size: 'md',
      radius: 'md',
      variant: 'solid',
      iconOnly: false,
      isLoading: false,
    },
  },
);

// Loading spinner component
const LoadingSpinner = ({ size = 'sm' }: { size?: 'sm' | 'md' | 'lg' }) => {
  const sizeClasses = {
    sm: 'w-3 h-3',
    md: 'w-4 h-4',
    lg: 'w-5 h-5',
  };

  return (
    <svg
      className={cn('animate-spin', sizeClasses[size])}
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
    >
      <circle
        className='opacity-25'
        cx='12'
        cy='12'
        r='10'
        stroke='currentColor'
        strokeWidth='4'
      />
      <path
        className='opacity-75'
        fill='currentColor'
        d='M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z'
      />
    </svg>
  );
};

export type ButtonProps = {
  children: ReactNode;
  className?: string;
  startContent?: ReactNode;
  endContent?: ReactNode;
  isLoading?: boolean;
  loadingText?: string;
} & AriaButtonOptions<'button'> &
  VariantProps<typeof buttonVariants>;

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      color,
      size,
      radius,
      variant,
      iconOnly,
      className,
      startContent,
      endContent,
      isLoading = false,
      loadingText,
      isDisabled,
      ...props
    },
    ref,
  ) => {
    const forwardRef = useObjectRef(ref);
    const { config } = useThemeSafe();

    const { buttonProps, isPressed } = useButton(
      { ...props, isDisabled: isDisabled || isLoading },
      forwardRef,
    );

    const classNames = cn(
      buttonVariants({
        color,
        size,
        isPressed,
        radius,
        variant,
        iconOnly,
        isLoading,
        className,
        glassEffect: config?.glassEffect || false,
      }),
    );

    const content = isLoading && loadingText ? loadingText : children;

    return (
      <button ref={ref} {...buttonProps} className={classNames}>
        {isLoading && (
          <LoadingSpinner
            size={size === 'lg' ? 'lg' : size === 'sm' ? 'sm' : 'md'}
          />
        )}
        {!isLoading && startContent && !iconOnly ? startContent : null}
        {!iconOnly && content}
        {!isLoading && endContent && !iconOnly ? endContent : null}
      </button>
    );
  },
);

Button.displayName = 'Button';

export default Button;
