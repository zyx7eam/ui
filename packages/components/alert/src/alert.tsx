import { VariantProps, cva } from 'class-variance-authority';
import React from 'react';
import { cn } from '@zyxui/lib';

const alertVariants = cva('p-4 border overflow-hidden flex gap-2', {
  variants: {
    color: {
      default: '',
      error: '',
      warning: '',
      success: '',
    },
    variant: {
      solid: 'border-transparent',
      bordered: 'bg-transparent',
      //light: 'border-transparent',
      //ghost: 'hover:text-primary-foreground',
      flat: 'border-transparent',
      shadow: 'border-transparent shadow-md',
      gradient: 'bg-gradient-to-r from-[-100%]',
      // glass:
      //   'relative after:content-[""] after:absolute after:inset-0 after:bg-secondary/50 after:backdrop-blur after:z-0 [&_>div]:z-10',
    },
    direction: {
      row: 'flex-row items-center',
      column: 'flex-col',
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
      variant: ['solid', 'shadow'],
      color: 'default',
      className: 'bg-primary text-primary-foreground',
    },
    {
      variant: ['solid', 'shadow'],
      color: 'success',
      className: 'bg-success text-success-foreground',
    },
    {
      variant: ['solid', 'shadow'],
      color: 'error',
      className: 'bg-error text-error-foreground',
    },
    {
      variant: ['solid', 'shadow'],
      color: 'warning',
      className: 'bg-warning text-warning-foreground',
    },
    {
      variant: ['bordered', 'gradient'],
      color: 'default',
      className: 'text-primary border-primary',
    },
    {
      variant: ['bordered', 'gradient'],
      color: 'success',
      className: 'text-success border-success',
    },
    {
      variant: ['bordered', 'gradient'],
      color: 'error',
      className: 'text-error border-error',
    },
    {
      variant: ['bordered', 'gradient'],
      color: 'warning',
      className: 'text-warning border-warning',
    },
    {
      variant: 'gradient',
      color: 'default',
      className: 'from-primary/50',
    },
    {
      variant: 'gradient',
      color: 'success',
      className: 'from-success/50',
    },
    {
      variant: 'gradient',
      color: 'error',
      className: 'from-error/50',
    },
    {
      variant: 'gradient',
      color: 'warning',
      className: 'from-warning/50',
    },
    {
      variant: ['flat'],
      color: 'default',
      className: 'bg-primary/10 text-primary',
    },
    {
      variant: ['flat'],
      color: 'success',
      className: 'bg-success/10 text-success',
    },
    {
      variant: ['flat'],
      color: 'error',
      className: 'bg-error/10 text-error',
    },
    {
      variant: ['flat'],
      color: 'warning',
      className: 'bg-warning/10 text-warning',
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
  ],
  defaultVariants: {
    color: 'default',
    radius: 'md',
    variant: 'solid',
    direction: 'row',
  },
});

type ConditionalTitleDesc =
  | {
      title: React.ReactNode;
      description?: never;
    }
  | {
      title?: never;
      description: React.ReactNode;
    }
  | {
      title: React.ReactNode;
      description: React.ReactNode;
    };

export type AlertProps = {
  icon?: React.ReactNode;
} & ConditionalTitleDesc &
  React.HTMLAttributes<HTMLDivElement> &
  VariantProps<typeof alertVariants>;

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(
  (
    { title, description, color, variant, icon, direction, radius, className },
    ref,
  ) => {
    const classNames = cn(
      alertVariants({ color, variant, radius, direction, className }),
    );

    return (
      <div ref={ref} className={classNames} role='alert'>
        {icon && (
          <div className='flex w-8 items-center justify-center'>{icon}</div>
        )}
        <div className='flex-1'>
          {title && (
            <h3 className='text-md m-0 mb-2 font-bold text-inherit'>{title}</h3>
          )}
          {description && (
            <p className='m-0 text-sm text-inherit'>{description}</p>
          )}
        </div>
      </div>
    );
  },
);

Alert.displayName = 'Alert';

export default Alert;
