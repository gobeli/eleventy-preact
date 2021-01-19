import { RenderableProps, h, isValidElement } from 'preact';
import { EleventyProps } from '../../interfaces/eleventyProps';

export const Content = ({ content, children }: RenderableProps<EleventyProps>) => {
  const isPreactElement = isValidElement(content);

  return (
    <div dangerouslySetInnerHTML={isPreactElement ? undefined : { __html: content?.toString() ?? '' }}>
      {children ? children : isPreactElement ? content : ''}
    </div>
  )
}