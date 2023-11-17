import React from 'react';
import { Accordion } from '@geeks/ui';
const AccordionPage = () => {
  return (
    <div>
      <h1>AccordionPage</h1>
      <div>
        <Accordion
          multiple={true}
          defaultValues={['2']}
          variant='default'
          items={[
            {
              id: 1,
              title: 'Hello Header',
              content: <p>This is an accordion</p>,
            },
            {
              id: 2,
              title: 'Hello Header 2',
              content: <p>This is an accordion 2</p>,
            },
            {
              id: 3,
              title: 'Hello Header 3',
              content: <p>This is an accordion 3</p>,
            },
          ]}
        />
      </div>
      {/* <div className='relative h-screen w-full'>
        <div className='absolute left-1/2 top-1/2 z-0 h-96 w-96 -translate-x-1/2 -translate-y-60 transform rounded-full bg-sky-600 blur-3xl' />
        <div className='absolute left-1/2 top-1/2 z-0 h-96 w-96  transform rounded-full bg-pink-700 blur-3xl' />
        <div className='absolute left-1/2 top-1/2 z-0 h-96 w-96 -translate-x-full  transform rounded-full bg-yellow-600 blur-3xl' />
        <div className='absolute left-1/2 top-1/2 z-10 h-[800px] w-[800px] -translate-x-1/2 -translate-y-64 transform border bg-black/60 backdrop-blur-md'>
          <div className='p-5'>
            <div className='grid grid-cols-12 gap-2'>
              <h1 className='col-span-12 text-2xl font-bold'>
                @@geeks/ui 0.2.3-beta Version {'\u{1F4E2}'}{' '}
                <span className='rounded-md border border-pink-700 bg-pink-700/20 p-1 text-sm font-light text-pink-700'>
                  Preview Version Available
                </span>
              </h1>
              <div className='col-span-12'>
                <h2 className='mb-3 text-lg font-medium'>
                  - New Accordion Component:
                </h2>
                <div className='mb-5 bg-black p-10'>
                  <Accordion
                    defaultValues={['1']}
                    variant='default'
                    items={[
                      {
                        id: 1,
                        title: 'Hello Accordion Component!',
                        content: (
                          <p className='text-md'>
                            This is an accordion <br /> Say hello{'\u{1F44B}'}{' '}
                            to our new component!
                          </p>
                        ),
                      },
                      {
                        id: 2,
                        title: 'Accordion Item 2',
                        content: <p>This is an accordion 2</p>,
                      },
                    ]}
                  />
                </div>
                <h2 className='mb-3 text-lg font-medium'>
                  - Fix Bugs & Improvements:
                </h2>
                <ul className='ms-10 flex list-disc flex-col justify-center gap-1 font-medium'>
                  <li>Documentation Preview Version {'\u{1F3AF}'}</li>
                  <li>Button Component Documentation Page {'\u{1F3AF}'}</li>
                  <li>Alert Component Documentation Page {'\u{1F3AF}'}</li>
                  <li>
                    Alert Component&#39;s New Prop `direction` {'\u2B06\uFE0F'}
                  </li>
                  <li>Accordion Component Documentation Page {'\u{1F3AF}'}</li>
                  <li>Add Support For Framer-Motion {'\u2795'}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default AccordionPage;
