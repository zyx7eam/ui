'use client';

import { ClipboardIcon, CheckIcon } from 'lucide-react';
import { Button } from 'ui';
import { motion } from 'framer-motion';
import React, { useState } from 'react';
import { cn } from 'shared-lib';

const ClipboardButton = ({
  classNames,
  content,
}: {
  classNames?: string;
  content: string;
}) => {
  const [copied, setCopied] = useState<boolean>(false);
  const copy = async () => {
    await navigator.clipboard.writeText(content);
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 10000);
  };
  return (
    <Button
      iconOnly
      size={'sm'}
      variant={'flat'}
      radius={'circle'}
      className={classNames}
      onPress={copy}
      color={copied ? 'success' : 'default'}
    >
      <div className='relative h-full w-full'>
        <motion.span
          className='absolute left-1/2 top-1/2 !-translate-x-1/2 !-translate-y-1/2 transform'
          initial={{
            opacity: 1,
            scale: 1,
          }}
          animate={{
            opacity: copied ? 0 : 1,
            scale: copied ? 0 : 1,
          }}
        >
          <ClipboardIcon size={14} />
        </motion.span>
        <motion.span
          className='absolute left-1/2 top-1/2 !-translate-x-1/2 !-translate-y-1/2 transform'
          initial={{
            opacity: 0,
            scale: 0,
          }}
          animate={{
            opacity: copied ? 1 : 0,
            scale: copied ? 1 : 0,
          }}
        >
          <CheckIcon size={14} />
        </motion.span>
      </div>
    </Button>
  );
};

export default ClipboardButton;
