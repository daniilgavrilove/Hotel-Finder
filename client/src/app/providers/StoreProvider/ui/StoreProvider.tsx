import { FC } from 'react';
import cn from 'classnames';
import { Provider } from 'react-redux';
import { StoreProviderProps } from './StoreProvider.props';
import styles from './StoreProvider.module.scss';
import { store } from '../config/store';

export const StoreProvider: FC<StoreProviderProps> = (props) => {
  const { children } = props;

  return (
    <Provider store={store}>
      {children}
    </Provider>
  );
};
