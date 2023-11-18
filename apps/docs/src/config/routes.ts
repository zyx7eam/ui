export type RouteItem = {
  _key: string;
  href: string;
  title: string;
  isNew: boolean;
  disabled?: boolean;
};

export type RoutesWithChildrenProps = RouteItem & {
  items?: RouteItem[];
};

export const routes: RoutesWithChildrenProps[] = [
  {
    _key: 'introduction',
    href: '/docs/introduction',
    title: 'Introduction',
    isNew: true,
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
        isNew: true,
      },
      {
        _key: 'alert',
        href: '/docs/components/alert',
        title: 'Alert',
        isNew: true,
      },
      {
        _key: 'accordion',
        href: '/docs/components/accordion',
        title: 'Accordion',
        isNew: true,
      },
      {
        _key: 'text',
        href: '/docs/components/text',
        title: 'Text',
        isNew: true,
        disabled: true,
      },
    ],
  },
];
