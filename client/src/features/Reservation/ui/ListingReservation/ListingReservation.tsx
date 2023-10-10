import {FC, useEffect, useMemo, useState} from "react";
import cn from 'classnames'
import {Range} from "react-date-range";
import {differenceInDays, eachDayOfInterval} from "date-fns";
import {ListingReservationProps} from './ListingReservation.props'
import styles from './ListingReservation.module.scss'
import {Calendar} from "@/shared/ui/Calendar/Calendar";
import {Button} from "@/shared/ui/Button/Button";
import {reservationAPI} from "@/features/Reservation/model/api/reservationApi";
import {useAppDispatch, useAppSelector} from "@/shared/lib/hooks/redux";
import {onLoginModalOpen} from "@/features/Auth";

export const ListingReservation: FC<ListingReservationProps> = (props) => {

    const {price,listingId} = props
    const dispatch = useAppDispatch()

    const {user}=useAppSelector(state=>state.auth)
    const {data:listingReservations} = reservationAPI.useGetAllReservationsQuery({listingId,userId : undefined, authorId:undefined})
    const [createReservation] = reservationAPI.useCreateOneReservationMutation()

    const disabledDates = useMemo(() => {
        let dates:Date[]=[]
        listingReservations?.forEach((reservation:any)=>{
            const range = eachDayOfInterval({
                start: new Date(reservation.startDate),
                end: new Date(reservation.endDate)
            })
            dates = [...dates, ...range]
        })
        return dates
    }, [listingReservations]);

    const initialDateRange = {
        startDate: new Date(),
        endDate: new Date(),
        key: 'selection'
    };

    const [dateRange, setDateRange] = useState<Range>(initialDateRange);
    const [totalPrice, setTotalPrice] = useState<number>(price);

    useEffect(() => {
     if (dateRange.startDate && dateRange.endDate){
         const dayCount = differenceInDays(
             dateRange.endDate,
             dateRange.startDate
         )
         if(dayCount && price){
             setTotalPrice(dayCount * price)
         }else {
             setTotalPrice(price)
         }
     }
    }, [dateRange, price]);



    const onChangeDate = ({selection}:any) => {
        setDateRange(selection)
        console.log(selection)
    }

    const createReservationHandler = () => {
        if (!user){
            dispatch(onLoginModalOpen())
        }
        else         {
            const reservation ={
                listingId,
                userId:user.id,
                startDate: dateRange.startDate,
                endDate:dateRange.endDate,
                totalPrice,
                adultsCount: 1,
                childrenCount: 1,
                infantsCount: 1,
            }
        createReservation(reservation)
        }


    }


    return (
        <div className={styles.wrapper}>
        <div className={cn(styles.ListingReservation, )}>
            <div className={styles.price} >
                <div >$ {price}</div>
                <div>night</div>
            </div>
            <Calendar
                disabledDates={disabledDates}
                value={dateRange}
                onChange={onChangeDate}
            />
            <hr/>
            <div className={styles.button}>

            <Button
                disabled={false}
                label="Reserve"
                onClick={createReservationHandler}
            />
            </div>
                <hr/>
                <div className={styles.totalPrice} >
                    <div>
                        Total
                    </div>
                    <div>
                        $ {totalPrice}
                    </div>
                </div>
           </div>
        </div>
    );
};