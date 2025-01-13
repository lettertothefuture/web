import { ButtonProps } from './button.props';

export const useButton = (props: ButtonProps) => {
  return {
    onClick: props.onClick,
    disabled: props.disabled,
    label: props.label,
  };
};
