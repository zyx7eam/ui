import { ParsedUrlQuery } from 'querystring';

import { marked } from 'marked';
import Slugger from 'github-slugger';

export type SlugParams = ParsedUrlQuery | undefined;
export type Heading = { level: number; text: string; id: string };

export type Route = {
  key?: string;
  title?: string;
  subtitle?: string;
  section?: string;
  heading?: boolean;
  keywords?: string;
  iconSrc?: string;
  defaultOpen?: boolean;
  path?: string;
  routes?: Route[];
  updated?: boolean;
  newPost?: boolean;
  comingSoon?: boolean;
};

const slugger = new Slugger();

export function getHeadings(markdownText: string | undefined): Heading[] {
  let headings: Heading[] = [];

  if (!markdownText) {
    return headings;
  }
  slugger.reset();
  const tokens = marked.lexer(markdownText);

  tokens.forEach((token) => {
    if (token.type === 'heading') {
      headings.push({
        level: token.depth,
        text: token.text,
        id: slugger.slug(token.text),
      });
    }
  });

  return headings;
}
