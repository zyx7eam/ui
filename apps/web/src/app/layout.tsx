import './globals.css';

import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ReactNode } from 'react';
import { ModeToggle, ThemeProvider } from '@geeks/ui';
import Navbar from '../components/layout/navbar';
import Container from '../components/container';
import Blob from '../components/elements/blob';

export const metadata: Metadata = {
  title: 'Web App',
  description: 'Welcome to Next.js 13',
};

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute='class' defaultTheme='system' enableSystem>
          <Navbar />
          {/* <main className='flex min-h-[70vh] w-full flex-col overflow-hidden p-4 md:container'> */}
          <main className='relative'>
            <Container>
              <div className='flex w-full justify-end'>
                <ModeToggle />
              </div>
              {children}
            </Container>
          </main>
          <div className='fixed bottom-20 right-5 -z-10 h-screen w-screen'>
            <Blob />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
