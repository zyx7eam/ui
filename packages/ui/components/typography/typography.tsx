import { VariantProps, cva } from 'class-variance-authority';
import React from 'react';
import { cn } from 'shared-lib';

const typographyVariants = cva('', {
  variants: {
    as: {
      article: 'text-red-400',
    },
  },
  defaultVariants: {
    as: 'article',
  },
});

export type TypographyProps = {} & React.HTMLAttributes<HTMLElement> &
  VariantProps<typeof typographyVariants>;

const Typography = React.forwardRef<HTMLElement, TypographyProps>(
  ({ className, as = 'article', children, ...props }, ref) => {
    const classNames = cn(typographyVariants({ as }), className);
    const Component = React.createElement(
      as!,
      {
        className: classNames,
        ref: ref,
        ...props,
      },
      children
    );

    return Component;
  }
);

Typography.displayName = 'Typography';

export default Typography;
