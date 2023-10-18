'use client';
import { VariantProps, cva } from 'class-variance-authority';
import { ChevronDownIcon } from 'lucide-react';
import React, { useState } from 'react';
import { cn } from 'shared-lib';
import { AccordionContent } from './accordion-content';

const panelVariants = cva('bg-green-600');

export type PanelProps = {
  title: string;
} & React.HTMLAttributes<HTMLDivElement> &
  VariantProps<typeof panelVariants>;

export const Panel = React.forwardRef<HTMLDivElement, PanelProps>(
  ({ title, children, className, ...props }, ref) => {
    const [open, setOpen] = useState<boolean>(false);
    const classNames = cn(panelVariants({ className }));

    return (
      <div ref={ref} className={classNames} {...props}>
        <div
          className='flex items-center justify-between'
          onClick={() => setOpen(!open)}
        >
          title: {title} <ChevronDownIcon />
        </div>
        <AccordionContent open={open}>{children}</AccordionContent>
      </div>
    );
  }
);

Panel.displayName = 'Panel';
