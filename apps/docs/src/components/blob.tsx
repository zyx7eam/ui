'use client';

import React from 'react';
import { usePathname } from 'next/navigation';
import { cn } from 'shared-lib';

const Blob = () => {
  const pathname = usePathname();

  const classNames = cn(
    'bg-primary transition-all fixed left-1/2 top-1/2 z-0 h-[436px] w-[436px] -translate-x-1/2 -translate-y-1/2 transform rounded-full opacity-40 blur-3xl',
    pathname.startsWith('/docs') ? 'left-2 top-10 w-80 h-80' : ''
  );
  return <div className={classNames} />;
};

export default Blob;
