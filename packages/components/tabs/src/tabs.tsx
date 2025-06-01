'use client';

import React, {
  createContext,
  useContext,
  useState,
  useRef,
  useEffect,
} from 'react';
import { VariantProps, cva } from 'class-variance-authority';
import { cn } from '@zyxui/lib';

const tabsVariants = cva('w-full', {
  variants: {
    orientation: {
      horizontal: 'flex flex-col',
      vertical: 'flex flex-row',
    },
  },
  defaultVariants: {
    orientation: 'horizontal',
  },
});

const tabsListVariants = cva(
  'inline-flex items-center justify-start gap-1 p-1 bg-muted rounded-lg',
  {
    variants: {
      orientation: {
        horizontal: 'flex-row',
        vertical: 'flex-col',
      },
      variant: {
        default: 'bg-muted',
        underline: 'bg-transparent border-b border-border p-0 gap-0',
        pills: 'bg-transparent p-0 gap-2',
      },
    },
    defaultVariants: {
      orientation: 'horizontal',
      variant: 'default',
    },
  },
);

const tabsTriggerVariants = cva(
  'inline-flex items-center justify-center whitespace-nowrap px-3 py-2 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        default:
          'rounded-md data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm',
        underline:
          'rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:text-primary bg-transparent px-4 py-3',
        pills:
          'rounded-full bg-muted/50 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground',
      },
      size: {
        sm: 'h-8 px-2 text-xs',
        md: 'h-10 px-3 text-sm',
        lg: 'h-12 px-4 text-base',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'md',
    },
  },
);

const tabsContentVariants = cva(
  'mt-4 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2',
  {
    variants: {
      orientation: {
        horizontal: 'mt-4',
        vertical: 'ml-4 mt-0 flex-1',
      },
    },
    defaultVariants: {
      orientation: 'horizontal',
    },
  },
);

type TabsContextValue = {
  value: string;
  onValueChange: (value: string) => void;
  orientation: 'horizontal' | 'vertical';
  variant: 'default' | 'underline' | 'pills';
  size: 'sm' | 'md' | 'lg';
};

const TabsContext = createContext<TabsContextValue | null>(null);

function useTabsContext() {
  const context = useContext(TabsContext);
  if (!context) {
    throw new Error('Tabs components must be used within a Tabs component');
  }
  return context;
}

export interface TabsProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof tabsVariants> {
  value?: string;
  defaultValue?: string;
  onValueChange?: (value: string) => void;
  orientation?: 'horizontal' | 'vertical';
  variant?: 'default' | 'underline' | 'pills';
  size?: 'sm' | 'md' | 'lg';
}

const Tabs = React.forwardRef<HTMLDivElement, TabsProps>(
  (
    {
      value: controlledValue,
      defaultValue,
      onValueChange,
      orientation = 'horizontal',
      variant = 'default',
      size = 'md',
      className,
      children,
      ...props
    },
    ref,
  ) => {
    const [internalValue, setInternalValue] = useState(defaultValue || '');
    const isControlled = controlledValue !== undefined;
    const value = isControlled ? controlledValue : internalValue;

    const handleValueChange = (newValue: string) => {
      if (!isControlled) {
        setInternalValue(newValue);
      }
      onValueChange?.(newValue);
    };

    return (
      <TabsContext.Provider
        value={{
          value,
          onValueChange: handleValueChange,
          orientation,
          variant,
          size,
        }}
      >
        <div
          ref={ref}
          className={cn(tabsVariants({ orientation }), className)}
          {...props}
        >
          {children}
        </div>
      </TabsContext.Provider>
    );
  },
);

Tabs.displayName = 'Tabs';

export interface TabsListProps extends React.HTMLAttributes<HTMLDivElement> {}

const TabsList = React.forwardRef<HTMLDivElement, TabsListProps>(
  ({ className, ...props }, ref) => {
    const { orientation, variant } = useTabsContext();

    return (
      <div
        ref={ref}
        role='tablist'
        aria-orientation={orientation}
        className={cn(tabsListVariants({ orientation, variant }), className)}
        {...props}
      />
    );
  },
);

TabsList.displayName = 'TabsList';

export interface TabsTriggerProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  value: string;
}

const TabsTrigger = React.forwardRef<HTMLButtonElement, TabsTriggerProps>(
  ({ value: triggerValue, className, children, ...props }, ref) => {
    const { value, onValueChange, variant, size } = useTabsContext();
    const isActive = value === triggerValue;

    return (
      <button
        ref={ref}
        type='button'
        role='tab'
        aria-selected={isActive}
        aria-controls={`tabs-content-${triggerValue}`}
        data-state={isActive ? 'active' : 'inactive'}
        onClick={() => onValueChange(triggerValue)}
        className={cn(tabsTriggerVariants({ variant, size }), className)}
        {...props}
      >
        {children}
      </button>
    );
  },
);

TabsTrigger.displayName = 'TabsTrigger';

export interface TabsContentProps extends React.HTMLAttributes<HTMLDivElement> {
  value: string;
}

const TabsContent = React.forwardRef<HTMLDivElement, TabsContentProps>(
  ({ value: contentValue, className, children, ...props }, ref) => {
    const { value, orientation } = useTabsContext();
    const isActive = value === contentValue;

    if (!isActive) return null;

    return (
      <div
        ref={ref}
        role='tabpanel'
        id={`tabs-content-${contentValue}`}
        aria-labelledby={`tabs-trigger-${contentValue}`}
        className={cn(tabsContentVariants({ orientation }), className)}
        {...props}
      >
        {children}
      </div>
    );
  },
);

TabsContent.displayName = 'TabsContent';

export {
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent,
  tabsVariants,
  tabsListVariants,
  tabsTriggerVariants,
  tabsContentVariants,
};
