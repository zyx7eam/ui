'use client';
import React, { useState } from 'react';
import { Button } from 'geeks-ui';
import ClipboardButton from './clipboard';
import { cn } from 'shared-lib';

const PreClient = ({ lang, children, copyCodeData, ...props }: any) => {
  const [show, setShow] = useState<boolean>(false);

  const classNames = cn(
    show
      ? 'relative [&_>.copy]:hover:opacity-100 [&_>.copy]:z-20'
      : 'flex min-h-[5rem] items-center justify-center'
  );

  return (
    <div className={classNames}>
      <ClipboardButton
        classNames='copy absolute right-1 top-1 opacity-0'
        content={copyCodeData}
      />
      {!show ? (
        <Button radius={'circle'} onClick={() => setShow(!show)}>
          Show Code
        </Button>
      ) : (
        <pre
          data-language={lang}
          className='!bg-muted m-0 rounded-none p-2 text-sm backdrop-blur-sm'
          {...props}
        >
          {children}
        </pre>
      )}
    </div>
  );
};

export default PreClient;
