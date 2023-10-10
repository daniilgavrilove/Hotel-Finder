import { FC } from 'react';
import cn from 'classnames';
import SearchSVG from '@/shared/lib/svg/search.svg';
import styles from './Search.module.scss';

export const Search: FC = () => {
  return (
    <div className={styles.Search}>
      <div className={cn(styles.searchItem)}>
        Anywhere
      </div>
      <div className={cn(styles.searchItem)}>
        Any Week
      </div>
      <div className={cn(styles.searchItem)}>
        <div className={cn(styles.itemText)}>Add Guests</div>
        <div className={cn(styles.itemIcon)}>
          <SearchSVG width={18} height={18} />
        </div>
      </div>
    </div>
  );
};
