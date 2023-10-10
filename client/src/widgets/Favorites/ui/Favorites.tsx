import {FC} from "react";
import cn from 'classnames'
import {FavoritesProps} from './Favorites.props'
import styles from './Favorites.module.scss'
import {PageLoader} from "@/shared/ui/PageLoader/PageLoader";
import {Container} from "@/shared/ui/Container/Container";
import {ListingCard} from "@/widgets/Listings/ui/ListingCard/ListingCard";
import {EmptyState} from "@/shared/ui/EmptyState/EmptyState";
import {favoriteAPI} from "@/features/Favorite/model/api/favoriteApi";
import {useAppSelector} from "@/shared/lib/hooks/redux";
import {Heading} from "@/shared/ui/Heading/Heading";

export const Favorites: FC<FavoritesProps> = (props) => {

    const {className} = props
    const {user}=useAppSelector(state=>state.auth)
    const {data, isLoading} = favoriteAPI.useGetUserFavoriteQuery(user?.favorite.id)

    if (data?.listings.length===0){
        return (
            <EmptyState
                title="No favorites found"
                subtitle="Looks like you have no favorite listings."
            />
        )
    }

    if (isLoading){
        return <PageLoader/>
    }
    if (data)    {
        const {listings}=data
        return (
            <Container className={styles.container}>
                <Heading
                    className={styles.heading}
                    title="Favorites"
                    subtitle="List of places you favorited!"
                />
                <div className={styles.Favorites}>
                {listings.map((item,index)=>(
                    <ListingCard data={item}/>
                ))}
                </div>
            </Container>
        );
    }
    if (!data){
        return <EmptyState title="There is no favorites" subtitle="Get some more" showReset/>
    }
    return <div/>
};