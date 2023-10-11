import { navLinks } from '@/config/nav';
import { GithubIcon } from 'lucide-react';
import Link from 'next/link';
import React from 'react';
import { Button } from 'ui';

const NavLink = ({ href, title }: { href: string; title: string }) => (
  <Link href={href}>{title}</Link>
);

const Navbar = () => {
  return (
    <header className='fixed left-0 top-0 z-40 w-full border-b-[1px] border-gray-700 p-4 backdrop-blur-sm'>
      <nav className='mx-10 flex w-[calc(100%_-_theme(margin.20))] items-center justify-between'>
        <div className='w-96 '>
          <Link href={'/'}>
            <h1>@Geeks/UI</h1>
          </Link>
        </div>
        <div className='flex flex-1 items-center justify-center gap-5'>
          {navLinks.map(({ _key, ...props }) => (
            <NavLink key={_key} {...props} />
          ))}
        </div>
        <div className='flex w-96 items-center justify-end gap-2 '>
          <Button>Get Started</Button>
          <a
            href='https://github.com/Geeks7eam/ui'
            target='_blank'
            rel='noopener noreferrer'
          >
            <Button iconOnly variant={'flat'} radius={'circle'}>
              <GithubIcon />
            </Button>
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
