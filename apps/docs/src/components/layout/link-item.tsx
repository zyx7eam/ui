'use client';
import React from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { cn } from '../../lib/utils.docs';

const LinkItem = ({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) => {
  const pathname = usePathname();
  const classNames = cn(href.startsWith(pathname) ? 'text-red-500' : '');
  return (
    <Link href={href} className={classNames}>
      {children}
    </Link>
  );
};

export default LinkItem;
