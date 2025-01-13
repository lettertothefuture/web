import { FormEvent, useCallback, useEffect, useRef, useState } from 'react';
import { TitleProps } from './title.props';

export const useTitle = (props: TitleProps) => {
  const heading = useRef<HTMLHeadingElement>(null);
  const [last, setLast] = useState(props.children);

  const onInput = useCallback(
    (event: FormEvent<HTMLHeadingElement>) => {
      const str = event.currentTarget.innerHTML || '';

      if (props.onChange && str !== last) {
        props.onChange(str);
      }

      setLast(str);
    },
    [props, last],
  );

  useEffect(() => {
    if (!heading.current) {
      return;
    }

    if (props.children !== heading.current.innerHTML) {
      heading.current.innerHTML = props.children;
    }
  }, [props, heading]);

  return {
    onInput,
    heading,
    title: props.children,
  };
};
