import {FC} from "react";
import cn from 'classnames'
import {ReservationPageProps} from './ReservationPage.props'
import styles from './ReservationPage.module.scss'
import {useAppSelector} from "@/shared/lib/hooks/redux";
import {reservationAPI} from "@/features/Reservation/model/api/reservationApi";
import {RootLayout} from "@/pages/Layouts/RootLayout/RootLayout";
import {Reservations} from "@/widgets/Reservations";

const ReservationPage: FC<ReservationPageProps> = (props) => {

    const {className} = props


        return (
            <RootLayout>

                 <Reservations

                 />
            </RootLayout>
        );

};

export default ReservationPage