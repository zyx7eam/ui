import React from 'react';

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className=''>
      {/* <main className='w-[calc(100%_-_theme(width.80)_*_2_-_theme(width.10)_*_2)] p-5'> */}
      <main className=''>{children}</main>
    </div>
  );
}
