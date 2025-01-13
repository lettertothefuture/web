import { BookmarkProps } from './bookmark.props';
import debouce from 'lodash/debounce';

export const useBookmark = (props: BookmarkProps) => {
  return {
    onClick: props.onClick ? debouce(props.onClick, 100) : undefined,
    label: props.children,
  };
};
