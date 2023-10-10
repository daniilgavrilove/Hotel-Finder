import {FC} from "react";
import {useParams} from "react-router-dom";
import {RootLayout} from "@/pages/Layouts/RootLayout/RootLayout";
import {listingAPI} from "@/features/ListingCreation";
import {ListingHeader} from "@/widgets/Listings/ui/ListingHeader/ListingHeader";
import {EmptyState} from "@/shared/ui/EmptyState/EmptyState";
import {ListingInfo} from "@/widgets/Listings/ui/ListingInfo/ListingInfo";
import styles from './ListingPage.module.scss'
import {ListingReservation} from "@/features/Reservation";
import {useAppSelector} from "@/shared/lib/hooks/redux";

const ListingPage: FC = () => {

    const param = useParams()
    const {data} = listingAPI.useGetOneListingQuery(param.slug)
    const {user}=useAppSelector(state=>state.auth)

    if (!data){
        return <EmptyState/>
    }
    if (data && user)    {
        return (
            <RootLayout >
                <ListingHeader
                    title={data.title}
                    slug={data.slug}
                    images={data.images}
                />
                <div className={styles.listingBody}>
                    <ListingInfo
                        description={data.description}
                        category={data.category}
                        bathroomCount={data.bathroomCount}
                        guestCount={data.guestCount}
                        roomCount={data.roomCount}
                        owner={user}
                        locationValue={data.locationValue}
                    />
                    <ListingReservation
                        listingId={data.id}
                        price={data.price}
                    />
                </div>
            </RootLayout>
        );
    }
    return <div/>
};

export default ListingPage