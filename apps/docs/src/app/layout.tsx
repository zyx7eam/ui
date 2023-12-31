import './globals.css';
import type { Metadata } from 'next';
import { PT_Sans } from 'next/font/google';
import Navbar from '../components/layout/navbar';
import Blob from '@/components/blob';

const pt_sans = PT_Sans({ weight: ['400', '700'], subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Zyxui | React UI Components Lib',
  description: 'React UI Component Library',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en' className='dark'>
      <body className={pt_sans.className}>
        <Navbar />
        <div className='relative z-10 antialiased'>{children}</div>
        <Blob />
      </body>
    </html>
  );
}
