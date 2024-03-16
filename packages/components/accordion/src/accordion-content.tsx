'use client';

import React from 'react';
import { VariantProps, cva } from 'class-variance-authority';
import { cn } from '@zyxui/lib';

import { Variants, motion } from 'framer-motion';
import { Api } from '@zag-js/accordion';

const collapseAnimationVariants: Variants = {
  open: {
    height: 'auto',
  },
  close: {
    height: '0px',
  },
};

const accordionContentVariants = cva('overflow-hidden h-0', {
  variants: {
    variant: {
      default: '',
      bordered: '',
    },
    size: {
      sm: '[&_[data-type=content]]:p-1',
      md: '[&_[data-type=content]]:p-2',
      lg: '[&_[data-type=content]]:p-4',
    },
  },
  defaultVariants: {
    variant: 'default',
    size: 'md',
  },
});

export type AccordionContentProps = React.HTMLAttributes<HTMLDivElement> &
  VariantProps<typeof accordionContentVariants> & {
    children?: React.ReactNode;
    open?: boolean;
    className?: string;
    contentProps: Omit<Api['getItemContentProps'], 'content' | 'hidden'>;
  };

const AccordionContent = React.forwardRef<
  HTMLDivElement,
  AccordionContentProps
>(({ children, open, size, variant, className, ...props }, ref) => {
  const { contentProps, ...restProps } = props;

  const classNames = cn(accordionContentVariants({ variant, size, className }));

  return (
    <motion.div
      ref={ref}
      className={classNames}
      variants={collapseAnimationVariants}
      animate={open ? 'open' : 'close'}
      initial={false}
      transition={{ duration: 0.3 }}
      {...contentProps}
      // {...props}
    >
      <div data-type='content'>{children}</div>
    </motion.div>
  );
});

AccordionContent.displayName = 'AccordionContent';

export default AccordionContent;
