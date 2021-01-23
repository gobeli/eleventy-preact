
import { RenderableProps } from 'preact';

import { EleventyProps } from '../../interfaces/eleventyProps';
import { h } from '../../util/h';

export const render = ({ collections }: RenderableProps<EleventyProps>) => {
  const posts = collections.posts.map((p: any) => ({
    data: {
      title: p.data.title,
      description: p.data.description,
      date: p.data.date
    },
    url: p.url,
    templateContent: p.templateContent
  }));
  const collectionScript = `
    window.__COLLECTIONS__ = {
      posts: ${JSON.stringify(posts)}
    }
  `;

  return (
    <html>
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Content Manager</title>
      </head>
      <body>
        <script src="https://unpkg.com/netlify-cms@^2.0.0/dist/netlify-cms.js"></script>
        <script>
          CMS.registerPreviewStyle('/style.css');
        </script>
        <script dangerouslySetInnerHTML={{ __html: collectionScript }}>
        </script>
        <script src="/admin.js"></script>
      </body>
    </html>
  )
}