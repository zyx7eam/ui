'use client';
import { GithubIcon } from 'lucide-react';
import Link from 'next/link';
import React from 'react';
import { Button } from 'ui';

const Navbar = () => {
  return (
    <header className='bg-muted border-b-[1px] border-gray-700 p-4'>
      <nav className='flex items-center justify-between'>
        <Link href={'/'}>
          <h1>@Geeks/UI</h1>
        </Link>
        <div className='flex items-center gap-4'>
          <div>
            <Link href={'/docs/components/button'}>Components</Link>
          </div>
          <div className='flex gap-2'>
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
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
