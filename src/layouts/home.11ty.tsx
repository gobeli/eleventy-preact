import { RenderableProps } from 'preact';
import { h } from '../util/h';

import type { EleventyProps } from '../interfaces/eleventyProps';

import { Content } from './shared/content';

// Use parent layout as component, to ensure the preview works
import { render as Base } from './base.11ty';
import { PostLink } from './home/post_link';

export interface HomeProps extends EleventyProps {
  intro: string;
  title: string;
  photo: string;
}

export const render = ({
  content,
  children,
  collections,
  title
}: RenderableProps<HomeProps>) => (
  <Base>
    <h1>{title}</h1>
    <Content content={content}>{children}</Content>
    <h2>Blog Posts</h2>
    <div className="post-links">
      {collections.posts.map(PostLink)}
    </div>
  </Base>
);
