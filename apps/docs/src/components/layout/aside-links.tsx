import { ChevronRightIcon } from 'lucide-react';
import { RoutesWithChildrenProps } from '../../config/routes';
import LinkItem from './link-item';

export const LinkWithChildren = ({
  href,
  isNew,
  title,
  items,
}: RoutesWithChildrenProps) => {
  return (
    <details
      className='block select-none [&_.icon]:open-[]:rotate-90 [&_>summary]:open-[]:mb-2'
      open
    >
      <summary className='flex cursor-pointer items-center justify-between rounded-sm p-1 font-bold transition-all'>
        {title}
        <ChevronRightIcon
          size={18}
          className='icon transform transition-transform'
        />
      </summary>
      <ul className='ms-5 transition-all'>
        {items?.map((__) => (
          <li key={__._key}>
            <LinkItem href={__.href} isNew={__.isNew} disabled={__.disabled}>
              {__.title}
            </LinkItem>
          </li>
        ))}
      </ul>
    </details>
  );
};

export const AsideLinks = (props: RoutesWithChildrenProps) => {
  return (
    <ul key={props._key}>
      {props.items && props.items.length > 0 ? (
        <LinkWithChildren {...props} />
      ) : (
        <LinkItem
          href={props.href}
          isNew={props.isNew}
          disabled={props.disabled}
        >
          {props.title}
        </LinkItem>
      )}
    </ul>
  );
};
