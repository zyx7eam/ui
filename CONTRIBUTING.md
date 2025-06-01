# Contributing to @zyxui

Thank you for your interest in contributing to @zyxui! This guide will help you get started with contributing to our React UI component library.

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- pnpm 9+ (we use pnpm for package management)
- Git

### Development Setup

1. **Fork and Clone**

   ```bash
   git clone https://github.com/your-username/zyxui.git
   cd zyxui
   ```

2. **Install Dependencies**

   ```bash
   pnpm install
   ```

3. **Start Development**

   ```bash
   pnpm dev
   ```

4. **Build Packages**
   ```bash
   pnpm build:packages
   ```

## 📁 Project Structure

```
zyxui/
├── packages/
│   ├── components/          # Individual component packages
│   │   ├── button/
│   │   ├── input/
│   │   ├── card/
│   │   └── ...
│   ├── lib/                 # Shared utilities
│   ├── theme/               # Theme system
│   ├── config/              # Shared configurations
│   └── tsconfig/            # TypeScript configurations
├── apps/
│   ├── docs/                # Documentation site
│   └── web/                 # Demo/playground app
└── ...
```

## 🛠️ Development Workflow

### Creating a New Component

1. **Create Component Package**

   ```bash
   mkdir packages/components/my-component
   cd packages/components/my-component
   ```

2. **Setup Package Structure**

   ```
   my-component/
   ├── package.json
   ├── tsup.config.ts
   ├── .eslintrc.js
   └── src/
       ├── index.ts
       └── my-component.tsx
   ```

3. **Follow Component Template**

   ```tsx
   'use client';

   import { forwardRef, ReactNode } from 'react';
   import { VariantProps, cva } from 'class-variance-authority';
   import { cn } from '@zyxui/lib';
   import { useTheme } from '@zyxui/theme';

   const componentVariants = cva('base-classes', {
     variants: {
       variant: {
         default: 'default-classes',
       },
       size: {
         sm: 'small-classes',
         md: 'medium-classes',
         lg: 'large-classes',
       },
     },
     defaultVariants: {
       variant: 'default',
       size: 'md',
     },
   });

   export type ComponentProps = {
     children: ReactNode;
     className?: string;
   } & React.HTMLAttributes<HTMLElement> &
     VariantProps<typeof componentVariants>;

   const Component = forwardRef<HTMLElement, ComponentProps>(
     ({ children, className, variant, size, ...props }, ref) => {
       const { config } = useTheme();

       return (
         <div
           ref={ref}
           className={cn(componentVariants({ variant, size }), className)}
           {...props}
         >
           {children}
         </div>
       );
     },
   );

   Component.displayName = 'Component';

   export default Component;
   ```

### Component Guidelines

1. **Accessibility First**

   - Use React Aria hooks when applicable
   - Ensure proper ARIA attributes
   - Support keyboard navigation
   - Test with screen readers

2. **TypeScript**

   - Full type safety
   - Export all relevant types
   - Use proper generic constraints
   - Document complex types

3. **Styling**

   - Use class-variance-authority for variants
   - Follow Tailwind CSS conventions
   - Support theme customization
   - Responsive design by default

4. **Performance**
   - Use forwardRef for ref forwarding
   - Minimize re-renders
   - Tree-shakeable exports
   - Optimize bundle size

### Testing

```bash
# Run all tests
pnpm test

# Run tests for specific package
pnpm test --filter=@zyxui/button

# Run tests in watch mode
pnpm test:watch
```

### Linting and Formatting

```bash
# Lint all packages
pnpm lint

# Format code
pnpm format

# Fix linting issues
pnpm lint:fix
```

## 📝 Documentation

### Component Documentation

Each component should include:

1. **JSDoc Comments**

   ````tsx
   /**
    * A versatile button component with multiple variants and states.
    *
    * @example
    * ```tsx
    * <Button variant="outlined" size="lg">
    *   Click me
    * </Button>
    * ```
    */
   ````

2. **README.md**

   - Installation instructions
   - Basic usage examples
   - API reference
   - Accessibility notes

3. **Storybook Stories** (if applicable)

   ```tsx
   import type { Meta, StoryObj } from '@storybook/react';
   import Button from './button';

   const meta: Meta<typeof Button> = {
     title: 'Components/Button',
     component: Button,
     parameters: {
       layout: 'centered',
     },
   };

   export default meta;
   type Story = StoryObj<typeof meta>;

   export const Default: Story = {
     args: {
       children: 'Button',
     },
   };
   ```

## 🔄 Pull Request Process

1. **Create Feature Branch**

   ```bash
   git checkout -b feature/my-new-component
   ```

2. **Make Changes**

   - Follow coding standards
   - Add tests
   - Update documentation
   - Add changeset if needed

3. **Add Changeset** (for version bumps)

   ```bash
   pnpm changeset
   ```

4. **Commit Changes**

   ```bash
   git add .
   git commit -m "feat: add new component"
   ```

5. **Push and Create PR**
   ```bash
   git push origin feature/my-new-component
   ```

### PR Guidelines

- **Title**: Use conventional commits format

  - `feat:` for new features
  - `fix:` for bug fixes
  - `docs:` for documentation
  - `refactor:` for refactoring
  - `test:` for tests

- **Description**:

  - Clear description of changes
  - Screenshots for UI changes
  - Breaking changes noted
  - Related issues linked

- **Checklist**:
  - [ ] Tests pass
  - [ ] Documentation updated
  - [ ] Changeset added (if needed)
  - [ ] Accessibility tested
  - [ ] Cross-browser tested

## 🎨 Design System

### Color Tokens

Use semantic color tokens:

```css
/* Primary colors */
--primary: ... --primary-foreground: ... /* Semantic colors */ --success: ...
  --warning: ... --error: ... /* Neutral colors */ --background: ...
  --foreground: ... --muted: ... --border: ...;
```

### Spacing Scale

Follow consistent spacing:

```css
--spacing-1: 0.25rem; /* 4px */
--spacing-2: 0.5rem; /* 8px */
--spacing-3: 0.75rem; /* 12px */
--spacing-4: 1rem; /* 16px */
/* ... */
```

### Typography Scale

Use consistent typography:

```css
--text-xs: 0.75rem;
--text-sm: 0.875rem;
--text-base: 1rem;
--text-lg: 1.125rem;
/* ... */
```

## 🐛 Bug Reports

When reporting bugs, please include:

1. **Environment**

   - OS and version
   - Browser and version
   - Node.js version
   - Package versions

2. **Steps to Reproduce**

   - Clear, numbered steps
   - Minimal code example
   - Expected vs actual behavior

3. **Additional Context**
   - Screenshots/videos
   - Console errors
   - Related issues

## 💡 Feature Requests

For new features:

1. **Check existing issues** first
2. **Describe the problem** you're solving
3. **Propose a solution** with examples
4. **Consider alternatives** and trade-offs
5. **Discuss breaking changes** if any

## 📋 Code Style

### TypeScript

```tsx
// ✅ Good
interface ButtonProps {
  variant?: 'solid' | 'outlined';
  size?: 'sm' | 'md' | 'lg';
  children: ReactNode;
}

// ❌ Bad
interface ButtonProps {
  variant?: string;
  size?: string;
  children: any;
}
```

### React

```tsx
// ✅ Good - Use forwardRef
const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, ...props }, ref) => {
    return (
      <button ref={ref} {...props}>
        {children}
      </button>
    );
  },
);

// ✅ Good - Destructure props
const Button = ({ variant = 'solid', size = 'md', ...props }) => {
  // ...
};

// ❌ Bad - Don't use props object directly
const Button = (props) => {
  return <button className={props.className}>{props.children}</button>;
};
```

### CSS/Tailwind

```tsx
// ✅ Good - Use cn utility
className={cn(
  'base-classes',
  variants({ variant, size }),
  className
)}

// ✅ Good - Logical grouping
className="flex items-center justify-center px-4 py-2 text-sm font-medium"

// ❌ Bad - Random order
className="text-sm px-4 flex font-medium py-2 items-center justify-center"
```

## 🤝 Community

- **Discord**: [Join our community](https://discord.gg/zyxui)
- **GitHub Discussions**: For questions and ideas
- **Twitter**: [@zyxui](https://twitter.com/zyxui) for updates

## 📄 License

By contributing to @zyxui, you agree that your contributions will be licensed under the MIT License.

---

Thank you for contributing to @zyxui! 🎉
