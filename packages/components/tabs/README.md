# @zyxui/tabs

A flexible and accessible tabs component for React applications.

## Features

- ✅ **Accessible** - Built with ARIA attributes and keyboard navigation
- ✅ **Flexible** - Multiple variants (default, underline, pills)
- ✅ **Customizable** - Different sizes and orientations
- ✅ **TypeScript** - Full TypeScript support with proper types
- ✅ **Controlled & Uncontrolled** - Supports both controlled and uncontrolled usage

## Installation

```bash
npm install @zyxui/tabs
# or
pnpm add @zyxui/tabs
# or
yarn add @zyxui/tabs
```

## Usage

### Basic Example

```tsx
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@zyxui/tabs';

function Example() {
  return (
    <Tabs defaultValue='tab1'>
      <TabsList>
        <TabsTrigger value='tab1'>Tab 1</TabsTrigger>
        <TabsTrigger value='tab2'>Tab 2</TabsTrigger>
        <TabsTrigger value='tab3'>Tab 3</TabsTrigger>
      </TabsList>
      <TabsContent value='tab1'>
        <p>Content for Tab 1</p>
      </TabsContent>
      <TabsContent value='tab2'>
        <p>Content for Tab 2</p>
      </TabsContent>
      <TabsContent value='tab3'>
        <p>Content for Tab 3</p>
      </TabsContent>
    </Tabs>
  );
}
```

### Variants

#### Default Variant

```tsx
<Tabs defaultValue='tab1' variant='default'>
  <TabsList>
    <TabsTrigger value='tab1'>Tab 1</TabsTrigger>
    <TabsTrigger value='tab2'>Tab 2</TabsTrigger>
  </TabsList>
  <TabsContent value='tab1'>Default variant content</TabsContent>
  <TabsContent value='tab2'>Another tab content</TabsContent>
</Tabs>
```

#### Underline Variant

```tsx
<Tabs defaultValue='tab1' variant='underline'>
  <TabsList>
    <TabsTrigger value='tab1'>Tab 1</TabsTrigger>
    <TabsTrigger value='tab2'>Tab 2</TabsTrigger>
  </TabsList>
  <TabsContent value='tab1'>Underline variant content</TabsContent>
  <TabsContent value='tab2'>Another tab content</TabsContent>
</Tabs>
```

#### Pills Variant

```tsx
<Tabs defaultValue='tab1' variant='pills'>
  <TabsList>
    <TabsTrigger value='tab1'>Tab 1</TabsTrigger>
    <TabsTrigger value='tab2'>Tab 2</TabsTrigger>
  </TabsList>
  <TabsContent value='tab1'>Pills variant content</TabsContent>
  <TabsContent value='tab2'>Another tab content</TabsContent>
</Tabs>
```

### Sizes

```tsx
<Tabs defaultValue="tab1" size="sm">
  <TabsList>
    <TabsTrigger value="tab1">Small</TabsTrigger>
    <TabsTrigger value="tab2">Tabs</TabsTrigger>
  </TabsList>
  <TabsContent value="tab1">Small size content</TabsContent>
  <TabsContent value="tab2">Another tab content</TabsContent>
</Tabs>

<Tabs defaultValue="tab1" size="lg">
  <TabsList>
    <TabsTrigger value="tab1">Large</TabsTrigger>
    <TabsTrigger value="tab2">Tabs</TabsTrigger>
  </TabsList>
  <TabsContent value="tab1">Large size content</TabsContent>
  <TabsContent value="tab2">Another tab content</TabsContent>
</Tabs>
```

### Vertical Orientation

```tsx
<Tabs defaultValue='tab1' orientation='vertical'>
  <TabsList>
    <TabsTrigger value='tab1'>Tab 1</TabsTrigger>
    <TabsTrigger value='tab2'>Tab 2</TabsTrigger>
  </TabsList>
  <TabsContent value='tab1'>Vertical tab content</TabsContent>
  <TabsContent value='tab2'>Another tab content</TabsContent>
</Tabs>
```

### Controlled Usage

```tsx
import { useState } from 'react';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@zyxui/tabs';

function ControlledExample() {
  const [activeTab, setActiveTab] = useState('tab1');

  return (
    <Tabs value={activeTab} onValueChange={setActiveTab}>
      <TabsList>
        <TabsTrigger value='tab1'>Tab 1</TabsTrigger>
        <TabsTrigger value='tab2'>Tab 2</TabsTrigger>
      </TabsList>
      <TabsContent value='tab1'>
        <p>Current tab: {activeTab}</p>
      </TabsContent>
      <TabsContent value='tab2'>
        <p>Current tab: {activeTab}</p>
      </TabsContent>
    </Tabs>
  );
}
```

## API Reference

### Tabs

The root tabs component that provides context to all child components.

| Prop            | Type                                  | Default        | Description                              |
| --------------- | ------------------------------------- | -------------- | ---------------------------------------- |
| `value`         | `string`                              | -              | The controlled value of the tabs         |
| `defaultValue`  | `string`                              | -              | The default value for uncontrolled usage |
| `onValueChange` | `(value: string) => void`             | -              | Callback fired when the tab changes      |
| `orientation`   | `'horizontal' \| 'vertical'`          | `'horizontal'` | The orientation of the tabs              |
| `variant`       | `'default' \| 'underline' \| 'pills'` | `'default'`    | The visual variant of the tabs           |
| `size`          | `'sm' \| 'md' \| 'lg'`                | `'md'`         | The size of the tab triggers             |
| `className`     | `string`                              | -              | Additional CSS classes                   |

### TabsList

The container for tab triggers.

| Prop        | Type     | Default | Description            |
| ----------- | -------- | ------- | ---------------------- |
| `className` | `string` | -       | Additional CSS classes |

### TabsTrigger

Individual tab trigger button.

| Prop        | Type      | Default | Description                                      |
| ----------- | --------- | ------- | ------------------------------------------------ |
| `value`     | `string`  | -       | **Required.** The value that identifies this tab |
| `className` | `string`  | -       | Additional CSS classes                           |
| `disabled`  | `boolean` | `false` | Whether the tab is disabled                      |

### TabsContent

The content panel for each tab.

| Prop        | Type     | Default | Description                                          |
| ----------- | -------- | ------- | ---------------------------------------------------- |
| `value`     | `string` | -       | **Required.** The value that identifies this content |
| `className` | `string` | -       | Additional CSS classes                               |

## Accessibility

The tabs component follows WAI-ARIA guidelines:

- Uses proper ARIA roles (`tablist`, `tab`, `tabpanel`)
- Implements keyboard navigation (Arrow keys, Home, End)
- Provides proper focus management
- Associates tabs with their content panels
- Supports screen readers with proper labeling

## Styling

The component uses CSS classes that can be customized with your design system. All variants use CSS-in-JS with `class-variance-authority` for consistent styling.

## License

MIT
