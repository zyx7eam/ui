# @zyxui - Modern React UI Component Library

@zyxui is a comprehensive, accessible, and performant React UI component library designed for modern React.js and Next.js applications. Built with TypeScript, Tailwind CSS, and React Aria for maximum accessibility and developer experience.

## ✨ Features

- 🎨 **Modern Design System** - Clean, consistent, and customizable components
- ♿ **Accessibility First** - Built with React Aria for WCAG compliance
- 🎯 **TypeScript Native** - Full type safety and excellent DX
- 🎭 **Theming System** - Advanced theme management with dark mode support
- 🚀 **Performance Optimized** - Tree-shakeable and optimized for production
- 📱 **Responsive** - Mobile-first design approach
- 🎪 **Customizable** - Extensive customization options with CSS variables
- 🔧 **Developer Experience** - Excellent IntelliSense and documentation

## 📦 Installation

```bash
# Using npm
npm install @zyxui/button @zyxui/input @zyxui/card @zyxui/theme @zyxui/lib

# Using pnpm
pnpm add @zyxui/button @zyxui/input @zyxui/card @zyxui/theme @zyxui/lib

# Using yarn
yarn add @zyxui/button @zyxui/input @zyxui/card @zyxui/theme @zyxui/lib
```

## 🚀 Quick Start

### 1. Setup Theme Provider

```tsx
import { ThemeProvider } from '@zyxui/theme';
import '@zyxui/theme/dist/styles.css'; // Import base styles

function App() {
  return (
    <ThemeProvider
      config={{
        glassEffect: false,
        animations: true,
        borderRadius: 'md',
        density: 'normal',
      }}
      nextThemeConfig={{
        defaultTheme: 'system',
        enableSystem: true,
      }}
    >
      <YourApp />
    </ThemeProvider>
  );
}
```

### 2. Use Components

```tsx
import Button from '@zyxui/button';
import Input from '@zyxui/input';
import { Card, CardHeader, CardBody, CardTitle } from '@zyxui/card';

function MyComponent() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Welcome to @zyxui</CardTitle>
      </CardHeader>
      <CardBody>
        <Input
          label='Email'
          placeholder='Enter your email'
          type='email'
          required
        />
        <Button color='primary' size='md' isLoading={false}>
          Get Started
        </Button>
      </CardBody>
    </Card>
  );
}
```

## 🎨 Components

### Button

A versatile button component with multiple variants, sizes, and states.

```tsx
import Button from '@zyxui/button';

// Basic usage
<Button>Click me</Button>

// With variants
<Button variant="outlined" color="error">
  Delete
</Button>

// With loading state
<Button isLoading loadingText="Saving...">
  Save
</Button>

// With icons
<Button startContent={<Icon />} endContent={<ArrowIcon />}>
  Continue
</Button>
```

**Props:**

- `variant`: `solid` | `outlined` | `ghost` | `flat` | `shadow`
- `color`: `default` | `primary` | `success` | `warning` | `error`
- `size`: `sm` | `md` | `lg`
- `isLoading`: boolean
- `loadingText`: string
- `startContent` / `endContent`: ReactNode

### Input

A comprehensive input component with validation, different states, and accessibility features.

```tsx
import Input from '@zyxui/input';

// Basic usage
<Input placeholder="Enter text" />

// With label and validation
<Input
  label="Email Address"
  type="email"
  required
  errorMessage="Please enter a valid email"
  helperText="We'll never share your email"
/>

// With custom styling
<Input
  variant="filled"
  size="lg"
  startContent={<SearchIcon />}
  endContent={<ClearIcon />}
  clearable
/>
```

**Props:**

- `variant`: `default` | `filled` | `underlined` | `bordered`
- `size`: `sm` | `md` | `lg`
- `state`: `default` | `error` | `success` | `warning`
- `label`: string
- `helperText`: string
- `errorMessage`: string
- `clearable`: boolean

### Card

A flexible card component with header, body, and footer sections.

```tsx
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardTitle,
  CardDescription,
} from '@zyxui/card';

<Card variant='elevated' hoverable>
  <CardHeader>
    <CardTitle>Card Title</CardTitle>
    <CardDescription>Card description goes here</CardDescription>
  </CardHeader>
  <CardBody>
    <p>Card content...</p>
  </CardBody>
  <CardFooter>
    <Button>Action</Button>
  </CardFooter>
</Card>;
```

**Props:**

- `variant`: `elevated` | `outlined` | `filled` | `ghost`
- `size`: `sm` | `md` | `lg`
- `hoverable`: boolean
- `blurred`: boolean (glass effect)

## 🎭 Theming

@zyxui provides a powerful theming system with support for:

- **Dark/Light Mode**: Automatic system detection or manual control
- **Custom Themes**: Define your own color schemes
- **CSS Variables**: Easy customization with CSS custom properties
- **Configuration**: Global settings for animations, glass effects, etc.

```tsx
import { useTheme } from '@zyxui/theme';

function ThemeToggle() {
  const { isDark, changeTheme, updateConfig } = useTheme();

  return (
    <Button onClick={() => changeTheme(isDark ? 'light' : 'dark')}>
      {isDark ? '☀️' : '🌙'}
    </Button>
  );
}
```

### Custom Theme Configuration

```tsx
<ThemeProvider
  config={{
    glassEffect: true,
    animations: true,
    reducedMotion: false,
    borderRadius: 'lg',
    density: 'comfortable',
  }}
  themes={{
    light: 'light',
    dark: 'dark',
    custom: 'my-custom-theme',
  }}
>
  <App />
</ThemeProvider>
```

## 🛠️ Development

This project uses a monorepo structure with:

- **Turborepo** for build orchestration
- **TypeScript** for type safety
- **Tailwind CSS** for styling
- **React Aria** for accessibility
- **Changesets** for versioning

### Getting Started

```bash
# Clone the repository
git clone https://github.com/your-username/zyxui.git

# Install dependencies
pnpm install

# Start development
pnpm dev

# Build packages
pnpm build:packages

# Run tests
pnpm test
```

## 📚 Documentation

Visit our [official documentation](https://ui.geeksteam.org/docs/introduction) for:

- Complete API reference
- Interactive examples
- Design guidelines
- Migration guides
- Best practices

## 🤝 Contributing

We welcome contributions! Please see our [Contributing Guide](CONTRIBUTING.md) for details.

## 📄 License

MIT License - see [LICENSE](LICENSE) for details.

## 🙏 Acknowledgments

- [React Aria](https://react-spectrum.adobe.com/react-aria/) for accessibility primitives
- [Tailwind CSS](https://tailwindcss.com/) for utility-first CSS
- [Radix UI](https://www.radix-ui.com/) for design inspiration
- [Next.js](https://nextjs.org/) for the amazing framework

---

Built with ❤️ by the @zyxui team
