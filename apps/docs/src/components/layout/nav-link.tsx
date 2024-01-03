'use client'
import Link from 'next/link';
import { cn } from '@zyxui/lib';

const NavLink = ({ href, title, soon }: { href: string; title: string; soon?: boolean }) => {



    const tagClassnames = cn(`absolute -top-2 -right-2 text-[9px] rounded-md px-[1px] text-sky-700 bg-sky-700/20 border border-sky-700`)
    return (
        <span className='relative'>
            {soon && (
                <span className={tagClassnames}>Soon</span>
            )}
            <Link href={href} className={cn(soon ? 'cursor-not-allowed' : '')}>{title}</Link>
        </span>
    )
};


export default NavLink