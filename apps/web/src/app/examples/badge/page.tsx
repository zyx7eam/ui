'use client';

import React from 'react';
import Badge from '@zyxui/badge';
import Button from '@zyxui/button';
import {
  Mail,
  ShoppingCart,
  Bell,
  UserCircle,
  Settings,
  AlertTriangle,
} from 'lucide-react';

const BadgePage = () => {
  const [cartCount, setCartCount] = React.useState(3);
  const [showNotificationDot, setShowNotificationDot] = React.useState(true);

  return (
    <div className='min-h-screen bg-gradient-to-br from-slate-100 to-sky-100 px-4 py-12 dark:from-slate-900 dark:to-sky-900'>
      <div className='mx-auto max-w-5xl space-y-12'>
        <header className='text-center'>
          <h1 className='mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-5xl font-extrabold text-transparent dark:from-blue-400 dark:to-purple-400'>
            Badge Component Playground
          </h1>
          <p className='text-xl text-gray-700 dark:text-gray-300'>
            Discover the versatility of the Badge component with interactive
            examples.
          </p>
        </header>

        {/* Basic Examples */}
        <section className='rounded-xl bg-white p-8 shadow-2xl dark:bg-gray-800'>
          <h2 className='mb-8 border-b-2 border-purple-500 pb-3 text-3xl font-bold text-gray-800 dark:text-white'>
            Basic Badges
          </h2>
          <div className='grid grid-cols-2 place-items-center gap-8 sm:grid-cols-3 md:grid-cols-4'>
            <Badge content='Default' />
            <Badge content='Primary' color='primary' />
            <Badge content='Secondary' color='secondary' />
            <Badge content='Success!' color='success' shape='rounded' />
            <Badge content='Warning' color='warning' size='lg' />
            <Badge
              content='Danger Zone'
              color='danger'
              size='sm'
              shape='rounded'
            />
            <Badge content='Info' color='info' />
            <Badge content={<i>Italic</i>} color='primary' />
          </div>
        </section>

        {/* Variants & Shapes */}
        <section className='rounded-xl bg-white p-8 shadow-2xl dark:bg-gray-800'>
          <h2 className='mb-8 border-b-2 border-green-500 pb-3 text-3xl font-bold text-gray-800 dark:text-white'>
            Variants & Shapes
          </h2>
          <div className='grid grid-cols-2 place-items-center gap-8 sm:grid-cols-3'>
            <Badge
              content='Solid Pill'
              variant='solid'
              color='success'
              shape='pill'
            />
            <Badge
              content='Outline Rounded'
              variant='outline'
              color='success'
              shape='rounded'
            />
            <Badge
              content='Ghost Pill'
              variant='ghost'
              color='success'
              shape='pill'
            />
            <Badge
              content='Solid Rounded'
              variant='solid'
              color='warning'
              shape='rounded'
            />
            <Badge
              content='Outline Pill'
              variant='outline'
              color='warning'
              shape='pill'
            />
            <Badge
              content='Ghost Rounded'
              variant='ghost'
              color='warning'
              shape='rounded'
            />
          </div>
        </section>

        {/* Numerical Content & Max */}
        <section className='rounded-xl bg-white p-8 shadow-2xl dark:bg-gray-800'>
          <h2 className='mb-8 border-b-2 border-red-500 pb-3 text-3xl font-bold text-gray-800 dark:text-white'>
            Numerical & Max Count
          </h2>
          <div className='flex flex-wrap items-center justify-around gap-8'>
            <Badge content={5} color='primary' size='lg' />
            <Badge content={125} max={99} color='primary' size='lg' />
            <Badge content={0} color='primary' size='lg' />
            <Badge content={0} showZero color='primary' size='lg' />
            <Button onClick={() => setCartCount((c) => c + 1)}>
              Add to cart
            </Button>
            <Badge content={cartCount} max={9} color='danger' size='lg'>
              <ShoppingCart className='h-8 w-8' />
            </Badge>
          </div>
        </section>

        {/* Dot Badges */}
        <section className='rounded-xl bg-white p-8 shadow-2xl dark:bg-gray-800'>
          <h2 className='mb-8 border-b-2 border-yellow-500 pb-3 text-3xl font-bold text-gray-800 dark:text-white'>
            Dot Indicators
          </h2>
          <div className='flex flex-wrap items-center justify-around gap-10'>
            <Badge dot color='success' />
            <Badge dot color='warning' size='lg' />
            <Badge dot color='danger' size='sm' />
            <Badge dot color='info' />
            <Badge dot color='primary' size='lg' />
            <Button
              onClick={() => setShowNotificationDot((s) => !s)}
              className='relative'
            >
              <Bell className='h-6 w-6' />
              {showNotificationDot && (
                <Badge
                  dot
                  color='danger'
                  className='absolute -right-1 -top-1'
                />
              )}
            </Button>
          </div>
        </section>

        {/* Wrapping Elements */}
        <section className='rounded-xl bg-white p-8 shadow-2xl dark:bg-gray-800'>
          <h2 className='mb-8 border-b-2 border-indigo-500 pb-3 text-3xl font-bold text-gray-800 dark:text-white'>
            Wrapping Elements
          </h2>
          <div className='flex flex-wrap items-center justify-around gap-10 text-gray-700 dark:text-gray-300'>
            <Badge content={cartCount} color='danger'>
              <div className='rounded-lg bg-slate-200 p-3 shadow dark:bg-slate-700'>
                <ShoppingCart className='h-10 w-10' />
              </div>
            </Badge>
            <Badge content='New' color='primary' shape='rounded'>
              <Button variant='outline'>Feature</Button>
            </Badge>
            <Badge dot color='success'>
              <div className='flex items-center space-x-2 rounded-full bg-slate-200 p-3 shadow dark:bg-slate-700'>
                <UserCircle className='h-8 w-8' />
                <span>User Online</span>
              </div>
            </Badge>
            <Badge content='Verify' color='warning' variant='outline'>
              <Button color='warning' variant='ghost' size='lg'>
                Account <AlertTriangle className='ml-2 h-5 w-5' />
              </Button>
            </Badge>
          </div>
        </section>

        {/* Interactive Visibility */}
        <section className='rounded-xl bg-white p-8 shadow-2xl dark:bg-gray-800'>
          <h2 className='mb-8 border-b-2 border-teal-500 pb-3 text-3xl font-bold text-gray-800 dark:text-white'>
            Interactive Visibility
          </h2>
          <div className='flex flex-col items-center gap-6'>
            <Badge
              content='Click Toggle'
              color='info'
              invisible={!showNotificationDot}
              size='lg'
            />
            <Button onClick={() => setShowNotificationDot((s) => !s)}>
              {showNotificationDot ? 'Hide' : 'Show'} Badge
            </Button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default BadgePage;
