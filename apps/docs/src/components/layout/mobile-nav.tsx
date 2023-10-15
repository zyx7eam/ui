'use client';

import { MenuIcon } from 'lucide-react';
import { useEffect, useState } from 'react';
import { Button } from 'ui';
import { AsideLinks } from './aside-links';
import { routes } from '@/config/routes';
import { usePathname } from 'next/navigation';

const MobileNav = () => {
  const pathname = usePathname();
  const [open, setOpen] = useState<boolean>(false);

  const toggleNav = () => setOpen(!open);

  useEffect(() => {
    if (open) setOpen(false);
  }, [pathname]);

  return (
    <>
      <div className='block lg:hidden'>
        <Button iconOnly radius={'circle'} variant={'flat'} onClick={toggleNav}>
          <MenuIcon size={18} />
        </Button>
      </div>
      {open && (
        <div className='bg-background fixed left-0 top-16 h-[calc(100vh_-_theme(height.16))] w-full p-10'>
          {routes.map((item) => (
            <AsideLinks key={item._key} {...item} />
          ))}
        </div>
      )}
    </>
  );
};

export default MobileNav;
