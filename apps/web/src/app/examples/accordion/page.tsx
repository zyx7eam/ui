'use client';

import Accordion from '@zyxui/accordion';
import React, { useState } from 'react';

const AccordionExample = () => {
  return (
    <Accordion
      defaultValues={['2']}
      variant='bordered'
      items={[
        {
          id: '1',
          title: 'Hello Header',
          content: <p>This is an accordion</p>,
        },
        {
          id: '2',
          title: 'Hello Header 2',
          content: <p>This is an accordion 2</p>,
        },
        {
          id: '3',
          title: 'Hello Header 3',
          content: <p>This is an accordion 3</p>,
        },
      ]}
    />
  );
};

export default AccordionExample;
