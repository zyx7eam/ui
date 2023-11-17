import './globals.css';

import type { Metadata } from 'next';
import { ReactNode } from 'react';
import Navbar from '../components/layout/navbar';
import Container from '../components/container';


export const metadata: Metadata = {
  title: 'Web App',
  description: 'Welcome to Next.js 13',
};



export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body>
          <Navbar />
          {/* <main className='flex min-h-[70vh] w-full flex-col overflow-hidden p-4 md:container'> */}
          <main className='relative'>
            <Container>
              {children}
            </Container>
          </main>
          
      </body>
    </html>
  );
}
