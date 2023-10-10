import {FC, useCallback} from "react";
import cn from 'classnames'
import toast from "react-hot-toast";
import {ReservationsProps} from './Reservations.props'
import styles from './Reservations.module.scss'
import {Container} from "@/shared/ui/Container/Container";
import {ListingCard} from "@/widgets/Listings/ui/ListingCard/ListingCard";
import {reservationAPI} from "@/features/Reservation/model/api/reservationApi";
import {Heading} from "@/shared/ui/Heading/Heading";
import {useAppSelector} from "@/shared/lib/hooks/redux";
import {EmptyState} from "@/shared/ui/EmptyState/EmptyState";

export const Reservations: FC<ReservationsProps> = (props) => {

    const {user}=useAppSelector(state=>state.auth)
    const {data:reservations} = reservationAPI
        .useGetAllReservationsQuery({userId:undefined, listingId:undefined, authorId:user?.id})

    const [deleteReservation, {isSuccess,isError,error, isLoading}] = reservationAPI.useDeleteOneReservationMutation()
    const onCancel = useCallback(
        (id:number) => {

            deleteReservation(id)
            toast.success('Reservation cancelled');
        },
        [deleteReservation],
    );

    if (reservations?.length === 0) {
        return (
                <EmptyState
                    title="No reservations found"
                    subtitle="Looks like you have no reservations on your properties."
                />
        );
    }
    console.log(reservations)
    if (reservations?.length)    {
        return (
            <Container className={cn(styles.container)} >
                <Heading
                    className={styles.heading}
                    title="Reservations"
                    subtitle="Bookings on your properties"
                />
                <div className={styles.Reservations}>
                    {reservations.map((reservation,index)=>(
                        <ListingCard
                            disabled={isLoading}
                            actionId={reservation.id}
                            onAction={onCancel}
                            actionLabel="Cancel reservation"
                            reservation={reservation}
                            data={reservation.listing}/>
                    ))}
                </div>
            </Container>
        );
    }
    return <div/>

};