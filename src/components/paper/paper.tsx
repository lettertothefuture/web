import { FC } from 'react';
import { PaperProps } from './paper.props';
import { usePaperStyles } from './paper.styles';

export const Paper: FC<PaperProps> = ({ children }) => {
  const styles = usePaperStyles();

  return (
    <div className={styles.paper}>
      <div className={styles.content}>{children}</div>
    </div>
  );
};
