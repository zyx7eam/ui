import { navLinks } from '@/config/nav';
import { BadgeInfoIcon, GithubIcon, MenuIcon } from 'lucide-react';
import Link from 'next/link';
import React, { LegacyRef } from 'react';
import Button from '@zyxui/button';
import MobileNav from './mobile-nav';
import NavbarProvider from './navbar.provider';
import NavLink from './nav-link';

const Navbar = () => {
  return (
    <>
      <NavbarProvider />

      <header className='sticky left-0 top-0 z-40 flex h-16 w-full flex-col justify-center border-b-[1px] border-gray-700  backdrop-blur-sm'>
        <nav className='mx-10 flex w-[calc(100%_-_theme(margin.20))] items-center justify-between'>
          <div className='w-96'>
            <Link href={'/'}>
              <h1>
                @zyxui{' '}
                <span className='ms-2 rounded-md border border-amber-700 bg-amber-700/20 p-1 text-xs text-amber-700'>
                  Beta
                </span>
              </h1>
            </Link>
          </div>
          <div className='hidden flex-1 items-center justify-center gap-5 lg:flex'>
            {navLinks.map(({ _key, ...props }) => (
              <NavLink key={_key} {...props} />
            ))}
          </div>
          <div className='flex w-96 items-center justify-end gap-2'>
            {/* <Button>Get Started</Button> */}
            <a
              href='https://github.com/zyx7eam/ui'
              target='_blank'
              rel='noopener noreferrer'
            >
              <Button iconOnly variant={'flat'} radius={'circle'}>
                <GithubIcon size={18} />
              </Button>
            </a>
            <MobileNav />
            {/* <a href='#' className='block lg:hidden'>
              <Button iconOnly variant={'flat'} radius={'circle'}>
                <MenuIcon size={18} />
              </Button>
            </a> */}
          </div>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
