import { h, RenderableProps } from 'preact';
import { EleventyProps } from '../interfaces/eleventyProps';
import { render as Base } from './base.11ty' 
import { Content } from './components/content';

export const render = ({ content, children }: RenderableProps<EleventyProps>) => (
  <Base>
    <h1>Home Layout</h1>
    <Content content={content} children={children}></Content>
  </Base>
)