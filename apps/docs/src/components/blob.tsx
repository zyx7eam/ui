'use client';

import React from 'react';
import { usePathname } from 'next/navigation';
import { cn } from '@geeks/lib';

const Blob = () => {
  const pathname = usePathname();

  const classNames = cn(
    'bg-primary transition-all fixed z-0 h-[436px] w-[436px] transform rounded-full opacity-20 blur-3xl',
    pathname.startsWith('/docs')
      ? 'right-2 bottom-0 w-80 h-80'
      : 'left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2'
  );
  return <div className={classNames} />;
};

export default Blob;
