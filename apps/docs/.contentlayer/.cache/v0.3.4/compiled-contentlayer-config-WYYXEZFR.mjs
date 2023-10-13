// contentlayer.config.ts
import { defineDocumentType, makeSource } from 'contentlayer/source-files';
import remarkGfm from 'remark-gfm';
import { visit } from 'unist-util-visit';
import rehypePrettyCode from 'rehype-pretty-code';
var options = {
  theme: {
    light: 'github-light',
    dark: 'github-dark-dimmed',
  },
};
var Docs = defineDocumentType(() => ({
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
var contentlayer_config_default = makeSource({
  contentDirPath: './content',
  documentTypes: [Docs],
  mdx: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [
      () => (tree) => {
        visit(tree, (node) => {
          if (node?.type === 'element' && node?.tagName === 'pre') {
            const [codeEl] = node.children;
            if (codeEl.tagName !== 'code') return;
            node.raw = codeEl.children?.[0].value;
          }
        });
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
            for (const child of node.children) {
              if (child.tagName === 'pre') {
                child.properties['raw'] = node.raw;
              }
            }
          }
        });
      },
      // selecting all div elements that contains a `data-rehype-pretty-code-fragment` data attribute. Then, we iterate over the `pre` children within each `div` (one for each theme)
      // and add the raw code content as a property to them. With this implementation, a custom MDX component for rendering `pre` elements will have `raw` as one of the available props.
    ],
  },
});
export { Docs, contentlayer_config_default as default };
//# sourceMappingURL=compiled-contentlayer-config-WYYXEZFR.mjs.map
