'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';
import { cn } from '@zyxui/lib';

const DocsHeadings = ({
  items,
}: {
  items: { level: number; text: string; id: string }[];
}) => {
  const pathname = usePathname();

  console.log('items');
  console.log(items);


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
                    '',
                    __.level > 2 ? 'border-s border-s-gray-700 ps-4' : __.level > 3 ? 'border-s border-s-gray-700 ps-6' : '',
                  )}
                >
                  <Link href={pathname + '#' + __.id}>{__.text}</Link>
                </li>
              ),
          )}
      </ul>
    </div>
  );
};

export default DocsHeadings;
