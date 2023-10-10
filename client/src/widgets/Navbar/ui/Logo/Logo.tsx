import { FC } from 'react';
import {Link} from "react-router-dom";
import cn from 'classnames'
import { LogoProps } from './Logo.props';
import styles from './Logo.module.scss';
import  LogoSVG from '@/shared/lib/svg/logo.svg';

export const Logo: FC<LogoProps> = (props) => {
  const { className } = props;


  return (
      <Link to="/">
    <LogoSVG
      className={cn(styles.Logo, className)}
      height={50}
      width={50}
    />
      </Link>
  );
};
