'use client';
// import type { MDXComponents as MDXComponentsType } from 'mdx/types';

import { useMDXComponent } from 'next-contentlayer/hooks';
import React from 'react';
import { cn } from '@zyxui/lib';
import { Command, Example, Heading, Pre, Preview } from './mdx/components';

// Import @zyxui components for MDX runtime
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardTitle,
  CardDescription,
} from '@zyxui/card';
import Button from '@zyxui/button';
import Input from '@zyxui/input';
import Alert from '@zyxui/alert';
import Avatar from '@zyxui/avatar';
import Badge from '@zyxui/badge';

// Import specific Lucide React icons needed in docs
import {
  HeartIcon,
  ShareIcon,
  BookmarkIcon,
  MoreVerticalIcon,
  StarIcon,
  SearchIcon,
  EyeIcon,
  EyeOffIcon,
  UserIcon,
  MailIcon,
  LockIcon,
  MapPinIcon,
  CalendarIcon,
  ClockIcon,
  Camera,
  ShoppingCart,
} from 'lucide-react';

interface MDXContentProps {
  code: string;
}

export function MDXContent({ code }: MDXContentProps) {
  const Component = useMDXComponent(code);

  return (
    <div>
      <Component
        components={{
          // HTML elements
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
          h3: ({ children, className, ...props }) => (
            <Heading as='h3' className={className} restProps={{ ...props }}>
              {children}
            </Heading>
          ),
          h4: ({ children, className, ...props }) => (
            <Heading as='h4' className={className} restProps={{ ...props }}>
              {children}
            </Heading>
          ),
          h5: ({ children, className, ...props }) => (
            <Heading as='h5' className={className} restProps={{ ...props }}>
              {children}
            </Heading>
          ),
          h6: ({ children, className, ...props }) => (
            <Heading as='h6' className={className} restProps={{ ...props }}>
              {children}
            </Heading>
          ),

          // Custom MDX components
          Example,
          Preview,
          pre: Pre,
          Command,

          // @zyxui components
          Card,
          CardHeader,
          CardBody,
          CardFooter,
          CardTitle,
          CardDescription,
          Button,
          Input,
          Alert,
          Avatar,
          Badge,

          // Lucide React icons
          HeartIcon,
          ShareIcon,
          BookmarkIcon,
          MoreVerticalIcon,
          StarIcon,
          SearchIcon,
          EyeIcon,
          EyeOffIcon,
          UserIcon,
          MailIcon,
          LockIcon,
          MapPinIcon,
          CalendarIcon,
          ClockIcon,
          Camera,
          ShoppingCart,

          table: (props) => (
            <div className='max-w-full overflow-x-auto'>
              <table {...props} />
            </div>
          ),
        }}
      />
    </div>
  );
}
