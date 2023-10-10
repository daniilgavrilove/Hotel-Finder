import {FC, useCallback, useMemo} from "react";
import cn from 'classnames'
import { format } from 'date-fns';
import {ListingCardProps} from './ListingCard.props'
import styles from './ListingCard.module.scss'
import {PaginationSlider} from "@/shared/ui/sliders/PaginationSlider/PaginationSlider";
import {AddToFavorite} from "@/features/Favorite";
import {Button} from "@/shared/ui/Button/Button";

export const ListingCard: FC<ListingCardProps> = (props) => {

    const {
        data,
        reservation,
        onAction,
        disabled,
        actionLabel,
        actionId,

    } = props

    const price = useMemo(() => {
        if (reservation) {
            return reservation.totalPrice;
        }

        return data?.price;
    }, [reservation, data?.price]);

    const reservationDate = useMemo(() => {
        if (!reservation) {
            return null;
        }

        const start = new Date(reservation.startDate);
        const end = new Date(reservation.endDate);

        return `${format(start, 'PP')} - ${format(end, 'PP')}`;
    }, [reservation]);

    const handleCancel = useCallback(
        (e: React.MouseEvent<HTMLButtonElement>) => {
            e.stopPropagation();

            if (disabled) {
                return null
            }

            if (onAction && actionId) {
                onAction(actionId)
            }
        }, [disabled, onAction, actionId]);


    return (
        <div className={cn(styles.ListingCard)}>
            <div className={styles.slider}>
            <PaginationSlider
                imagesArr={data.images}
                slug={data.slug}
                title={data.title}
                param={data.slug}/>
            </div>
            <div className={styles.favorite}>
                <AddToFavorite 
                    context="card"
                    listingSlug={data.slug} />
            </div>
            <div className={styles.location}>{data.locationValue}</div>
            <div className={styles.category}>{reservationDate || data.category}</div>
            <div className={styles.price} >
                <div className={styles.priceValue}>${price}</div>
                {!reservation && (
                    <div className={styles.word}>night</div>
                )}
            </div>
            {onAction && actionLabel && (
                <Button
                    disabled={disabled}
                    label={actionLabel}
                    onClick={handleCancel}
                />
            )}
        </div>
    );
};