'use client';

import * as accordion from '@zag-js/accordion';
import { useMachine, normalizeProps } from '@zag-js/react';
import { VariantProps, cva } from 'class-variance-authority';
import React from 'react';
import { cn } from 'shared-lib';
import { ChevronDownIcon } from 'lucide-react';
import { Variants, motion } from 'framer-motion';

const collapseVariants = cva('', {
  variants: {
    size: {
      sm: '[&_>data-[part=item-content]]:p-1',
      md: '[&_>data-[part=item-content]]:p-2',
      lg: '[&_>data-[part=item-content]]:p-4',
    },
  },
  defaultVariants: {
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

export type CollapseItemProps = {
  id: number | string;
  title: string;
  content: React.ReactNode;
};

export type CollapseHeaderProps = Omit<
  accordion.Api['getItemTriggerProps'],
  'content'
> & {
  children: React.ReactNode;
  open?: boolean;
};

export type CollapseContentProps = Omit<
  accordion.Api['getItemContentProps'],
  'content' | 'hidden'
> & {
  children?: React.ReactNode;
  open?: boolean;
};

export type CollapseProps = {
  items?: CollapseItemProps[];
  defaultValues?: number[] | string[];
  multiple?: boolean;
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
  ({ children, open, ...props }, ref) => {
    return (
      <h3 ref={ref}>
        <button
          className='aria-[expanded="true"] flex w-full items-center justify-between bg-red-300'
          data-type='trigger'
          {...props}
        >
          {children}
          <motion.span
            className='flex items-center justify-center'
            variants={arrowAnimationVariants}
            animate={open ? 'open' : 'close'}
          >
            <ChevronDownIcon size={18} />
          </motion.span>
        </button>
      </h3>
    );
  }
);

CollapseHeader.displayName = 'CollapseHeader';

const CollapseContent = React.forwardRef<HTMLDivElement, CollapseContentProps>(
  ({ children, open, ...props }, ref) => {
    console.log('Content_props');
    console.log(props);

    return (
      <motion.div
        ref={ref}
        className='overflow-hidden'
        variants={collapseAnimationVariants}
        animate={open ? 'open' : 'close'}
        {...props}
      >
        <div className='bg-yellow-300' data-type='content'>
          {children}
        </div>
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
      className,
      ...props
    },
    ref
  ) => {
    const classNames = cn(collapseVariants({ size, className }));

    const [state, send] = useMachine(
      accordion.machine({
        id: '1',
        multiple: multiple,
        value: defaultValues?.map((i) => String(i)),
      })
    );

    const api = accordion.connect(state, send, normalizeProps);

    const activeItem = api.value;

    console.log('activeItem');
    console.log(activeItem);

    return (
      <div ref={ref} className={classNames} {...props} {...api.rootProps}>
        {items?.map((item) => (
          <div key={item.id} {...api.getItemProps({ value: String(item.id) })}>
            <CollapseHeader
              open={activeItem.includes(String(item.id))}
              {...api.getItemTriggerProps({
                value: String(item.id),
              })}
            >
              {item.title}
            </CollapseHeader>
            <CollapseContent
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
