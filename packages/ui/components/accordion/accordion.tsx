import React from 'react';
import { Panel } from './panel';
import { VariantProps, cva } from 'class-variance-authority';
import { cn } from 'shared-lib';

const accordionVariants = cva('bg-red-600 flex flex-col gap-2');

// types
export type AccordionItemProps = {
  key: number | string;
  header: string;
  children: React.ReactNode;
};

export type AccordionProps = {
  items: AccordionItemProps[];
} & React.HTMLAttributes<HTMLDivElement> &
  VariantProps<typeof accordionVariants>;

export const Accordion = React.forwardRef<HTMLDivElement, AccordionProps>(
  ({ items, className, ...props }, ref) => {
    const classNames = cn(accordionVariants({ className }));

    return (
      <div ref={ref} className={classNames} {...props}>
        {items?.map((item) => (
          <Panel key={item.key} title={item.header}>
            {item.children}
          </Panel>
        ))}
      </div>
    );
  }
);

Accordion.displayName = 'Accordion';
