// contentlayer.config.ts
import { defineDocumentType, makeSource } from 'contentlayer/source-files';
import rehypePrismPlus from 'rehype-prism-plus';
import remarkGfm from 'remark-gfm';
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
    rehypePlugins: [[rehypePrismPlus, { ignoreMissing: true }]],
  },
});
export { Docs, contentlayer_config_default as default };
//# sourceMappingURL=compiled-contentlayer-config-MC5BDD6B.mjs.map
