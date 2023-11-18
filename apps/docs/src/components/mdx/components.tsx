import { cn } from '@/lib/utils.docs';
import React, { DetailedHTMLProps, HTMLAttributes } from 'react';
import ClipboardButton from './clipboard';
import { LinkIcon } from 'lucide-react';
import PreClient from './pre';

type DivElProps = DetailedHTMLProps<
  HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>;

export const Example = ({ children, className, ...props }: DivElProps) => {
  return (
    <div
      className='relative my-2 overflow-hidden rounded-md border border-gray-700'
      {...props}
    >
      {children}
    </div>
  );
};
// DetailedHTMLProps<HTMLAttributes<HTMLPreElement>, HTMLPreElement>

export const Preview = ({ children, className, ...props }: DivElProps) => {
  const classes = cn('relative p-4 border-b border-gray-700', className);
  return (
    <div className={classes} {...props}>
      {children}
    </div>
  );
};

export const Pre = ({ children, ...props }: any) => {
  const lang = props['data-lang'] || 'shell';
  const copyCodeData = props['raw'] || null;
  const theme = props['data-theme'] || 'dark';

  if (theme === 'light') return null;

  return (
    <div className='[&_[data-highlighted-line]]:bg-primary/10'>
      <PreClient lang={lang} copyCodeData={copyCodeData} {...props}>
        {children}
      </PreClient>
    </div>
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
    'flex items-center gap-2 [&_>span]:hover:opacity-100 [&_>span]:hover:scale-100 cursor-pointer',
    className,
  );

  return React.createElement(
    as,
    {
      className: classNames,
      ...restProps,
    },
    [
      children,
      <span
        key={restProps?.id}
        className='text-muted-foreground scale-0 opacity-0 transition-all'
      >
        <LinkIcon size={18} />
      </span>,
    ],
  );
};

// export const CustomLink = ({
//   children,
//   href,
//   ...props
// }: DetailedHTMLProps<HTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement> & {
//   href: string;
// }) => {
//   return (
//     <Link href={href} {...props}>
//       {children}
//     </Link>
//   );
// };
