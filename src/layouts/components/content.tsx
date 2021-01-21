import { RenderableProps, isValidElement } from 'preact';
import { h } from '../../util/h';

import type { EleventyProps } from '../../interfaces/eleventyProps';

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
