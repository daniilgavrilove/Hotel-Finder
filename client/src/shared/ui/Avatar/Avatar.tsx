import { FC } from 'react';
import cn from 'classnames';
import { AvatarProps } from './Avatar.props';
import styles from './Avatar.module.scss';
import AvatarSVG from '@/shared/lib/svg/avatar.svg';

export const Avatar: FC<AvatarProps> = (props) => {
  const { className, size = 30 } = props;

  return (
    <AvatarSVG
      className={cn(styles.Avatar, className)}
      height={size}
      width={size}
    />
  // <Image
  //   className={cn(styles.Avatar, className)}
  //   src="/src/shared/lib/svg/avatar.svg"
  //   alt="Avatar"
  //   height="30"
  //   width="30"
  // />

  );
};
