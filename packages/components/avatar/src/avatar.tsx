'use client';

import React from 'react';
import { VariantProps, cva } from 'class-variance-authority';
import { cn } from '@zyxui/lib';
import { User } from 'lucide-react';

const avatarVariants = cva(
  'relative inline-flex items-center justify-center align-middle overflow-hidden shrink-0',
  {
    variants: {
      size: {
        sm: 'w-8 h-8 text-xs',
        md: 'w-10 h-10 text-sm',
        lg: 'w-12 h-12 text-base',
        xl: 'w-16 h-16 text-lg',
      },
      shape: {
        circle: 'rounded-full',
        square: 'rounded-md',
      },
      color: {
        default:
          'bg-gray-200 text-gray-700 dark:bg-gray-700 dark:text-gray-200',
        primary: 'bg-blue-500 text-white',
        secondary: 'bg-purple-500 text-white',
        success: 'bg-green-500 text-white',
        warning: 'bg-yellow-500 text-black',
        danger: 'bg-red-500 text-white',
      },
      bordered: {
        true: 'ring-2 ring-offset-2 dark:ring-offset-gray-800',
      },
      disabled: {
        true: 'opacity-50 cursor-not-allowed',
      },
    },
    compoundVariants: [
      {
        bordered: true,
        color: 'default',
        className: 'ring-gray-300 dark:ring-gray-600',
      },
      {
        bordered: true,
        color: 'primary',
        className: 'ring-blue-500',
      },
    ],
    defaultVariants: {
      size: 'md',
      shape: 'circle',
      color: 'default',
      bordered: false,
      disabled: false,
    },
  },
);

export interface AvatarProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, 'color'>,
    VariantProps<typeof avatarVariants> {
  src?: string;
  alt?: string;
  icon?: React.ReactNode;
  fallback?: React.ReactNode;
  status?: 'online' | 'offline' | 'away' | 'busy';
  statusPosition?: 'top-right' | 'bottom-right' | 'top-left' | 'bottom-left';
}

const statusDotVariants = cva(
  'absolute rounded-full ring-2 ring-white dark:ring-gray-800',
  {
    variants: {
      status: {
        online: 'bg-green-500',
        offline: 'bg-gray-400',
        away: 'bg-yellow-400',
        busy: 'bg-red-500',
      },
      size: {
        sm: 'w-2 h-2',
        md: 'w-2.5 h-2.5',
        lg: 'w-3 h-3',
        xl: 'w-3.5 h-3.5',
      },
      position: {
        'top-right': 'top-0 right-0 transform translate-x-1/4 -translate-y-1/4',
        'bottom-right':
          'bottom-0 right-0 transform translate-x-1/4 translate-y-1/4',
        'top-left': 'top-0 left-0 transform -translate-x-1/4 -translate-y-1/4',
        'bottom-left':
          'bottom-0 left-0 transform -translate-x-1/4 translate-y-1/4',
      },
    },
    defaultVariants: {
      status: 'online',
      size: 'md',
      position: 'bottom-right',
    },
  },
);

const Avatar = React.forwardRef<HTMLDivElement, AvatarProps>(
  (
    {
      src,
      alt = '',
      icon,
      fallback,
      size,
      shape,
      color,
      bordered,
      disabled,
      status,
      statusPosition = 'bottom-right',
      className,
      children,
      ...props
    },
    ref,
  ) => {
    const [imageError, setImageError] = React.useState(false);

    const showFallback = !src || imageError;

    let content = null;

    if (showFallback) {
      if (fallback) {
        content = fallback;
      } else if (icon) {
        content = icon;
      } else if (alt) {
        content = alt
          .split(' ')
          .map((word) => word[0])
          .slice(0, 2)
          .join('')
          .toUpperCase();
      } else {
        content = <User className='h-[60%] w-[60%]' />;
      }
    } else if (src) {
      content = (
        <img
          src={src}
          alt={alt}
          className='h-full w-full object-cover'
          onError={() => setImageError(true)}
        />
      );
    }

    return (
      <div
        ref={ref}
        className={cn(
          avatarVariants({
            size,
            shape,
            color,
            bordered,
            disabled,
          }),
          className,
        )}
        {...props}
      >
        {content}
        {status && (
          <span
            className={cn(
              statusDotVariants({
                status,
                size: size || 'md',
                position: statusPosition,
              }),
            )}
          />
        )}
        {children}
      </div>
    );
  },
);

Avatar.displayName = 'Avatar';

export default Avatar;
export { avatarVariants };
