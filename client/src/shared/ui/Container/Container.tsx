import { FC } from 'react';
import cn from 'classnames';
import { ContainerProps } from './Container.props';
import styles from './Container.module.scss';

export const Container: FC<ContainerProps> = (props) => {
  const { className, children } = props;

  return (
    <div className={cn(styles.Container, className)}>
      {children}
    </div>
  );
};
