'use client';

import { VariantProps, cva } from 'class-variance-authority';
import React from 'react';
import { cn } from 'shared-lib';

const buttonVariants = cva(
  'inline-flex items-center justify-center font-medium transition-colors border-2',
  {
    variants: {
      color: {
        default: 'bg-primary text-primary-foreground hover:bg-primary/80',
        error: 'bg-error text-error-foreground hover:bg-error/80',
        warning: 'bg-warning text-warning-foreground hover:bg-warning/90',
        success: 'bg-success text-success-foreground hover:bg-success/90',
      },
      variant: {
        solid: 'border-transparent',
        bordered: '',
        light: 'border-transparent',
        ghost: 'hover:text-primary-foreground',
        flat: 'border-transparent',
        shadow: '',
      },
      size: {
        sm: 'py-2 px-3 text-xs',
        md: 'p-2 px-4 text-sm',
        lg: 'p-4 px-5 text-lg',
      },
      radius: {
        sm: 'rounded-sm',
        md: 'rounded-md',
        lg: 'rounded-lg',
        circle: 'rounded-full',
        none: 'rounded-none',
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
    ],
    defaultVariants: {
      color: 'default',
      size: 'md',
      radius: 'md',
      variant: 'solid',
    },
  }
);

export type ButtonProps = {} & React.ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariants>;

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, color, size, radius, variant, children, ...props }, ref) => {
    const classNames = cn(
      buttonVariants({ color, size, radius, variant, className })
    );

    return (
      <button ref={ref} className={classNames} {...props}>
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';
