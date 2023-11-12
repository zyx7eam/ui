'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';
import { cn } from '@geeks/lib';

const DocsHeadings = ({
  items,
}: {
  items: { level: number; text: string; id: string }[];
}) => {
  const pathname = usePathname();
  return (
    <div>
      <h5 className='mb-2 border-b border-gray-700 pb-2 font-bold'>Contents</h5>
      <ul className='text-sm'>
        {items?.length > 0 &&
          items.map(
            (__) =>
              __.level > 1 && (
                <li
                  key={__.id}
                  className={cn(
                    __.level > 2 && 'border-s border-s-gray-700 py-1 ps-4'
                  )}
                >
                  <Link href={pathname + '#' + __.id}>{__.text}</Link>
                </li>
              )
          )}
      </ul>
    </div>
  );
};

export default DocsHeadings;
