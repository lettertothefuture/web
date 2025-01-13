import { FC, useMemo } from 'react';
import { LoaderProps } from './loader.props';
import { Paper } from '../paper';
import { useLoaderStyles } from './loader.styles';

export const Loader: FC<LoaderProps> = () => {
  const styles = useLoaderStyles();
  const words = useMemo(() => 'Enviando'.split(''), []);

  return (
    <aside className={styles.root}>
      <Paper>
        <div className={styles.content}>
          {words
            .filter((word) => word !== ' ')
            .map((letter, index) => (
              <div
                key={index}
                className={styles.word}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {letter}
              </div>
            ))}
        </div>
      </Paper>
    </aside>
  );
};
