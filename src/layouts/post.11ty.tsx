import { RenderableProps } from 'preact';
import { h } from '../util/h';

import type { EleventyProps } from '../interfaces/eleventyProps';

import { Content } from './shared/content';

// Use parent layout as component, to ensure the preview works
import { render as Base } from './base.11ty';

export interface PostProps extends EleventyProps {
  title: string;
  photo: string;
}

export const render = ({
  content,
  children,
  title
}: RenderableProps<PostProps>) => (
  <Base>
    <h1>{title}</h1>
    <Content content={content}>{children}</Content>
  </Base>
);
