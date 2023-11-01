'use client';
import React, { useRef } from 'react';
import { Button } from 'ui';

const ButtonPageExamples = () => {
  const ref = useRef<any>(null);

  return (
    <div>
      <h1>Button Components</h1>

      <Button ref={ref}>Ref Button</Button>
    </div>
  );
};

export default ButtonPageExamples;
