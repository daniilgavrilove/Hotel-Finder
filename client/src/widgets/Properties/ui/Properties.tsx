import {FC, useCallback} from "react";
import cn from 'classnames'
import toast from "react-hot-toast";
import {PropertiesProps} from './Properties.props'
import styles from './Properties.module.scss'
import {useAppSelector} from "@/shared/lib/hooks/redux";
import {reservationAPI} from "@/features/Reservation/model/api/reservationApi";
import {EmptyState} from "@/shared/ui/EmptyState/EmptyState";
import {Container} from "@/shared/ui/Container/Container";
import {Heading} from "@/shared/ui/Heading/Heading";
import {ListingCard} from "@/widgets/Listings/ui/ListingCard/ListingCard";
import {listingAPI} from "@/features/ListingCreation";

export const Properties: FC<PropertiesProps> = (props) => {



    const {user}=useAppSelector(state=>state.auth)
  const {data} = listingAPI.useGetAllListingsQuery({
      propertyId:user?.property?.id,
      limit:undefined,
      category:undefined,
      page:undefined
  })

    const properties = data?.rows

    const [deleteProperty,{isLoading}] = listingAPI.useDeleteOneListingMutation()
    const onCancel = useCallback(
        (id:number) => {

            deleteProperty(id)
            toast.success('Reservation cancelled');
        },
        [deleteProperty],
    );

    if (properties?.length === 0) {
        return (
            <EmptyState
                title="No properties found"
                subtitle="Looks like you have no properties."
            />
        );
    }
    console.log(properties)
    if (properties?.length)    {
        return (
            <Container className={cn(styles.container)} >
                <Heading
                    className={styles.heading}
                    title="Properties"
                    subtitle="List of your properties"
                />
                <div className={styles.Properties}>
                    {properties.map((property,index)=>(
                        <ListingCard
                            key={property.id}
                            disabled={isLoading}
                            actionId={property.id}
                            onAction={onCancel}
                            actionLabel="Delete property"
                            data={property}

                            />
                    ))}
                </div>
            </Container>
        );
    }
    return <div/>
};