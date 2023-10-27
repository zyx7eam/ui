import { VariantProps, cva } from 'class-variance-authority';
import React from 'react';
import { cn } from 'shared-lib';

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
      p: 'mb-2',
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
  },
  defaultVariants: {
    color: 'default',
    as: 'h1',
    weight: 'normal',
    del: false,
    italic: false,
    disabled: false,
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
      ...props
    },
    ref
  ) => {
    const classNames = cn(
      textVariants({ as: element, color, weight, del, italic, disabled }),
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
