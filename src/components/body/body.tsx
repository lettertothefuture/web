import React, { FC } from 'react';
import { useBodyStyles } from './body.styles';
import { BodyProps } from './body.props';
import { useBody } from './use-body';

const BodyComponent: FC<BodyProps> = (props) => {
  const styles = useBodyStyles();
  const { body, onInput, paragraph } = useBody(props);

  return (
    <p
      ref={paragraph}
      suppressContentEditableWarning={true}
      contentEditable={true}
      className={styles.container}
      dangerouslySetInnerHTML={{ __html: body }}
      onInput={onInput}
      onBlur={onInput}
    />
  );
};

export const Body = React.memo(
  BodyComponent,
  (props, nextProps) => props.children !== nextProps.children,
);
