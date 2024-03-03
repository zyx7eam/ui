'use client';

import React from 'react';
import {
  AccordionContextType,
  AccordionDefaultValue,
  CollapseItemProps,
  OnActiveChangeFunc,
} from './types';
import { useState } from 'react';

const AccordionContext = React.createContext<AccordionContextType>({
  active: ['0'],
  onActiveChange: () => null,
});

type AccordionProviderProps = {
  children: React.ReactNode;
  items: CollapseItemProps[];
  active: string[];
};

const AccordionProvider = ({
  children,
  items: provided___items,
  active: provided___active,
}: AccordionProviderProps) => {
  const [active, setActive] = React.useState<string[]>(
    provided___active ? provided___active : [],
  );

  const [items, setItems] = useState<CollapseItemProps[]>(
    provided___items ? provided___items : [],
  );

  const onActiveChange = React.useCallback<OnActiveChangeFunc>(
    (newValue) => {
      setActive((prev) => {
        const index = prev.findIndex((item) => item === newValue);
        if (index !== -1) {
          // Remove
          return [...prev.filter((item) => item === newValue)];
        } else {
          return [...prev, newValue];
        }
      });
    },
    [items],
  );

  return (
    <AccordionContext.Provider
      value={{
        active,
        onActiveChange,
      }}
    >
      {children}
    </AccordionContext.Provider>
  );
};

// use context hook
export const useAccordionContext = () => {
  const context = React.useContext(AccordionContext);

  // console.log('context');
  // console.log(context);

  // if (!context) {
  //   throw new Error(
  //     'useAccordionContext must be used within an AccordionProvider',
  //   );
  // }

  return context;
};

export default AccordionProvider;
