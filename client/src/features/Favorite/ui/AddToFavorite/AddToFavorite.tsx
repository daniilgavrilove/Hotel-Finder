import {FC, useCallback, useEffect, useState} from "react";
import cn from 'classnames'
import toast from "react-hot-toast";
import {AddToFavoriteProps} from './AddToFavorite.props'
import styles from './AddToFavorite.module.scss'
import HeartFillSVG from '@/shared/lib/svg/heart-fill.svg'
import HeartOutlinedSVG from '@/shared/lib/svg/heart-outlined.svg'
import {favoriteAPI, IFavorite} from "@/features/Favorite/model/api/favoriteApi";
import {useAppDispatch, useAppSelector} from "@/shared/lib/hooks/redux";
import {onLoginModalOpen} from "@/features/Auth";



export const AddToFavorite: FC<AddToFavoriteProps> = (props) => {

    const {className,listingSlug,context} = props

    const dispatch = useAppDispatch()
    const {user}=useAppSelector(state=>state.auth)

    const [userFavorite, setUserFavorite] = useState<IFavorite|null>(null);
    const [isFavorite, setIsFavorite] = useState<boolean>(false);

    const [getUserFavorite] = favoriteAPI.useLazyGetUserFavoriteQuery()
    const[addToFavorite] = favoriteAPI.useAddListingToFavoriteMutation()
    const[deleteFromFavorite] = favoriteAPI.useDeleteListingFromFavoriteMutation()
    useEffect(() => {
        const isListingFavorite = !!userFavorite?.listings.find(item => item.slug === listingSlug)
        setIsFavorite(isListingFavorite)
    }, [userFavorite, listingSlug]);

    useEffect(() => {
        async function getFavorite (){
            const favorite = await getUserFavorite(user?.id).unwrap()
            setUserFavorite(favorite)

        }
        getFavorite()
    }, [getUserFavorite,user?.id]);





    const toggleFavoriteHandler = useCallback(
        async () => {
            if (!user){
                dispatch(onLoginModalOpen())
            }
            const favoriteId = userFavorite?.id
            if (favoriteId && listingSlug){
                    if(isFavorite)  {
                        setIsFavorite(false)
                    return deleteFromFavorite({favoriteId,listingSlug})
                }
                if(!isFavorite) {
                    setIsFavorite(true)

                    return addToFavorite({favoriteId,listingSlug})
                }
            }
            return toast.error('Something went wrong')
        },
        [addToFavorite, deleteFromFavorite, dispatch, isFavorite, listingSlug, user, userFavorite],
    );



    return (
        <div
            onClick={toggleFavoriteHandler}
            className={cn(styles.AddToFavorite, className)}>
            <HeartOutlinedSVG
                className={cn(styles.outlined,{
                    [styles.hidden]: context === 'page'
                })}
                width={30}
                height = {30}
            />
            {context === 'page'
                ? <div className={styles.pageFavorite}>
                    <HeartFillSVG
                    className={cn(styles.fill,{
                        [styles.isFavorite]:isFavorite,

                    })}
                    width={20}
                    height = {20}
                />
                    To favorite
            </div>
            :    <HeartFillSVG
                    className={cn(styles.fill,{
                        [styles.isFavorite]:isFavorite,

                    })}
                    width={26}
                    height = {26}
                />
            }

        </div>
    );
};