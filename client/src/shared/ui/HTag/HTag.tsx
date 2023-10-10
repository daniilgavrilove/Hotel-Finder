import cn from 'classnames';

import styles from './HTag.module.scss';
import { HTagProps } from './HTag.props';

export const HTag = ({ tag, children, className }: HTagProps) => {
  switch (tag) {
    case 'h1': return <h1 className={cn(styles.title_h1, className)}>{ children }</h1>;
    case 'h2': return <h2 className={cn(styles.title_h2, className)}>{ children }</h2>;
    case 'h3': return <h3 className={cn(styles.title_h3, className)}>{ children }</h3>;
    default: return null;
  }
};
