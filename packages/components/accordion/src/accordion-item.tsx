'use client';

import React from 'react';
import AccordionHeader from './accordion-header';
import {
  AccordionDefaultValue,
  CollapseItemProps,
  IconPosition,
} from './types';
import { AccordionProps } from './accordion';
import AccordionContent from './accordion-content';
import { useAccordionContext } from './context';

export type AccordionItemProps = {
  iconPosition?: IconPosition;
  activeItem: AccordionDefaultValue;
  item: CollapseItemProps;
} & React.HTMLAttributes<HTMLDivElement> &
  Pick<AccordionProps, 'size' | 'variant'>;

const AccordionItem = React.forwardRef<HTMLDivElement, AccordionItemProps>(
  ({ children, iconPosition, size, variant, activeItem = [], item }, ref) => {
    const { active } = useAccordionContext();
    console.log('active', active);
    const isActive = React.useMemo(
      () => active.includes(String(item.id) as never),
      [active, item.id],
    );

    return (
      <div ref={ref}>
        <AccordionHeader
          iconPosition={iconPosition}
          size={size}
          variant={variant}
          open={isActive}
          id={item.id}
          // {...api.getItemTriggerProps({
          //   value: String(item.id),
          // })}
        >
          {item.title}
        </AccordionHeader>
        <AccordionContent
          size={size}
          variant={variant}
          open={isActive}
          // {...api.getItemContentProps({ value: String(item.id) })}
        >
          {item.content}
        </AccordionContent>
      </div>
    );
  },
);

AccordionItem.displayName = 'AccordionItem';

export default AccordionItem;
