import React from 'react';
import { routes } from '../../config/routes';
import { AsideLinks } from '../../components/layout/aside-links';
import { Alert } from 'ui';

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className='flex'>
      <aside className='sticky left-0 top-16 ms-10 hidden h-[calc(100vh_-_theme(height.16))] w-52 border-e-[1px] border-gray-700 p-5 ps-0 backdrop-blur-sm lg:block xl:w-72'>
        {routes.map((item) => (
          <AsideLinks key={item._key} {...item} />
        ))}
      </aside>
      {/* <main className='w-[calc(100%_-_theme(width.80)_*_2_-_theme(width.10)_*_2)] p-5'> */}
      <main className='flex-1'>{children}</main>
    </div>
  );
}
