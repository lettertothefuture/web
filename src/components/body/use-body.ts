import { FormEvent, useCallback, useEffect, useRef, useState } from 'react';
import { BodyProps } from './body.props';

export const useBody = (props: BodyProps) => {
  const paragraph = useRef<HTMLParagraphElement>(null);
  const [last, setLast] = useState(props.children);

  const onInput = useCallback(
    (event: FormEvent<HTMLParagraphElement>) => {
      const str = event.currentTarget.innerHTML;

      if (props.onChange && str !== last) {
        props.onChange(event.currentTarget.textContent || '');
      }

      setLast(str);
    },
    [last, props],
  );

  useEffect(() => {
    if (!paragraph.current) {
      throw new Error('INICIALIZATION REQUIRED!!!');
    }

    if (props.children !== paragraph.current.innerHTML) {
      paragraph.current.innerHTML = props.children!;
    }
  }, [props.children, paragraph]);

  return {
    paragraph,
    onInput,
    body: props.children,
  };
};
