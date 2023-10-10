import { FC } from 'react';
import cn from 'classnames';
import { RegisterModalProps } from './RegisterModal.props';
import styles from './RegisterModal.module.scss';

export const RegisterModal: FC<RegisterModalProps> = (props) => {
  const { className } = props;

  return (
    <div className={cn(styles.RegisterModal, className)}>
      RegisterModal
    </div>
  );
};
