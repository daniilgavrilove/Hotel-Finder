import { FC } from 'react';
import {useLocation} from "react-router-dom";
import { NavbarProps } from './Navbar.props';
import { Container } from '@/shared/ui/Container/Container';
import styles from './Navbar.module.scss';
import { Search } from '../Search/Search';
import { Logo } from '../Logo/Logo';
import { UserMenu } from '../UserMenu/UserMenu';
import {Categories} from "@/widgets/Navbar/ui/Categories/Categories";

export const Navbar: FC<NavbarProps> = (props) => {
  const { className } = props;

  const {pathname} = useLocation()

  return (
    <div className={styles.Navbar}>
        <div className={styles.navbarHeader}>
            <Container className={styles.container}>
                <Logo />
                <Search />
                <UserMenu />
            </Container>
        </div>
        <div className={styles.navbarFooter}>
            {pathname === '/' && <Categories/>}
        </div>
    </div>
  );
};
