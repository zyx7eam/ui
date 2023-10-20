'use client';

import * as accordion from '@zag-js/accordion';
import { useMachine, normalizeProps } from '@zag-js/react';
import { VariantProps, cva } from 'class-variance-authority';
import React from 'react';
import { cn } from 'shared-lib';
import { ChevronDownIcon } from 'lucide-react';
import { Variants, motion } from 'framer-motion';

const IconSizes = {
  sm: 14,
  md: 18,
  lg: 21,
};

const collapseVariants = cva('', {
  variants: {
    variant: {
      default: '[&_[data-part=item]]:border-b',
      bordered: '[&_[data-part=item]]:border-x [&_[data-part=item]]:border-t',
    },
    size: {
      sm: 'text-sm',
      md: 'text-md',
      lg: 'text-lg',
    },
  },
  defaultVariants: {
    variant: 'default',
    size: 'md',
  },
});

const collapseHeaderVariants = cva('', {
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
const collapseContentVariants = cva('overflow-hidden', {
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

// motion animations
const arrowAnimationVariants: Variants = {
  open: {
    rotate: 0,
  },
  close: {
    rotate: 180,
  },
};
const collapseAnimationVariants: Variants = {
  open: {
    height: 'auto',
  },
  close: {
    height: '0px',
  },
};

// Types

type IconPosition = 'start' | 'end';

export type CollapseItemProps = {
  id: number | string;
  title: string;
  content: React.ReactNode;
};

export type CollapseHeaderProps = Omit<
  accordion.Api['getItemTriggerProps'],
  'content'
> &
  VariantProps<typeof collapseHeaderVariants> & {
    children: React.ReactNode;
    open?: boolean;
    className?: string;
    iconPosition?: IconPosition;
  };

export type CollapseContentProps = Omit<
  accordion.Api['getItemContentProps'],
  'content' | 'hidden'
> &
  VariantProps<typeof collapseContentVariants> & {
    children?: React.ReactNode;
    open?: boolean;
    className?: string;
  };

export type CollapseProps = {
  items?: CollapseItemProps[];
  defaultValues?: number[] | string[];
  multiple?: boolean;
  iconPosition?: IconPosition;
} & accordion.Api['rootProps'] &
  React.HTMLAttributes<HTMLDivElement> &
  VariantProps<typeof collapseVariants>;

// export const CollapseItem = React.forwardRef<HTMLDivElement, CollapseItemProps>(
//   ({ content, id, title }, ref) => {
//     return (
//       <>
//         <div ref={ref} key={id}>
//           <h3>
//             <button>{title}</button>
//           </h3>
//         </div>
//         <CollapseContent>{content}</CollapseContent>
//       </>
//     );
//   }
// );

// CollapseItem.displayName = 'CollapseItem';

const CollapseHeader = React.forwardRef<HTMLDivElement, CollapseHeaderProps>(
  (
    { children, iconPosition, variant, size, className, open, ...props },
    ref
  ) => {
    const classNames = cn(
      collapseHeaderVariants({ variant, size, iconPosition, open, className })
    );

    const iconClassNames = cn(
      'flex items-center justify-center text-inherit',
      iconPosition === 'end' ? 'order-2' : '-order-1'
    );

    return (
      <div ref={ref} className={classNames}>
        <h3>
          <button
            //   aria-[expanded="true"]
            className='flex w-full items-center'
            data-type='trigger'
            {...props}
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
  }
);

CollapseHeader.displayName = 'CollapseHeader';

const CollapseContent = React.forwardRef<HTMLDivElement, CollapseContentProps>(
  ({ children, open, size, variant, className, ...props }, ref) => {
    const classNames = cn(
      collapseContentVariants({ variant, size, className })
    );

    return (
      <motion.div
        ref={ref}
        className={classNames}
        variants={collapseAnimationVariants}
        animate={open ? 'open' : 'close'}
        {...props}
      >
        <div data-type='content'>{children}</div>
      </motion.div>
    );
  }
);

CollapseContent.displayName = 'CollapseContent';

export const Collapse = React.forwardRef<HTMLDivElement, CollapseProps>(
  (
    {
      items,
      defaultValues = ['1'],
      multiple = false,
      size,
      variant,
      iconPosition = 'end',
      className,
      ...props
    },
    ref
  ) => {
    const classNames = cn(collapseVariants({ size, variant, className }));

    const [state, send] = useMachine(
      accordion.machine({
        id: '1',
        multiple: multiple,
        value: defaultValues?.map((i) => String(i)),
      })
    );

    const api = accordion.connect(state, send, normalizeProps);

    const activeItem = api.value;

    return (
      <div ref={ref} className={classNames} {...props} {...api.rootProps}>
        {items?.map((item) => (
          <div key={item.id} {...api.getItemProps({ value: String(item.id) })}>
            <CollapseHeader
              iconPosition={iconPosition}
              size={size}
              variant={variant}
              open={activeItem.includes(String(item.id))}
              {...api.getItemTriggerProps({
                value: String(item.id),
              })}
            >
              {item.title}
            </CollapseHeader>
            <CollapseContent
              size={size}
              variant={variant}
              open={activeItem.includes(String(item.id))}
              {...api.getItemContentProps({ value: String(item.id) })}
            >
              {item.content}
            </CollapseContent>
          </div>
        ))}
      </div>
    );
  }
);

Collapse.displayName = 'Collapse';
