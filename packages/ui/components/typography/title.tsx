import { VariantProps, cva } from 'class-variance-authority';
import React from 'react';
import { cn } from 'shared-lib';

const titleVariants = cva('', {
  variants: {
    as: {
      h1: 'font-bold text-green-500',
    },
  },
  defaultVariants: {
    as: 'h1',
  },
});

export type TitleProps = {} & React.HTMLAttributes<HTMLTitleElement> &
  VariantProps<typeof titleVariants>;

const Title = React.forwardRef<HTMLTitleElement, TitleProps>(
  ({ as = 'h1', className, children, ...props }, ref) => {
    const classNames = cn(titleVariants({ as }), className);

    const Component = React.createElement(
      as!,
      {
        className: classNames,
        ref,
        ...props,
      },
      children
    );

    return Component;
  }
);

Title.displayName = 'Title';

export default Title;
