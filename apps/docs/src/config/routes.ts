export type RouteItem = {
  key: string;
  href: string;
  title: string;
  isNew: boolean;
};

export type RoutesWithChildrenProps = RouteItem & {
  items?: RouteItem[];
};

export const routes: RoutesWithChildrenProps[] = [
  {
    key: 'components',
    href: '/docs/components',
    title: 'Components',
    isNew: true,
    items: [
      {
        key: 'button',
        href: '/docs/components/button',
        title: 'Button',
        isNew: false,
      },
    ],
  },
];
