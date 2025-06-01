export type RouteItem = {
  _key: string;
  href: string;
  title: string;
  isNew: boolean;
  disabled?: boolean;
  updated?: boolean;
};

export type RoutesWithChildrenProps = RouteItem & {
  items?: RouteItem[];
};

export const routes: RoutesWithChildrenProps[] = [
  {
    _key: 'introduction',
    href: '/docs/introduction',
    title: 'Introduction',
    isNew: false,
  },
  {
    _key: 'installation',
    href: '/docs/installation',
    title: 'Installation',
    isNew: false,
  },
  {
    _key: 'components',
    href: '/docs/components',
    title: 'Components',
    isNew: false,
    items: [
      {
        _key: 'button',
        href: '/docs/components/button',
        title: 'Button',
        isNew: false,
      },
      {
        _key: 'alert',
        href: '/docs/components/alert',
        title: 'Alert',
        isNew: false,
      },
      {
        _key: 'accordion',
        href: '/docs/components/accordion',
        title: 'Accordion',
        isNew: false,
        updated: true,
      },
      {
        _key: 'text',
        href: '/docs/components/text',
        title: 'Text',
        isNew: false,
        updated: true,
      },
      {
        _key: 'flex',
        href: '/docs/components/flex',
        title: 'Flex',
        isNew: false,
      },
      {
        _key: 'card',
        href: '/docs/components/card',
        title: 'Card',
        isNew: true,
      },
      {
        _key: 'input',
        href: '/docs/components/input',
        title: 'Input',
        isNew: true,
      },
      {
        _key: 'avatar',
        href: '/docs/components/avatar',
        title: 'Avatar',
        isNew: true,
      },
      {
        _key: 'badge',
        href: '/docs/components/badge',
        title: 'Badge',
        isNew: true,
      },
      {
        _key: 'tabs',
        href: '/docs/components/tabs',
        title: 'Tabs',
        isNew: true,
      },
    ],
  },
];
