import { FC, useCallback, useState } from 'react';
import cn from 'classnames';
import {useNavigate} from "react-router-dom";
import { UserMenuProps } from './UserMenu.props';
import styles from './UserMenu.module.scss';
import Burger from '@/shared/lib/svg/burger.svg';
import { Avatar } from '@/shared/ui/Avatar/Avatar';
import { MenuItem } from '../MenuItem/MenuItem';
import {useAppDispatch, useAppSelector} from '@/shared/lib/hooks/redux';
import {onLoginModalOpen, onRegisterModalOpen,} from '@/features/Auth';
import {Logout} from "@/features/Auth/ui/actions/Loguot";
import {onRentModalOpen} from "@/features/ListingCreation";

export const UserMenu: FC<UserMenuProps> = (props) => {
  const { className } = props;


  const dispatch = useAppDispatch();
  const {isAuth}=useAppSelector(state=>state.auth)
  const navigate = useNavigate()

  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleOpen = useCallback(
    () => setIsOpen((value) => !value),
    [],
  );

  return (
    <div className={styles.wrapper}>
      <div className={cn(styles.UserMenu, className)}>
        <div
            onClick={()=>dispatch(onRentModalOpen())}
            className={styles.text}>
          Airbnb your home!
        </div>
        <div
            className={styles.menu}
            onClick={toggleOpen}
        >
          <Burger
            width={30}
            height={30}
          />
          <Avatar />
        </div>
      </div>
      {isOpen && (
      <div className={styles.popup}>
        {isAuth
        ?  <>
              <MenuItem
                  label="My trips"
                  onClick={() => navigate('/trips')}
              />
              <MenuItem
                  label="My favorites"
                  onClick={() => navigate('/favorites')}
              />
              <MenuItem
                  label="My reservations"
                  onClick={() => navigate('/reservations')}
              />
              <MenuItem
                  label="My properties"
                  onClick={() => navigate('/properties')}
              />
              <MenuItem
                  label="Airbnb your home"
                  onClick={()=>dispatch(onRentModalOpen())}
              />
              <hr/>
              <Logout>
              <MenuItem
                  label="Log out"
              />
              </Logout>
            </>
        :(<>
            <MenuItem
                label="Login"
                onClick={() => dispatch(onLoginModalOpen())}
            />
          <MenuItem
          label="Sign Up"
          onClick={() => dispatch(onRegisterModalOpen())}
          />
            </>)
        }

      </div>
      )}
    </div>
  );
};
