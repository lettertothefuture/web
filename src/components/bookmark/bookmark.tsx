import { FC } from 'react';
import { BookmarkProps } from './bookmark.props';
import { useBookmark } from './use-bookmark';
import { useBookmarkStyles } from './bookmark.styles';

export const Bookmark: FC<BookmarkProps> = (props) => {
  const styles = useBookmarkStyles(props);
  const { onClick } = useBookmark(props);

  return (
    <div
      className={styles.button}
      onClick={onClick}
    ></div>
  );
};
