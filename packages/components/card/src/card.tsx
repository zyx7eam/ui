import { forwardRef, ReactNode } from 'react';
import { VariantProps, cva } from 'class-variance-authority';
import { cn } from '@zyxui/lib';
import { useThemeSafe } from '@zyxui/theme';

const cardVariants = cva(
  'relative overflow-hidden transition-all duration-200',
  {
    variants: {
      variant: {
        elevated: 'bg-card text-card-foreground shadow-md hover:shadow-lg',
        outlined: 'bg-card text-card-foreground border border-border',
        filled: 'bg-muted text-muted-foreground',
        ghost: 'bg-transparent',
      },
      size: {
        sm: 'p-4',
        md: 'p-6',
        lg: 'p-8',
      },
      radius: {
        none: 'rounded-none',
        sm: 'rounded-sm',
        md: 'rounded-md',
        lg: 'rounded-lg',
        xl: 'rounded-xl',
      },
      hoverable: {
        true: 'cursor-pointer hover:scale-[1.02] active:scale-[0.98]',
      },
      blurred: {
        true: 'backdrop-blur-md bg-opacity-80',
      },
    },
    defaultVariants: {
      variant: 'elevated',
      size: 'md',
      radius: 'md',
      hoverable: false,
      blurred: false,
    },
  },
);

const cardHeaderVariants = cva('flex flex-col space-y-1.5', {
  variants: {
    size: {
      sm: 'pb-3',
      md: 'pb-4',
      lg: 'pb-6',
    },
  },
  defaultVariants: {
    size: 'md',
  },
});

const cardBodyVariants = cva('', {
  variants: {
    size: {
      sm: 'py-2',
      md: 'py-3',
      lg: 'py-4',
    },
  },
  defaultVariants: {
    size: 'md',
  },
});

const cardFooterVariants = cva('flex items-center', {
  variants: {
    size: {
      sm: 'pt-3',
      md: 'pt-4',
      lg: 'pt-6',
    },
  },
  defaultVariants: {
    size: 'md',
  },
});

export type CardProps = {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
} & React.HTMLAttributes<HTMLDivElement> &
  VariantProps<typeof cardVariants>;

export type CardHeaderProps = {
  children: ReactNode;
  className?: string;
} & React.HTMLAttributes<HTMLDivElement> &
  Pick<VariantProps<typeof cardHeaderVariants>, 'size'>;

export type CardBodyProps = {
  children: ReactNode;
  className?: string;
} & React.HTMLAttributes<HTMLDivElement> &
  Pick<VariantProps<typeof cardBodyVariants>, 'size'>;

export type CardFooterProps = {
  children: ReactNode;
  className?: string;
} & React.HTMLAttributes<HTMLDivElement> &
  Pick<VariantProps<typeof cardFooterVariants>, 'size'>;

export type CardTitleProps = {
  children: ReactNode;
  className?: string;
} & React.HTMLAttributes<HTMLHeadingElement>;

export type CardDescriptionProps = {
  children: ReactNode;
  className?: string;
} & React.HTMLAttributes<HTMLParagraphElement>;

const Card = forwardRef<HTMLDivElement, CardProps>(
  (
    {
      children,
      className,
      variant,
      size,
      radius,
      hoverable,
      blurred,
      onClick,
      ...props
    },
    ref,
  ) => {
    const { config } = useThemeSafe();

    return (
      <div
        ref={ref}
        className={cn(
          cardVariants({
            variant,
            size,
            radius,
            hoverable: hoverable || !!onClick,
            blurred: blurred || config?.glassEffect,
          }),
          className,
        )}
        onClick={onClick}
        {...props}
      >
        {children}
      </div>
    );
  },
);

const CardHeader = forwardRef<HTMLDivElement, CardHeaderProps>(
  ({ children, className, size, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(cardHeaderVariants({ size }), className)}
      {...props}
    >
      {children}
    </div>
  ),
);

const CardBody = forwardRef<HTMLDivElement, CardBodyProps>(
  ({ children, className, size, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(cardBodyVariants({ size }), className)}
      {...props}
    >
      {children}
    </div>
  ),
);

const CardFooter = forwardRef<HTMLDivElement, CardFooterProps>(
  ({ children, className, size, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(cardFooterVariants({ size }), className)}
      {...props}
    >
      {children}
    </div>
  ),
);

const CardTitle = forwardRef<HTMLHeadingElement, CardTitleProps>(
  ({ children, className, ...props }, ref) => (
    <h3
      ref={ref}
      className={cn(
        'text-lg font-semibold leading-none tracking-tight',
        className,
      )}
      {...props}
    >
      {children}
    </h3>
  ),
);

const CardDescription = forwardRef<HTMLParagraphElement, CardDescriptionProps>(
  ({ children, className, ...props }, ref) => (
    <p
      ref={ref}
      className={cn('text-muted-foreground text-sm', className)}
      {...props}
    >
      {children}
    </p>
  ),
);

Card.displayName = 'Card';
CardHeader.displayName = 'CardHeader';
CardBody.displayName = 'CardBody';
CardFooter.displayName = 'CardFooter';
CardTitle.displayName = 'CardTitle';
CardDescription.displayName = 'CardDescription';

export { Card, CardHeader, CardBody, CardFooter, CardTitle, CardDescription };
export default Card;
