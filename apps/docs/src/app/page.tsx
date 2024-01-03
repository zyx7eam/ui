import { MoveRightIcon, RocketIcon, ArrowDownIcon } from 'lucide-react';
import Link from 'next/link';
import Button from '@zyxui/button';
import Text from '@zyxui/text'

export default function Home() {
  return (
    <main className='relative z-50'>
      <div className='mx-auto max-w-6xl'>
        <div className='flex translate-y-28 transform flex-col gap-2 pb-36'>
          <h2 className='mx-auto my-10 max-w-3xl text-center text-4xl font-bold md:text-7xl'>
            Write Less, <br />
            Achieve More
          </h2>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-5 lg:px-0 gap-10'>
            <div className='relative z-40 rounded-md p-[1px] overflow-hidden before:content-[""] background-animate before:rounded-md before:overflow-hidden before:absolute before:-z-[1] before:inset-0 before:bg-gradient-to-br before:from-slate-300 before:via-white before:to-slate-800 before:-mx-[10px] before:-my-[10px]'>
              <div className='bg-black/90 h-full rounded-md overflow-hidden backdrop-blur-xl p-4'>
                <Text as={'h4'} className='mb-5'>
                  Easy Customization 🚀
                </Text>
                <Text as={'p'}>
                  Create your modern designs fastly, in simple way!
                </Text>
                <Link href='/docs/introduction' className='mx-auto w-fit'>
                  <Button variant={'flat'} endContent={<MoveRightIcon size={16} />}>Get Started</Button>
                </Link>
              </div>
            </div>
            <div className='relative z-40 rounded-md p-[1px] overflow-hidden before:content-[""] background-animate before:rounded-md before:overflow-hidden before:absolute before:-z-[1] before:inset-0 before:bg-gradient-to-br before:from-slate-300 before:via-white before:to-slate-800 before:-mx-[10px] before:-my-[10px]'>
              <div className='bg-black/90 h-full rounded-md overflow-hidden backdrop-blur-xl p-4'>
                <Text as={'h4'} className='mb-5'>
                  Rich Components 😎
                </Text>
                <Text as={'p'}>
                  <Text as={'code'} color='error'>@zyxui</Text> has and will have more and more components!
                </Text>
                <Link href='/docs/components' className='mx-auto w-fit'>
                  <Button variant={'flat'} endContent={<RocketIcon size={16} />}>Explore Components</Button>
                </Link>
              </div>
            </div>
            <div className='relative z-40 rounded-md p-[1px] overflow-hidden before:content-[""] background-animate before:rounded-md before:overflow-hidden before:absolute before:-z-[1] before:inset-0 before:bg-gradient-to-br before:from-slate-300 before:via-white before:to-slate-800 before:-mx-[10px] before:-my-[10px]'>
              <div className='bg-black/90 h-full rounded-md overflow-hidden backdrop-blur-xl p-4'>
                <Text as={'h4'} className='mb-5'>
                  Easy Setup 😻
                </Text>
                <Text as={'p'}>
                  Every one can easly integrate and install the <Text as={'code'} color='error'>@zyxui</Text> easly in simple steps!
                </Text>
                <Link href='/docs/installation' className='mx-auto w-fit'>
                  <Button variant={'flat'} endContent={<ArrowDownIcon size={16} />}>Installation</Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
