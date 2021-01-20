import { RenderableProps, h as ph, isValidElement } from 'preact';
import { EleventyProps } from '../../interfaces/eleventyProps';

const h = (globalThis as any).h ?? ph;

export const Content = ({
  content,
  children,
}: RenderableProps<EleventyProps>) => {
  const isPreactElement = isValidElement(content);

  return (
    <div
      dangerouslySetInnerHTML={
        isPreactElement ? undefined : { __html: content?.toString() ?? '' }
      }
    >
      {children ? children : isPreactElement ? content : null}
    </div>
  );
};
