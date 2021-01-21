import { RenderableProps } from 'preact';
import { h } from '../util/h';

import type { EleventyProps } from '../interfaces/eleventyProps';

import { Content } from './components/content';

export const render = ({
  content,
  title,
  children,
}: RenderableProps<EleventyProps>) => (
  <html lang="en">
    <head>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>{title}</title>
      <link rel="stylesheet" href="/style.css"/>
    </head>
    <body>
      <main className="content" id="content">
        <Content content={content}>{children}</Content>
      </main>
    </body>
  </html>
);
