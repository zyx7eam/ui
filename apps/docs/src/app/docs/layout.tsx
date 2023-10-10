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
      <div className='grid min-h-screen grid-cols-12 gap-2'>
        <aside className='bg-muted col-span-2 border-e-[1px] border-gray-700 p-5'>
          {routes.map((item) => (
            <AsideLinks key={item._key} {...item} />
          ))}
        </aside>
        <div className='col-span-10 p-5'>{children}</div>
      </div>
    </div>
  );
}
