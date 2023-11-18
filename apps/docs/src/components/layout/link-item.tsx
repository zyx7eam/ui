'use client';
import React from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { cn } from '../../lib/utils.docs';
import { AlignRightIcon, ChevronRightIcon } from 'lucide-react';

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
    'relative p-1 block rounded-sm text-primary/40 [&_.arrow]:hover:w-5 [&_.arrow]:hover:h-5 [&_.arrow]:hover:opacity-100 [&_.badge]:hover:right-6 flex justify-between items-center',
    href.startsWith(pathname) ? 'text-primary' : '',
    disabled ? 'hover:cursor-not-allowed' : '',
  );
  return (
    <Link href={!disabled ? href : '#'} className={classNames}>
      {children}
      {!disabled ? (
        isNew ? (
          <span className='badge border-primary bg-primary/20 text-primary absolute right-2 top-1/2 -translate-y-1/2 transform rounded-lg border-[1px] px-1 text-xs transition-all'>
            new
          </span>
        ) : null
      ) : (
        <span className='badge border-warning bg-warning/20 text-warning absolute right-2 top-1/2 -translate-y-1/2 transform rounded-lg border-[1px] px-1 text-xs transition-all'>
          soon
        </span>
      )}
      <span className='arrow flex h-0 w-0 items-center justify-center overflow-hidden opacity-0 transition-all'>
        <ChevronRightIcon size={18} />
      </span>
    </Link>
  );
};

export default LinkItem;
