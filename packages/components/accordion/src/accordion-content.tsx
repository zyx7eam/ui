'use client';

import React from 'react';
import { VariantProps, cva } from 'class-variance-authority';
import { cn } from '@zyxui/lib';

import { Variants, motion } from 'framer-motion';

const collapseAnimationVariants: Variants = {
  open: {
    height: 'auto',
  },
  close: {
    height: '0px',
  },
};

const accordionContentVariants = cva('overflow-hidden', {
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
  };

const AccordionContent = React.forwardRef<
  HTMLDivElement,
  AccordionContentProps
>(({ children, open, size, variant, className, ...props }, ref) => {
  const classNames = cn(accordionContentVariants({ variant, size, className }));

  return (
    <motion.div
      ref={ref}
      className={classNames}
      variants={collapseAnimationVariants}
      animate={open ? 'open' : 'close'}
      // {...props}
    >
      <div data-type='content'>{children}</div>
    </motion.div>
  );
});

AccordionContent.displayName = 'AccordionContent';

export default AccordionContent;
