import React from 'react';
import { routes } from '../../config/routes';
import { AsideLinks } from '../../components/layout/aside-links';

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className=''>
      <aside className='fixed left-0 top-0 ms-10 mt-16 h-[calc(100vh_-_theme(height.16))] w-80 border-e-[1px] border-gray-700 p-5 backdrop-blur-sm'>
        {routes.map((item) => (
          <AsideLinks key={item._key} {...item} />
        ))}
      </aside>
      <main className='ms-[calc(theme(width.80)_+_theme(width.10))] mt-16 min-h-[calc(100vh_-_theme(height.16))] w-[calc(100%_-_theme(width.80)_*_2_-_theme(width.10)_*_2)] p-5'>
        {children}
      </main>
      <aside className='fixed right-0 top-0 me-10 mt-16 h-[calc(100vh_-_theme(height.16))] w-80  border-gray-700 p-5 backdrop-blur-sm'>
        Content Of Page
      </aside>
    </div>
  );
}
