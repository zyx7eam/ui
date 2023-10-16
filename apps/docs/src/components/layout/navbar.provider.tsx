'use client';

import useNavbarStates from '@/zustand/navbar';
import React from 'react';

const NavbarProvider = ({ children }: { children?: React.ReactNode }) => {
  const { navbarRef, setRef } = useNavbarStates();

  const detectRef = React.useCallback(
    (ref: HTMLDivElement | null) => {
      console.log('detectRef');
      console.log(detectRef);

      setRef(ref);
    },
    [setRef]
  );
  return null;
};

export default NavbarProvider;
