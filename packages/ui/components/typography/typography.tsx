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

type TypographyProps = {} & React.HTMLAttributes<HTMLHeadingElement> &
  VariantProps<typeof typographyVariants>;

const Typography = React.forwardRef<HTMLElement, TypographyProps>(
  ({ className, as: element = 'article', children, ...props }, ref) => {
    const classNames = cn(typographyVariants({ as: element }), className);

    const Component = element as any;

    return (
      <Component ref={ref} className={classNames} {...props}>
        {children}
      </Component>
    );
  }
);

Typography.displayName = 'Typography';

export default Typography;
