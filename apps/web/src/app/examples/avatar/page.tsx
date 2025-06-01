'use client';

import React from 'react';
import Avatar from '@zyxui/avatar';
import Button from '@zyxui/button';
import { User, Camera, Star, ShieldCheck, Bell } from 'lucide-react';

const AvatarPage = () => {
  const [currentStatus, setCurrentStatus] = React.useState<
    'online' | 'offline' | 'away' | 'busy' | undefined
  >('online');

  const cycleStatus = () => {
    const statuses: Array<'online' | 'offline' | 'away' | 'busy' | undefined> =
      ['online', 'away', 'busy', 'offline', undefined];
    setCurrentStatus((prev) => {
      if (!prev) return 'online';
      const currentIndex = statuses.indexOf(prev);
      return statuses[(currentIndex + 1) % statuses.length];
    });
  };

  return (
    <div className='min-h-screen bg-gray-50 px-4 py-12 dark:bg-gray-900'>
      <div className='mx-auto max-w-5xl space-y-12'>
        <header className='text-center'>
          <h1 className='mb-4 text-4xl font-bold text-gray-900 dark:text-white'>
            Avatar Component Showcase
          </h1>
          <p className='text-lg text-gray-600 dark:text-gray-300'>
            Explore the various features and styles of the Avatar component.
          </p>
        </header>

        <section className='rounded-lg bg-white p-6 shadow-lg dark:bg-gray-800'>
          <h2 className='mb-6 text-2xl font-semibold text-gray-800 dark:text-white'>
            Basic Avatars
          </h2>
          <div className='flex flex-wrap items-center justify-around gap-6'>
            <Avatar
              src='https://i.pravatar.cc/150?u=a042581f4e29026024d'
              alt='User Image'
            />
            <Avatar fallback='ZY' color='primary' />
            <Avatar icon={<User size={24} />} color='secondary' />
            <Avatar
              src='/non-existent.jpg'
              fallback={<Camera size={24} />}
              color='danger'
            />
            <Avatar fallback='UI' shape='square' color='success' />
          </div>
        </section>

        <section className='rounded-lg bg-white p-6 shadow-lg dark:bg-gray-800'>
          <h2 className='mb-6 text-2xl font-semibold text-gray-800 dark:text-white'>
            Sizes
          </h2>
          <div className='flex flex-wrap items-center justify-around gap-6'>
            <Avatar
              src='https://i.pravatar.cc/150?u=sm'
              size='sm'
              alt='Small'
            />
            <Avatar
              src='https://i.pravatar.cc/150?u=md'
              size='md'
              alt='Medium (default)'
            />
            <Avatar
              src='https://i.pravatar.cc/150?u=lg'
              size='lg'
              alt='Large'
            />
            <Avatar
              src='https://i.pravatar.cc/150?u=xl'
              size='xl'
              alt='Extra Large'
            />
          </div>
        </section>

        <section className='rounded-lg bg-white p-6 shadow-lg dark:bg-gray-800'>
          <h2 className='mb-6 text-2xl font-semibold text-gray-800 dark:text-white'>
            Shapes & Border
          </h2>
          <div className='flex flex-wrap items-center justify-around gap-6'>
            <Avatar
              src='https://i.pravatar.cc/150?u=circle'
              shape='circle'
              alt='Circle (default)'
            />
            <Avatar
              src='https://i.pravatar.cc/150?u=square'
              shape='square'
              alt='Square'
            />
            <Avatar
              src='https://i.pravatar.cc/150?u=bordered'
              bordered
              color='primary'
              alt='Bordered'
            />
            <Avatar fallback='B' shape='square' bordered color='warning' />
          </div>
        </section>

        <section className='rounded-lg bg-white p-6 shadow-lg dark:bg-gray-800'>
          <h2 className='mb-6 text-2xl font-semibold text-gray-800 dark:text-white'>
            Fallback States & Colors
          </h2>
          <div className='grid grid-cols-2 place-items-center gap-6 md:grid-cols-3 lg:grid-cols-4'>
            <Avatar fallback='DF' color='default' size='lg' />
            <Avatar fallback='PR' color='primary' size='lg' />
            <Avatar fallback='SC' color='secondary' size='lg' />
            <Avatar fallback='SU' color='success' size='lg' />
            <Avatar fallback='WA' color='warning' size='lg' />
            <Avatar fallback='DA' color='danger' size='lg' />
            <Avatar icon={<Star />} color='default' bordered size='lg' />
            <Avatar
              src='/no.jpg'
              fallback='ERR'
              color='danger'
              bordered
              size='lg'
            />
          </div>
        </section>

        <section className='rounded-lg bg-white p-6 shadow-lg dark:bg-gray-800'>
          <h2 className='mb-6 text-2xl font-semibold text-gray-800 dark:text-white'>
            Status Indicators
          </h2>
          <div className='flex flex-wrap items-center justify-around gap-8'>
            <Avatar
              src='https://i.pravatar.cc/150?u=online'
              status='online'
              size='xl'
              alt='Online'
            />
            <Avatar
              src='https://i.pravatar.cc/150?u=offline'
              status='offline'
              size='xl'
              alt='Offline'
            />
            <Avatar
              src='https://i.pravatar.cc/150?u=away'
              status='away'
              statusPosition='top-left'
              size='xl'
              alt='Away'
            />
            <Avatar
              src='https://i.pravatar.cc/150?u=busy'
              status='busy'
              statusPosition='bottom-left'
              size='xl'
              alt='Busy'
            />
            <Avatar
              fallback='S'
              color='primary'
              status='online'
              statusPosition='top-right'
              size='xl'
              bordered
            />
          </div>
        </section>

        <section className='rounded-lg bg-white p-6 shadow-lg dark:bg-gray-800'>
          <h2 className='mb-6 text-2xl font-semibold text-gray-800 dark:text-white'>
            Interactive Example
          </h2>
          <div className='flex flex-col items-center gap-6'>
            <Avatar
              src='https://i.pravatar.cc/150?u=interactive'
              status={currentStatus}
              size='xl'
              bordered
              color={
                currentStatus === 'online'
                  ? 'success'
                  : currentStatus === 'busy'
                    ? 'danger'
                    : 'primary'
              }
              className='cursor-pointer transition-all hover:scale-110 active:scale-95'
              onClick={cycleStatus}
              alt='Interactive Avatar - Click to cycle status'
            />
            <p className='text-gray-600 dark:text-gray-300'>
              Current status:{' '}
              <span
                className={`font-semibold ${currentStatus === 'online' ? 'text-green-500' : currentStatus === 'busy' ? 'text-red-500' : 'text-yellow-500'}`}
              >
                {currentStatus || 'None'}
              </span>{' '}
              (Click avatar to change)
            </p>
            <Button onClick={cycleStatus} size='sm'>
              Cycle Status
            </Button>
          </div>
        </section>

        <section className='rounded-lg bg-white p-6 shadow-lg dark:bg-gray-800'>
          <h2 className='mb-6 text-2xl font-semibold text-gray-800 dark:text-white'>
            Usage in a List
          </h2>
          <ul className='space-y-4'>
            {[
              {
                name: 'Alice Wonderland',
                src: 'https://i.pravatar.cc/150?u=alice',
                status: 'online',
                role: 'Frontend Developer',
              },
              {
                name: 'Bob The Builder',
                initials: 'BB',
                status: 'away',
                role: 'Backend Engineer',
              },
              {
                name: 'Charlie Chaplin',
                icon: <User />,
                status: 'busy',
                role: 'UX Designer',
              },
              {
                name: 'Diana Prince',
                src: 'https://i.pravatar.cc/150?u=diana',
                status: 'offline',
                role: 'Project Manager',
              },
            ].map((item) => (
              <li
                key={item.name}
                className='flex items-center rounded-md bg-gray-50 p-3 shadow-sm dark:bg-gray-700'
              >
                <Avatar
                  src={item.src}
                  fallback={item.initials}
                  icon={item.icon}
                  status={item.status as any}
                  size='md'
                  className='mr-4'
                  alt={item.name}
                />
                <div>
                  <p className='font-semibold text-gray-800 dark:text-white'>
                    {item.name}
                  </p>
                  <p className='text-sm text-gray-500 dark:text-gray-400'>
                    {item.role}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
};

export default AvatarPage;
