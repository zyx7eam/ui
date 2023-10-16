import { defineDocumentType, makeSource } from 'contentlayer/source-files';
import rehypePrismPlus from 'rehype-prism-plus';
import remarkGfm from 'remark-gfm';
import rehypeSlug from 'rehype-slug';
import { visit } from 'unist-util-visit';
import rehypePrettyCode from 'rehype-pretty-code';

/** @type {import('rehype-pretty-code').Options} */
const options: import('rehype-pretty-code').Options = {
  theme: {
    light: 'github-light',
    dark: 'github-dark-dimmed',
  },
};

export const Docs = defineDocumentType(() => ({
  name: 'Docs',
  filePathPattern: 'docs/**/*.mdx',
  contentType: 'mdx',
  fields: {
    title: {
      type: 'string',
      required: true,
    },
    description: { type: 'string', required: false },
  },
  computedFields: {
    slug: {
      type: 'string',
      resolve: (doc) => `/${doc._raw.flattenedPath}`,
    },
    slugAsParams: {
      type: 'string',
      resolve: (doc) => doc._raw.flattenedPath.split('/').slice(1).join('/'),
    },
    url: { type: 'string', resolve: (doc) => `/${doc._raw.flattenedPath}` },
  },
}));

export default makeSource({
  contentDirPath: './content',
  documentTypes: [Docs],
  mdx: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [
      // adding #id to headers in docs page
      rehypeSlug,
      () => (tree) => {
        visit(tree, (node) => {
          if (node?.type === 'element' && node?.tagName === 'pre') {
            const [codeEl] = node.children;

            if (codeEl.tagName !== 'code') return;

            node.raw = codeEl.children?.[0].value;
          }
        }); //This will give us a way to keep the unmodified code content, which we can access later from the node's raw property.
      },
      [
        // configuration for the rehype pretty code plugin,
        rehypePrettyCode,
        {
          ...options,
        },
      ],
      // using 2 themes has an implication, so forward the `raw` property to two separate pre elements, rather than just one
      // implement another visitor function that runs after the syntax highlighting has been completed
      () => (tree) => {
        visit(tree, (node) => {
          if (node?.type === 'element' && node?.tagName === 'div') {
            if (!('data-rehype-pretty-code-fragment' in node.properties))
              return;

            // otherwise
            for (const child of node.children) {
              if (child.tagName === 'pre') {
                child.properties['raw'] = node.raw;
              }
            }
          }
        });
      }, // selecting all div elements that contains a `data-rehype-pretty-code-fragment` data attribute. Then, we iterate over the `pre` children within each `div` (one for each theme)
      // and add the raw code content as a property to them. With this implementation, a custom MDX component for rendering `pre` elements will have `raw` as one of the available props.
    ],
  },
});
