import {FC} from "react";
import cn from 'classnames'
import {RootLayoutProps} from './RootLayout.props'
import styles from './RootLayout.module.scss'
import {RegisterModal} from "@/features/Auth";
import {Navbar} from "@/widgets/Navbar";
import {LoginModal} from "@/features/Auth/ui/LoginModal/LoginModal";
import {RentModal} from "@/features/ListingCreation";

export const RootLayout: FC<RootLayoutProps> = (props) => {

    const {className, children} = props

    return (
        <div className={cn(styles.RootLayout, className)}>
                    <Navbar />
                    {children}
                    <RegisterModal />
                  <LoginModal/>
                     <RentModal/>
        </div>
    );
};