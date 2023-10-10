import {FC, useState} from "react";
import cn from 'classnames'
import {ListingsProps} from './Listings.props'
import styles from './Listings.module.scss'
import {listingAPI} from "@/features/ListingCreation";
import {Container} from "@/shared/ui/Container/Container";
import {ListingCard} from "@/widgets/Listings/ui/ListingCard/ListingCard";
import {PageLoader} from "@/shared/ui/PageLoader/PageLoader";
import {EmptyState} from "@/shared/ui/EmptyState/EmptyState";

export const Listings: FC<ListingsProps> = (props) => {

    const {className} = props
    const [page, setPage] = useState<number|undefined>(undefined);
    const [limit, setLimit] = useState<number|undefined>(undefined);
    const [category, setCategory] = useState<string|undefined>(undefined);

    const {data, isLoading} = listingAPI.useGetAllListingsQuery({page,limit,category,propertyId : undefined})
    console.log(data
    )
    
    if (isLoading){
        return <PageLoader/>
    }
    if (data)    {
        const {rows:listings} = data

        return (
                <Container className={styles.Listings}>
                    {listings.map((item,index)=>(
                        <ListingCard data={item}/>
                    ))}

                </Container>
        );
    }
    if (!data){
        return <EmptyState/>
    }
        return <div/>
    
};