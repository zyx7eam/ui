'use client';

import React from 'react';
import { motion, Variants } from 'framer-motion';

const collapseVariants: Variants = {
  close: {
    height: '0px',
  },
  open: {
    height: 'auto',
  },
};

type AccordionContentProps = {
  children?: React.ReactNode;
  open?: boolean;
};

export const AccordionContent = ({ children, open }: AccordionContentProps) => {
  return (
    <motion.div
      className='overflow-hidden bg-yellow-600'
      variants={collapseVariants}
      initial='close'
      animate={open ? 'open' : 'close'}
    >
      {children}
    </motion.div>
  );
};
