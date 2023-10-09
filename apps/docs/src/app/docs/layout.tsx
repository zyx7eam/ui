import React from 'react';
import { routes } from '../../config/routes';
import { AsideLinks } from '../../components/layout/aside-links';

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className='mx-auto max-w-7xl'>
      <div className='grid min-h-screen grid-cols-12 gap-2'>
        <aside className='col-span-3 bg-white/40'>
          {routes.map((item) => (
            <AsideLinks key={item.key} {...item} />
          ))}
        </aside>
        <div className='col-span-9 bg-red-200'>{children}</div>
      </div>
    </div>
  );
}
