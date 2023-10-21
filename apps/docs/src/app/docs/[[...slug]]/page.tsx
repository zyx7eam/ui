import type { Metadata } from 'next';
import Link from 'next/link';

import { notFound } from 'next/navigation';
import { allDocs } from '../../../../.contentlayer/generated';

import { MDXContent } from '../../../components/mdx-content';
import { Route, getHeadings } from '../../../lib/utils.docs';
import DocsHeadings from '@/components/layout/headings';
import { routes } from '@/config/routes';
import { AsideLinks } from '@/components/layout/aside-links';

type DocsPageProps = {
  params: {
    slug: string[];
  };
};

async function getDocFromParams({ params }: DocsPageProps) {
  const slug = params.slug?.join('/') || '';
  const doc = await allDocs.find((doc) => doc.slugAsParams === slug);

  if (!doc) null;

  const headings = getHeadings(doc?.body.raw);

  const currentRoute: Route = {
    key: doc?._id,
    title: doc?.title,
    path: `/${doc?._raw?.sourceFilePath}`,
  };

  console.log('currentRoute');
  console.log(currentRoute);

  return { doc, headings, currentRoute };
}

export async function generateMetadata({
  params,
}: DocsPageProps): Promise<Metadata> {
  const { doc } = await getDocFromParams({ params });

  if (!doc) {
    return {};
  }

  return {
    title: doc.title,
    description: doc.description,
    openGraph: {
      title: doc.title,
      description: doc.description,
      type: 'article',
      url: doc.url,
      // images: [
      //   {
      //     url: siteConfig.ogImage,
      //     width: 1200,
      //     height: 630,
      //     alt: siteConfig.name,
      //   },
      // ],
    },
    twitter: {
      card: 'summary_large_image',
      title: doc.title,
      description: doc.description,
      // images: [siteConfig.ogImage],
      // creator: siteConfig.creator,
    },
  };
}

export async function generateStaticParams(): Promise<
  DocsPageProps['params'][]
> {
  return allDocs.map((doc) => ({
    slug: doc.slugAsParams.split('/'),
  }));
}

export default async function DocPage({ params }: DocsPageProps) {
  const { doc, headings, currentRoute } = await getDocFromParams({ params });

  if (!doc) {
    console.log('Not found!');
    notFound();
  }

  return (
    <>
      <div className='grid grid-cols-12'>
        <aside className='sticky left-0 top-16 hidden h-[calc(100vh_-_theme(height.16))] border-e-[1px] border-gray-700 p-5 ps-0 backdrop-blur-sm  md:col-span-3 md:block lg:col-span-3 xl:col-span-2'>
          {routes.map((item) => (
            <AsideLinks key={item._key} {...item} />
          ))}
        </aside>
        <div className='prose prose-invert col-span-12 max-w-[unset] p-5 px-10 md:col-span-9 lg:col-span-7 xl:col-span-8'>
          <MDXContent code={doc.body.code} />
          {/* {currentRoute && <DocsPager currentRoute={currentRoute} />} */}
          {/* <footer>
          <Link href={'/'}>Edit this page on GitHub</Link>
        </footer> */}
        </div>
        <div className='sticky left-0 top-16 hidden h-[calc(100vh_-_theme(height.16))] p-5 ps-0 backdrop-blur-sm lg:col-span-2 lg:block'>
          <DocsHeadings items={headings} />
        </div>
      </div>
    </>
  );
}
