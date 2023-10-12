'use client';
import type { MDXComponents as MDXComponentsType } from 'mdx/types';

import { useMDXComponent } from 'next-contentlayer/hooks';
import React from 'react';
import { cn } from 'shared-lib';
import { Example, Preview } from './mdx/example';

interface MDXContentProps {
  code: string;
}

const Paragraph = ({ children, className, ...props }: any) => {
  const classNames = cn('mb-5', className);
  return (
    <p className={classNames} {...props}>
      {children}
    </p>
  );
};
const Code = ({ children, className, ...props }: any) => {
  const classNames = cn(
    'bg-primary/20 text-primary rounded-md px-1',
    className
  );
  return (
    <code className={classNames} {...props}>
      {children}
    </code>
  );
};

const Heading = ({
  as,
  restProps,
  className,
  children,
}: {
  as: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  restProps: any;
  className?: string;
  children: React.ReactNode;
}) => {
  const classNames = cn(
    className,
    as === 'h1' && 'text-3xl my-8',
    as === 'h2' && 'text-xl mt-5 mb-2',
    'font-bold'
  );

  return React.createElement(
    as,
    {
      className: classNames,
      ...restProps,
    },
    children
  );
};

export function MDXContent({ code }: MDXContentProps) {
  const Component = useMDXComponent(code);

  return (
    <div className='px-5'>
      <Component
        components={{
          h1: ({ children, className, ...props }) => (
            <Heading as='h1' className={className} restProps={{ ...props }}>
              {children}
            </Heading>
          ),
          h2: ({ children, className, ...props }) => (
            <Heading as='h2' className={className} restProps={{ ...props }}>
              {children}
            </Heading>
          ),
          p: Paragraph,
          code: Code,
          Example: Example,
          Preview: Preview,
        }}
      />
    </div>
  );
}
