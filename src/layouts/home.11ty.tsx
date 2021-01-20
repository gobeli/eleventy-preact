import { Fragment, h, RenderableProps } from 'preact';
import { EleventyProps } from '../interfaces/eleventyProps';
import { Content } from './components/content';

export const render = ({
  content,
  children,
}: RenderableProps<EleventyProps>) => (
  <Fragment>
    <h1>Home LAYOUT</h1>
    <Content content={content}>{children}</Content>
  </Fragment>
);

export const data = () => ({
  layout: 'base',
});
