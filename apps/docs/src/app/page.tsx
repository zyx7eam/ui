import { MoveRightIcon } from 'lucide-react';
import Link from 'next/link';
import { Button } from 'geeks-ui';

export default function Home() {
  return (
    <main className='relative z-50'>
      <div className='mx-auto max-w-6xl '>
        <div className='flex translate-y-64 transform flex-col gap-2 pb-36'>
          <h2 className='mx-auto my-10 max-w-3xl text-center text-4xl font-bold md:text-7xl'>
            Write Less, <br />
            Achieve More
          </h2>
          <Link href='/docs/components' className='mx-auto w-fit'>
            <Button endContent={<MoveRightIcon size={18} />}>
              Explore Components
            </Button>
          </Link>
        </div>
      </div>
    </main>
  );
}
