'use client';
import React from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { cn } from '../../lib/utils.docs';

const LinkItem = ({
  href,
  children,
  isNew,
  disabled,
}: {
  href: string;
  children: React.ReactNode;
  isNew: boolean;
  disabled?: boolean;
}) => {
  const pathname = usePathname();
  const classNames = cn(
    'relative p-1 block rounded-sm hover:bg-primary/20 text-primary/40',
    href.startsWith(pathname) ? 'text-primary' : '',
    disabled ? 'hover:cursor-not-allowed' : ''
  );
  return (
    <Link href={!disabled ? href : '#'} className={classNames}>
      {children}
      {!disabled ? (
        isNew ? (
          <span className='border-primary bg-primary/20 text-primary absolute right-2 top-1/2 -translate-y-1/2 transform rounded-lg border-[1px] px-1 text-xs'>
            new
          </span>
        ) : null
      ) : (
        <span className='border-warning bg-warning/20 text-warning absolute right-2 top-1/2 -translate-y-1/2 transform rounded-lg border-[1px] px-1 text-xs'>
          developing
        </span>
      )}
    </Link>
  );
};

export default LinkItem;
