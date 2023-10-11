'use client';

import { VariantProps, cva } from 'class-variance-authority';
import React from 'react';
import { cn } from 'shared-lib';
import DotsLoader from '../../icons/dots-loader';

const buttonVariants = cva(
  'relative inline-flex gap-1 items-center justify-center font-medium transition-all border aria-[disabled=true]:opacity-40',
  {
    variants: {
      color: {
        default: 'bg-primary text-primary-foreground hover:bg-primary/80',
        error: 'bg-error text-error-foreground hover:bg-error/80',
        warning: 'bg-warning text-warning-foreground hover:bg-warning/80',
        success: 'bg-success text-success-foreground hover:bg-success/80',
      },
      variant: {
        solid: 'border-transparent',
        bordered: '',
        light: 'border-transparent',
        ghost: 'hover:text-primary-foreground',
        flat: 'border-transparent',
        shadow: 'border-transparent shadow-md',
      },
      size: {
        sm: 'py-2 px-3 text-xs min-h-[36px]',
        md: 'p-2 px-4 text-sm min-h-[40px]',
        lg: 'p-4 px-5 text-lg min-h-[64px]',
      },
      radius: {
        sm: 'rounded-sm',
        md: 'rounded-md',
        lg: 'rounded-lg',
        circle: 'rounded-full',
        none: 'rounded-none',
      },
      iconOnly: {
        true: 'p-0',
        false: '',
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
        className: 'w-8 h-8 min-h-[unset]',
      },
      {
        iconOnly: true,
        size: 'md',
        className: 'w-10 h-10 min-h-[unset]',
      },
      {
        iconOnly: true,
        size: 'lg',
        className: 'w-12 h-12 min-h-[unset]',
      },
    ],
    defaultVariants: {
      color: 'default',
      size: 'md',
      radius: 'md',
      variant: 'solid',
      iconOnly: false,
    },
  }
);

export type ButtonProps = {
  startContent?: React.ReactNode;
  endContent?: React.ReactNode;
  loading?: boolean;
} & React.ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariants>;

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      color,
      size,
      radius,
      variant,
      children,
      startContent,
      endContent,
      loading,
      iconOnly,
      ...props
    },
    ref
  ) => {
    const classNames = cn(
      buttonVariants({ color, size, radius, variant, iconOnly, className })
    );

    return (
      <button
        ref={ref}
        className={classNames}
        aria-disabled={loading || props.disabled}
        {...props}
      >
        {loading && !iconOnly ? (
          <DotsLoader width={60} height={10} />
        ) : (
          <>
            {startContent && !iconOnly ? startContent : null}
            {children}
            {endContent && !iconOnly ? endContent : null}
          </>
        )}
      </button>
    );
  }
);

Button.displayName = 'Button';
