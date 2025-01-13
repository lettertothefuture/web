import React, { FC } from 'react';
import { TitleProps } from './title.props';
import { useTitleStyles } from './title.styles';
import { useTitle } from './use-title';

const TitleComponent: FC<TitleProps> = (props) => {
  const styles = useTitleStyles();
  const { onInput, heading, title } = useTitle(props);

  return (
    <h5
      ref={heading}
      suppressContentEditableWarning={true}
      className={styles.title}
      contentEditable={true}
      dangerouslySetInnerHTML={{ __html: title }}
      onInput={onInput}
      onBlur={onInput}
    />
  );
};

export const Title = React.memo(
  TitleComponent,
  (props, nextProps) => props.children !== nextProps.children,
);
