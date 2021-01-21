import { Fragment, RenderableProps } from 'preact';
import { h } from '../util/h';

import type { EleventyProps } from '../interfaces/eleventyProps';

import { Content } from './components/content';

export interface HomeProps extends EleventyProps {
  intro: string;
  title: string;
  photo: string;
}

export const render = ({
  content,
  children,
}: RenderableProps<HomeProps>) => (
  <Fragment>
    <h1>Home yeah boyyy</h1>
    <Content content={content}>{children}</Content>
  </Fragment>
);

export const data = () => ({
  layout: 'base',
});
