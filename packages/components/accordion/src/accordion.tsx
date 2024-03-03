'use client';

import { VariantProps, cva } from 'class-variance-authority';
import React from 'react';
import { cn } from '@zyxui/lib';
import {
  AccordionDefaultValue,
  CollapseItemProps,
  IconPosition,
} from './types';
import AccordionItem from './accordion-item';
import AccordionProvider from './context';

const accordionVariants = cva('', {
  variants: {
    variant: {
      default: '[&_[data-part=item]]:border-b',
      bordered:
        '[&_[data-part=item]]:border-x [&_[data-part=item]]:border-t last:[&_[data-part=item]]:border-b',
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

export type AccordionProps = {
  items: CollapseItemProps[];
  defaultValues?: AccordionDefaultValue;
  multiple?: boolean;
  iconPosition?: IconPosition;
} & React.HTMLAttributes<HTMLDivElement> &
  VariantProps<typeof accordionVariants>;

const Accordion = React.forwardRef<HTMLDivElement, AccordionProps>(
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
    ref,
  ) => {
    const classNames = cn(accordionVariants({ size, variant, className }));

    return (
      <AccordionProvider active={defaultValues} items={items}>
        {/* <div ref={ref} className={classNames} {...props} {...api.rootProps}> */}
        <div ref={ref} className={classNames} {...props}>
          {items?.map((item) => (
            <AccordionItem
              key={item.id}
              item={item}
              iconPosition={iconPosition}
              activeItem={defaultValues}
            />
            // // <div key={item.id} {...api.getItemProps({ value: String(item.id) })}>
            // <div key={item.id} >
            //   <AccordionHeader
            //     iconPosition={iconPosition}
            //     size={size}
            //     variant={variant}
            //     open={activeItem.includes(String(item.id))}
            //   // {...api.getItemTriggerProps({
            //   //   value: String(item.id),
            //   // })}
            //   >
            //     {item.title}
            //   </AccordionHeader>
            //   <AccordionContent
            //     size={size}
            //     variant={variant}
            //     open={activeItem.includes(String(item.id))}
            //   // {...api.getItemContentProps({ value: String(item.id) })}
            //   >
            //     {item.content}
            //   </AccordionContent>
            // </div>
          ))}
        </div>
      </AccordionProvider>
    );
  },
);

Accordion.displayName = 'Accordion';
export default Accordion;
