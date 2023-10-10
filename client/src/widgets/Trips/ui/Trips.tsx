import {FC, useCallback} from "react";
import cn from 'classnames'
import toast from "react-hot-toast";
import {TripsProps} from './Trips.props'
import styles from './Trips.module.scss'
import {Container} from "@/shared/ui/Container/Container";
import {ListingCard} from "@/widgets/Listings/ui/ListingCard/ListingCard";
import {reservationAPI} from "@/features/Reservation/model/api/reservationApi";
import {IFetchError} from "@/shared/api/types/IError";
import {Heading} from "@/shared/ui/Heading/Heading";
import {useAppSelector} from "@/shared/lib/hooks/redux";
import {EmptyState} from "@/shared/ui/EmptyState/EmptyState";

export const Trips: FC<TripsProps> = (props) => {

    const {user}=useAppSelector(state=>state.auth)
    const {data:reservations} = reservationAPI
        .useGetAllReservationsQuery({userId:user?.id, listingId:undefined,authorId:undefined })

    const [deleteReservation, {isSuccess,isError,error, isLoading}] = reservationAPI.useDeleteOneReservationMutation()

    const deleteReservationError = error as IFetchError

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
                    title="No trips found"
                    subtitle="Looks like you havent reserved any trips."
                />
        );
    }

    if (reservations)    {
        return (
            <Container className={cn(styles.container)} >
                <Heading
                    className={styles.heading}
                    title="Trips"
                    subtitle="Where you've been and where you're going"
                />
                <div className={styles.Trips}>
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
    return  <div/>
};