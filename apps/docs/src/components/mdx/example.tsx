'use client';

export const Example = ({ children, className, ...props }: any) => {
  return (
    <div
      className='overflow-hidden rounded-md border border-gray-700'
      {...props}
    >
      {children}
    </div>
  );
};

export const Preview = ({ children, className, ...props }: any) => {
  return (
    <div
      className='flex items-center justify-center gap-5 border-b border-gray-700 p-5'
      {...props}
    >
      {children}
    </div>
  );
};

export const Code = ({ children, className, ...props }: any) => {
  return <code></code>;
};
