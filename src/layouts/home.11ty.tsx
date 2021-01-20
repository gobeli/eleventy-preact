import { Fragment, h as ph, RenderableProps } from 'preact';
import { EleventyProps } from '../interfaces/eleventyProps';
import { Content } from './components/content';

export interface HomeProps extends EleventyProps {
  intro: string;
  title: string;
  photo: string;
}

const h = (globalThis as any).h ?? ph;

export const render = ({
  content,
  children,
}: RenderableProps<HomeProps>) => (
  <Fragment>
    <h1>Home LAYOUT</h1>
    <Content content={content}>{children}</Content>
  </Fragment>
);

export const data = () => ({
  layout: 'base',
});
