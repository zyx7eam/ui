import React from 'react';
import { VariantProps, cva } from 'class-variance-authority';
import { cn } from '@zyxui/lib';

const badgeVariants = cva(
  'inline-flex items-center justify-center px-2.5 py-0.5 rounded-full text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2',
  {
    variants: {
      variant: {
        solid: '',
        outline: 'border',
        ghost: 'bg-transparent',
        dot: 'px-1 py-1', // Minimal padding for dot variant
      },
      color: {
        default:
          'bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-100',
        primary: 'bg-blue-500 text-white',
        secondary: 'bg-purple-500 text-white',
        success: 'bg-green-500 text-white',
        warning: 'bg-yellow-400 text-black',
        danger: 'bg-red-500 text-white',
        info: 'bg-sky-500 text-white',
      },
      size: {
        sm: 'px-2 py-0.5 text-xs',
        md: 'px-2.5 py-0.5 text-xs',
        lg: 'px-3 py-1 text-sm',
      },
      shape: {
        rounded: 'rounded-md',
        pill: 'rounded-full',
      },
      invisible: {
        true: 'hidden',
      },
    },
    compoundVariants: [
      // Outline variants
      {
        variant: 'outline',
        color: 'default',
        className:
          'border-gray-300 text-gray-800 dark:border-gray-600 dark:text-gray-100',
      },
      {
        variant: 'outline',
        color: 'primary',
        className: 'border-blue-500 text-blue-500',
      },
      // Ghost variants
      {
        variant: 'ghost',
        color: 'default',
        className:
          'text-gray-800 hover:bg-gray-100 dark:text-gray-100 dark:hover:bg-gray-800',
      },
      {
        variant: 'ghost',
        color: 'primary',
        className: 'text-blue-500 hover:bg-blue-100 dark:hover:bg-blue-900',
      },
      // Dot variant adjustments
      {
        variant: 'dot',
        size: 'sm',
        className: 'w-2 h-2 min-w-[0.5rem] min-h-[0.5rem] p-0',
      },
      {
        variant: 'dot',
        size: 'md',
        className: 'w-2.5 h-2.5 min-w-[0.625rem] min-h-[0.625rem] p-0',
      },
      {
        variant: 'dot',
        size: 'lg',
        className: 'w-3 h-3 min-w-[0.75rem] min-h-[0.75rem] p-0',
      },
    ],
    defaultVariants: {
      variant: 'solid',
      color: 'default',
      size: 'md',
      shape: 'pill',
      invisible: false,
    },
  },
);

export type BadgeProps = {
  content?: React.ReactNode;
  max?: number;
  showZero?: boolean;
  dot?: boolean;
} & React.HTMLAttributes<HTMLSpanElement> &
  VariantProps<typeof badgeVariants>;

const Badge = React.forwardRef<HTMLSpanElement, BadgeProps>(
  (
    {
      className,
      variant,
      color,
      size,
      shape,
      invisible,
      content,
      max = 99,
      showZero = false,
      dot = false,
      children,
      ...props
    },
    ref,
  ) => {
    const resolvedVariant = dot ? 'dot' : variant;

    let displayContent = '';
    if (dot) {
      displayContent = '';
    } else if (typeof content === 'number') {
      if (content === 0 && !showZero) {
        invisible = true;
      }
      displayContent = content > max ? `${max}+` : String(content);
    } else {
      displayContent = content as string;
    }

    if (
      resolvedVariant !== 'dot' &&
      (displayContent === null ||
        displayContent === undefined ||
        displayContent === '') &&
      !children
    ) {
      invisible = true;
    }

    const badgeElement = (
      <span
        ref={ref}
        className={cn(
          badgeVariants({
            variant: resolvedVariant,
            color,
            size,
            shape,
            invisible,
          }),
          className,
        )}
        {...props}
      >
        {resolvedVariant !== 'dot' ? displayContent : null}
      </span>
    );

    if (children) {
      return (
        <span className='relative inline-flex shrink-0 align-middle'>
          {children}
          {!invisible &&
            React.cloneElement(badgeElement, {
              className: cn(
                badgeElement.props.className,
                'absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2',
              ),
            })}
        </span>
      );
    }

    return badgeElement;
  },
);

Badge.displayName = 'Badge';

export default Badge;
export { badgeVariants };
