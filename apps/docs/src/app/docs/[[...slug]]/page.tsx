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
  return allDocs.map((doc) => ({
    slug: doc.slugAsParams.split('/'),
  }));
}

export default async function DocPage({ params }: DocsPageProps) {
  const { doc, headings, currentRoute } = await getDocFromParams({ params });

  if (!doc) {
    notFound();
  }

  return (
    <div className='flex'>
      <div className='flex-1 p-5'>
        <div className='prose prose-invert max-w-[unset]'>
          <MDXContent code={doc.body.code} />
        </div>
        {/* {currentRoute && <DocsPager currentRoute={currentRoute} />} */}
        <footer>
          <Link href={'/'}>Edit this page on GitHub</Link>
        </footer>
      </div>
      <div className='sticky right-0 top-16 me-10 hidden h-[calc(100vh_-_theme(height.16))] w-52 border-gray-700 p-5 pe-0 backdrop-blur-sm xl:block xl:w-60 2xl:w-72'>
        <DocsHeadings items={headings} />
      </div>
    </div>
  );
}
