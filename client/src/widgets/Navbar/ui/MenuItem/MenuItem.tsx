import { FC } from 'react';
import cn from 'classnames';
import { MenuItemProps } from './MenuItem.props';
import styles from './MenuItem.module.scss';

export const MenuItem: FC<MenuItemProps> = (props) => {
  const { onClick, label } = props;

  return (
    <div
      onClick={onClick}
      className={cn(styles.MenuItem)}
    >
      {label}
    </div>
  );
};
