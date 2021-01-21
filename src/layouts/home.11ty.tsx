import { Fragment, RenderableProps } from 'preact';
import { h } from '../util/h';

import type { EleventyProps } from '../interfaces/eleventyProps';

import { Content } from './components/content';

// Use parent layout as component, to ensure the preview works
import { render as Base } from './base.11ty';

export interface HomeProps extends EleventyProps {
  intro: string;
  title: string;
  photo: string;
}

export const render = ({
  content,
  children,
  title
}: RenderableProps<HomeProps>) => (
  <Base>
    <h1>{title}</h1>
    <Content content={content}>{children}</Content>
  </Base>
);

export const data = () => ({
  layout: 'base',
});
