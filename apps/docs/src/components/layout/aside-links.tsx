import { ChevronRightIcon } from 'lucide-react';
import { RoutesWithChildrenProps } from '../../config/routes';
import LinkItem from './link-item';

export const AsideLinks = ({
  href,
  isNew,
  key,
  title,
  items,
}: RoutesWithChildrenProps) => {
  return (
    <ul>
      <details
        className='block select-none p-5 [&_.icon]:open-[]:rotate-90 [&_>summary]:open-[]:mb-2'
        open
      >
        <summary className='flex items-center justify-between font-bold transition-all'>
          {title}
          <ChevronRightIcon className='icon transform transition-transform' />
        </summary>
        <ul className='ms-5 transition-all'>
          {items?.map((__) => (
            <li key={__.key}>
              <LinkItem href={__.href}>{__.title}</LinkItem>
            </li>
          ))}
        </ul>
      </details>
    </ul>
  );
};
