import React from 'react';
import Container from '../container';
import Link from 'next/link';
import { GithubIcon } from 'lucide-react';

const Navbar = () => {
  return (
    <header className='border-b-2 border-red-500'>
      <Container>
        <nav className='flex items-center justify-between'>
          <div className='flex items-center space-x-10'>
            <Link href={'/'}>
              <h1 className='text-xl font-bold'>
                <span className=''>@Geeks</span>/<span className=''>UI</span>
              </h1>
            </Link>
            <ul className='flex gap-2 text-sm'>
              <li>
                <Link
                  href={'/'}
                  className='transition-colors hover:text-red-400'
                >
                  Components
                </Link>
              </li>
            </ul>
          </div>
          <div className='flex items-center gap-4'>
            <a
              href='#'
              className='flex items-center justify-center rounded-full bg-red-400 p-1'
            >
              <GithubIcon size={18} />
            </a>
          </div>
        </nav>
      </Container>
    </header>
  );
};

export default Navbar;
