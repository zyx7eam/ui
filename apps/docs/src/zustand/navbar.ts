'use client';
import { create } from 'zustand';

type NavbarStore = {
  navbarRef: HTMLDivElement | null;
  setRef: (ref: HTMLDivElement | null) => void;
};

const useNavbarStates = create<NavbarStore>()((set) => ({
  navbarRef: null,
  setRef: (ref) => set((state) => ({ navbarRef: ref })),
}));

export default useNavbarStates;
