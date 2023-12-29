'use client';

import { VariantProps, cva } from 'class-variance-authority';
import { CSSProperties, ComponentProps, ReactNode, forwardRef } from 'react';

import { cn } from '@zyxui/lib';

const flexVariants = cva('flex', {
  variants: {
    direction: {
      column: 'flex-col',
      'column-reverse': 'flex-col-reverse',
      row: 'flex-row',
      'row-reverse': 'flex-row-reverse',
    },
    justify: {
      normal: 'justify-normal',
      'flex-start': 'justify-start',
      'flex-end': 'justify-end',
      center: 'justify-center',
      'space-between': 'justify-between',
      'space-around': 'justify-around',
      'space-evenly': 'justify-evenly',
      stretch: 'justify-stretch',
    },
    align: {
      'flex-start': 'items-start',
      'flex-end': 'items-end',
      center: 'items-center',
      baseline: 'items-baseline',
      stretch: 'items-stretch',
    },
    wrap: {
      wrap: 'flex-wrap',
      'wrap-reverse': 'flex-wrap-reverse',
      nowrap: 'flex-nowrap',
    },
    gap: {
      none: '',
      sm: 'gap-2',
      md: 'gap-5',
      lg: 'gap-10',
      xl: 'gap-20'
    },
  },
  defaultVariants: {
    direction: 'row',
    justify: 'flex-start',
    align: 'stretch',
    wrap: 'nowrap',
    gap: 'none',
  },
});

export type FlexProps = ComponentProps<'div'> &
  VariantProps<typeof flexVariants> & {
    children?: ReactNode;
    direction?: CSSProperties['flexDirection'];
    justify?: CSSProperties['justifyContent'];
    wrap?: CSSProperties['flexWrap'];
    gap?: 'sm' | 'md' | 'lg' | 'xl';
    align?: CSSProperties['alignItems'];
  };

const Flex = forwardRef<HTMLDivElement, FlexProps>(
  (
    { children, direction, justify, wrap, gap, align, className, ...restProps },
    ref,
  ) => {
    const classNames = cn(
      flexVariants({ direction, justify, wrap, gap, align }),
      className,
    );

    return (
      <div className={classNames} ref={ref} {...restProps}>
        {children}
      </div>
    );
  },
);

Flex.displayName = 'Flex';

export default Flex;
