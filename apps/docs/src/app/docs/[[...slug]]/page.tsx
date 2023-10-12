import type { Metadata } from 'next';
import Link from 'next/link';

import { notFound } from 'next/navigation';
import { allDocs } from '../../../../.contentlayer/generated';

import { MDXContent } from '../../../components/mdx-content';
import { Route, getHeadings } from '../../../lib/utils.docs';
import DocsHeadings from '@/components/layout/headings';

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
  const slugs = allDocs.map((doc) => ({
    slug: doc.slugAsParams.split('/'),
  }));

  return allDocs.map((doc) => ({
    slug: doc.slugAsParams.split('/'),
  }));
}

export default async function DocPage({ params }: DocsPageProps) {
  const { doc, headings, currentRoute } = await getDocFromParams({ params });

  console.log('headings');
  console.log(headings);

  if (!doc) {
    notFound();
  }

  return (
    <>
      <div>
        <div className='prose prose-neutral w-full'>
          <MDXContent code={doc.body.code} />
        </div>
        {/* {currentRoute && <DocsPager currentRoute={currentRoute} />} */}
        <footer>
          <Link href={'/'}>Edit this page on GitHub</Link>
        </footer>
      </div>
      <aside className='fixed right-0 top-0 me-10 mt-16 h-[calc(100vh_-_theme(height.16))] w-80  border-gray-700 p-5 backdrop-blur-sm'>
        <DocsHeadings items={headings} />
      </aside>
      {/* {headings && headings.length > 0 && (
          <div className="hidden z-10 xl:flex xl:col-span-2 mt-8 pl-4">
            <DocsToc headings={headings} />
          </div>
        )} */}
    </>
  );
}
