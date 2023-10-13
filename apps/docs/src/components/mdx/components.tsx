import { cn } from '@/lib/utils.docs';
import React, { DetailedHTMLProps, HTMLAttributes } from 'react';
import ClipboardButton from './clipboard';

type DivElProps = DetailedHTMLProps<
  HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>;

export const Example = ({ children, className, ...props }: DivElProps) => {
  return (
    <div
      className='my-2 overflow-hidden rounded-md border border-gray-700'
      {...props}
    >
      {children}
    </div>
  );
};
// DetailedHTMLProps<HTMLAttributes<HTMLPreElement>, HTMLPreElement>

export const Preview = ({ children, className, ...props }: DivElProps) => {
  const classes = cn('p-4 border-b border-gray-700', className);
  return (
    <div className={classes} {...props}>
      {children}
    </div>
  );
};

export const Pre = ({ children, ...props }: any) => {
  const lang = props['data-lang'] || 'shell';
  const copyCodeData = props['raw'] || null;

  return (
    <pre data-language={lang} className='relative p-2 text-sm' {...props}>
      <ClipboardButton
        classNames='absolute right-1 top-1'
        content={copyCodeData}
      />
      {children}
    </pre>
  );
};

export const Paragraph = ({ children, className, ...props }: any) => {
  const classNames = cn('mb-5', className);
  return (
    <p className={classNames} {...props}>
      {children}
    </p>
  );
};

export const Heading = ({
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
    'text-xl font-bold',
    className,
    as === 'h1'
      ? 'text-3xl my-8 pb-2'
      : as === 'h2'
      ? 'text-xl mt-7 mb-2 pb-2 border-b border-gray-700'
      : 'my-4'
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
