import { h, isValidElement, RenderableProps } from 'preact';

import type { EleventyProps } from "../interfaces/eleventyProps";
import { Content } from './components/content';

export const render = ({ content, title, children }: RenderableProps<EleventyProps>) => (
  <html lang="en">
    <head>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>{title}</title>
    </head>
    <body>
      <Content content={content} children={children}></Content>
    </body>
  </html>
)