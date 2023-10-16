'use client';
import type { MDXComponents as MDXComponentsType } from 'mdx/types';

import { useMDXComponent } from 'next-contentlayer/hooks';
import React, { DetailedHTMLProps, HTMLAttributes } from 'react';
import { cn } from 'shared-lib';
import { Example, Heading, Paragraph, Pre, Preview } from './mdx/components';

interface MDXContentProps {
  code: string;
}

export function MDXContent({ code }: MDXContentProps) {
  const Component = useMDXComponent(code);

  return (
    <div>
      <Component
        components={{
          h1: ({ children, className, ...props }) => (
            <Heading as='h1' restProps={{ ...props }}>
              {children}
            </Heading>
          ),
          h2: ({ children, className, ...props }) => (
            <Heading as='h2' restProps={{ ...props }}>
              {children}
            </Heading>
          ),
          h3: ({ children, className, ...props }) => (
            <Heading as='h3' restProps={{ ...props }}>
              {children}
            </Heading>
          ),
          h4: ({ children, className, ...props }) => (
            <Heading as='h4' restProps={{ ...props }}>
              {children}
            </Heading>
          ),
          h5: ({ children, className, ...props }) => (
            <Heading as='h5' restProps={{ ...props }}>
              {children}
            </Heading>
          ),
          h6: ({ children, className, ...props }) => (
            <Heading as='h6' restProps={{ ...props }}>
              {children}
            </Heading>
          ),
          // p: Paragraph,
          Example: Example,
          Preview: Preview,
          pre: Pre,
          table: ({ children, ...props }) => (
            <div className='max-w-full overflow-x-auto'>
              <table {...props}>{children}</table>
            </div>
          ),
          // Link:
        }}
      />
    </div>
  );
}
