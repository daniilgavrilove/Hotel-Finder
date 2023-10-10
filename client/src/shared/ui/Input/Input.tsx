import { FC } from 'react';
import cn from 'classnames';
import { InputProps } from './Input.props';
import styles from './Input.module.scss';

export const Input: FC<InputProps> = (props) => {
  const {
    className,
    id,
    label,
    type = 'text',
    disabled,
    formatPrice,
    register,
    required,
    errors,
  } = props;

  return (
    <div className={cn(styles.InputWrapper, className, {
      [styles.formatPrice]: formatPrice,
      [styles.error]: errors[id],
    })}
    >
      {formatPrice && (<div className={styles.price}>$</div>)}
      <input
        id={id}
        disabled={disabled}
        {...register(id, { required })}
        placeholder=" "
        type={type}
        className={cn(styles.input, {
          [styles.error]: errors[id],
        })}
      />
      <label htmlFor={id} className={styles.label}>
        {label}
      </label>
    </div>
  );
};
