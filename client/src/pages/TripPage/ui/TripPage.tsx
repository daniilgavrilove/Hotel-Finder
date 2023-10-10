import {FC} from "react";
import cn from 'classnames'
import {TripPageProps} from './TripPage.props'
import styles from './TripPage.module.scss'
import {useAppSelector} from "@/shared/lib/hooks/redux";
import {EmptyState} from "@/shared/ui/EmptyState/EmptyState";
import {Container} from "@/shared/ui/Container/Container";
import {reservationAPI} from "@/features/Reservation/model/api/reservationApi";
import {Trips} from "@/widgets/Trips";
import {RootLayout} from "@/pages/Layouts/RootLayout/RootLayout";

const TripPage: FC<TripPageProps> = (props) => {




        return (
            <RootLayout>

            <Trips

            />
            </RootLayout>
        );

};

export default TripPage