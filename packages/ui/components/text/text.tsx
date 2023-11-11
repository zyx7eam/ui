import { VariantProps, cva } from 'class-variance-authority';
import React from 'react';
import { cn } from '../../lib';

const textVariants = cva('', {
  variants: {
    color: {
      default: 'text-primary',
      error: 'text-error',
      warning: 'text-warning',
      success: 'text-success',
    },
    as: {
      h1: 'text-7xl',
      h2: 'text-5xl',
      h3: 'text-4xl',
      h4: 'text-2xl',
      h5: 'text-lg',
      h6: 'text-sm',
      p: 'mb-3 mt-1',
      span: '',
      mark: '',
      code: 'text-xs',
    },
    weight: {
      thin: 'font-thin',
      extralight: 'font-extralight',
      light: 'font-light',
      normal: '',
      medium: 'font-medium',
      semibold: 'font-semibold',
      bold: 'font-bold',
      extrabold: 'font-extrabold',
      '2extrabold': 'font-2extrabold',
    },
    del: {
      true: 'line-through',
      false: '',
    },
    italic: {
      true: 'italic',
      false: '',
    },
    disabled: {
      true: 'opacity-60 cursor-not-allowed',
      false: '',
    },
    lineClamp: {
      none: '',
      1: 'line-clamp-1',
      2: 'line-clamp-2',
      3: 'line-clamp-3',
      4: 'line-clamp-4',
      5: 'line-clamp-5',
      6: 'line-clamp-6',
    },
  },
  compoundVariants: [
    {
      as: ['mark', 'code'],
      className: 'inline-block rounded-md px-1',
    },
    {
      as: 'mark',
      color: 'default',
      className: 'bg-primary text-primary-foreground',
    },
    {
      as: 'mark',
      color: 'error',
      className: 'bg-error text-error-foreground',
    },
    {
      as: 'mark',
      color: 'success',
      className: 'bg-success text-success-foreground',
    },
    {
      as: 'mark',
      color: 'warning',
      className: 'bg-warning text-warning-foreground',
    },
    {
      as: 'code',
      color: 'default',
      className: 'bg-primary/20 text-primary border border-primary',
    },
    {
      as: 'code',
      color: 'error',
      className: 'bg-error/20 text-error border border-error',
    },
    {
      as: 'code',
      color: 'success',
      className: 'bg-success/20 text-success border border-success',
    },
    {
      as: 'code',
      color: 'warning',
      className: 'bg-warning/20 text-warning border border-warning',
    },
  ],
  defaultVariants: {
    color: 'default',
    as: 'h1',
    weight: 'normal',
    del: false,
    italic: false,
    disabled: false,
    lineClamp: 'none',
  },
});

export type TextProps = {} & React.HTMLAttributes<HTMLElement> &
  VariantProps<typeof textVariants>;

const Text = React.forwardRef<HTMLElement, TextProps>(
  (
    {
      as: element = 'h1',
      color,
      weight,
      del,
      italic,
      disabled,
      className,
      children,
      lineClamp,
      ...props
    },
    ref
  ) => {
    const classNames = cn(
      textVariants({
        as: element,
        color,
        weight,
        del,
        italic,
        disabled,
        lineClamp,
      }),
      className
    );

    const Component = element as any;

    return (
      <>
        <Component ref={ref} className={classNames} {...props}>
          {children}
        </Component>
      </>
    );
  }
);

Text.displayName = 'Text';

export default Text;
