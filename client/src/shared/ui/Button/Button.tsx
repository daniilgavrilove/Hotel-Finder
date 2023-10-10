import { FC } from 'react';
import cn from 'classnames';
import { ButtonProps } from './Button.props';
import styles from './Button.module.scss';

export const Button: FC<ButtonProps> = (props) => {
  const {
    className,
    label,
    onClick,
    disabled,
    outline,
    icon: Icon,
  } = props;

  return (
    <button
      type="button"
      disabled={disabled}
      onClick={onClick}
      className={cn(styles.Button, className, {
        [styles.outline]: outline,
      })}
    >
      {Icon && (
      <Icon
        width={24}
        height={24}
        className={styles.icon}
      />
      )}
      {label}
    </button>
  );
};
