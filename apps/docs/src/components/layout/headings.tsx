'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const DocsHeadings = ({
  items,
}: {
  items: { level: number; text: string; id: string }[];
}) => {
  const pathname = usePathname();
  return (
    <div>
      <h5 className='mb-2 border-b border-gray-700 pb-2 font-bold'>Contents</h5>
      <ul>
        {items?.length > 0 &&
          items.map((__) => (
            <li key={__.id}>
              <Link href={pathname + '#' + __.id}>{__.text}</Link>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default DocsHeadings;
