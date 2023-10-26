import { VariantProps, cva } from 'class-variance-authority';
import React from 'react';
import { cn } from 'shared-lib';

const titleVariants = cva('', {
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
    },
    weight: {
      bold: 'font-bold',
      medium: 'font-medium',
      light: 'font-light',
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
    weight: 'bold',
    del: false,
    italic: false,
    disabled: false,
  },
});

export type TitleProps = {} & React.HTMLAttributes<HTMLTitleElement> &
  VariantProps<typeof titleVariants>;

const Title = React.forwardRef<HTMLTitleElement, TitleProps>(
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
      titleVariants({ as: element, color, weight, del, italic, disabled }),
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

Title.displayName = 'Title';

export default Title;
