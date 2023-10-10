import {
  FC, useCallback, useEffect, useRef, useState,
} from 'react';
import cn from 'classnames';
import { ModalProps } from './Modal.props';
import styles from './Modal.module.scss';
import CloseSVG from '@/shared/lib/svg/close.svg';
import { Button } from '../Button/Button';
import {useOutsideClick} from "@/shared/lib/hooks/useOutsideClick";

export const Modal: FC<ModalProps> = (props) => {
  const {

    isOpen,
    onClose,
    onSubmit,
    title,
    body,
    actionLabel,
    footer,
    disabled,
    secondaryAction,
    secondaryActionLabel,
  } = props;

  const [showModal, setShowModal] = useState(isOpen);

  const modal = useRef<HTMLDivElement | null>(null)


  useEffect(() => {
    setShowModal(isOpen);
  }, [isOpen]);

 useOutsideClick(modal,()=>onClose())

  const handleClose = useCallback(() => {
    if (disabled) {
      return;
    }
    setShowModal(false);
    setTimeout(() => {
      onClose();
    }, 300);
  }, [onClose, disabled]);

  const handleSubmit = useCallback(() => {
    if (disabled) {
      return;
    }

    onSubmit();
  }, [onSubmit, disabled]);

  const handleSecondaryAction = useCallback(() => {
    if (disabled || !secondaryAction) {
      return;
    }

    secondaryAction();
  }, [secondaryAction, disabled]);

  if (!isOpen) {
    return null;
  }

  return (

    <div className={cn(styles.ModalWrapper)}>
      <div
          ref={modal}
          className={cn(styles.Modal)}>
        {/* content */}
        <div className={cn(styles.content, {
          [styles.showModal]: showModal,
        })}
        >
          {/* header */}
          <div className={styles.header}>
              <CloseSVG
                  className={styles.button}
                  onClick={handleClose}
                  height={30} width={30} />
            <div className={styles.title}>
              {title}
            </div>
          </div>
          {/* body */}
          <div className={styles.body}>
            {body}
          </div>
          {/* footer */}
          <div className={styles.footer}>
            <div
              className={styles.footerContent}
            >
              {secondaryAction && secondaryActionLabel && (
              <Button
                  disabled={disabled}
                  label={secondaryActionLabel}
                onClick={handleSecondaryAction}
                outline
              />
              )}
              <Button
                  disabled={disabled}
                  label={actionLabel}
                onClick={handleSubmit}
              />
            </div>
            {footer}
          </div>
        </div>
      </div>
    </div>
  );
};
