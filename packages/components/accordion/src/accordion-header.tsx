'use client';

import { VariantProps, cva } from 'class-variance-authority';
import React from 'react';
import { IconPosition } from './types';
import { cn } from '@zyxui/lib';
import { ChevronDownIcon } from 'lucide-react';
import { Variants, motion } from 'framer-motion';
import { Api } from '@zag-js/accordion';

// motion animations
const arrowAnimationVariants: Variants = {
  open: {
    rotate: 0,
  },
  close: {
    rotate: 180,
  },
};
const IconSizes = {
  sm: 14,
  md: 18,
  lg: 21,
};

const accordionHeaderVariants = cva('', {
  variants: {
    variant: {
      default: '',
      bordered: '',
    },
    size: {
      sm: '[&_[data-type=trigger]]:p-1',
      md: '[&_[data-type=trigger]]:p-2',
      lg: '[&_[data-type=trigger]]:p-4',
    },
    open: {
      true: '[&_[data-type=trigger]]:border-b',
      false: '[&_[data-type=trigger]]:border-b-transparent',
    },
    iconPosition: {
      start: '[&_[data-type=trigger]]:gap-2',
      end: '[&_[data-type=trigger]]:justify-between',
    },
  },
  defaultVariants: {
    variant: 'default',
    size: 'md',
  },
});

export type AccordionHeaderProps = React.HTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof accordionHeaderVariants> & {
    children: React.ReactNode;
    open?: boolean;
    className?: string;
    iconPosition?: IconPosition;
    id: string | number;
    triggerProps: Omit<Api['getItemTriggerProps'], 'content'>;
  };

const AccordionHeader = React.forwardRef<HTMLDivElement, AccordionHeaderProps>(
  (
    { children, iconPosition, variant, size, className, open, id, ...props },
    ref,
  ) => {
    const { triggerProps, ...restProps } = props;
    const classNames = cn(
      accordionHeaderVariants({ variant, size, iconPosition, open, className }),
    );

    const iconClassNames = cn(
      'flex items-center justify-center text-inherit',
      iconPosition === 'end' ? 'order-2' : '-order-1',
    );

    return (
      <div ref={ref} className={classNames}>
        <h3>
          <button
            //   aria-[expanded="true"]
            className='flex w-full items-center'
            data-type='trigger'
            {...triggerProps}
            {...restProps}
          >
            {children}
            <motion.span
              className={iconClassNames}
              variants={arrowAnimationVariants}
              animate={open ? 'open' : 'close'}
              initial={open ? 'open' : 'close'}
            >
              <ChevronDownIcon size={IconSizes[size || 'md']} />
            </motion.span>
          </button>
        </h3>
      </div>
    );
  },
);

AccordionHeader.displayName = 'AccordionHeader';

export default AccordionHeader;
