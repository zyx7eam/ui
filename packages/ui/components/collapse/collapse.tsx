'use client';

import * as accordion from '@zag-js/accordion';
import { useMachine, normalizeProps } from '@zag-js/react';
import React from 'react';

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
};

export type CollapseContentProps = Omit<
  accordion.Api['getItemContentProps'],
  'content'
> & {
  children?: React.ReactNode;
};

export type CollapseProps = {
  items?: CollapseItemProps[];
} & accordion.Api['rootProps'];

export const CollapseItem = React.forwardRef<HTMLDivElement, CollapseItemProps>(
  ({ content, id, title }, ref) => {
    return (
      <>
        <div ref={ref} key={id}>
          <h3>
            <button>{title}</button>
          </h3>
        </div>
        <CollapseContent>{content}</CollapseContent>
      </>
    );
  }
);

CollapseItem.displayName = 'CollapseItem';

const CollapseHeader = React.forwardRef<HTMLDivElement, CollapseHeaderProps>(
  ({ children, ...props }, ref) => {
    console.log('props');
    console.log(props);

    return (
      <h3 ref={ref}>
        <button {...props}>{children}</button>
      </h3>
    );
  }
);

CollapseHeader.displayName = 'CollapseHeader';

const CollapseContent = React.forwardRef<HTMLDivElement, CollapseContentProps>(
  ({ children, ...props }, ref) => {
    console.log('Content_props');
    console.log(props);

    return (
      <div ref={ref} {...props}>
        {children}
      </div>
    );
  }
);

CollapseContent.displayName = 'CollapseContent';

export const Collapse = React.forwardRef<HTMLDivElement, CollapseProps>(
  ({ items }, ref) => {
    const [state, send] = useMachine(
      accordion.machine({
        id: '1',
        value: ['1'],
      })
    );

    const api = accordion.connect(state, send, normalizeProps);

    return (
      <div ref={ref} {...api.rootProps}>
        {items?.map((item) => (
          <div key={item.id} {...api.getItemProps({ value: String(item.id) })}>
            <CollapseHeader
              {...api.getItemTriggerProps({
                value: String(item.id),
              })}
            >
              {item.title}
            </CollapseHeader>
            <CollapseContent
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
