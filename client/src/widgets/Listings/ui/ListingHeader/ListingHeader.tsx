import {FC, useState} from "react";
import cn from 'classnames'
import {ListingHeaderProps} from './ListingHeader.props'
import styles from './ListingHeader.module.scss'
import {Heading} from "@/shared/ui/Heading/Heading";
import {AddToFavorite} from "@/features/Favorite";
import {Container} from "@/shared/ui/Container/Container";
import {PhotoGallery} from "@/widgets/Listings/ui/PhotoGallery/PhotoGallery";
import {usePageScrollLock} from "@/shared/lib/hooks/usePageScrollLock";
import GallerySVG from '@/shared/lib/svg/gallery.svg'
import {useWindowWidth} from "@/shared/lib/hooks/useWindowWidth";
import {mobile} from "@/shared/lib/consts/breakpoints";
import {FractionSlider} from "@/shared/ui/sliders/FractionSlider/FractionSlider";


export const ListingHeader: FC<ListingHeaderProps> = (props) => {

    const {className,title,images,slug} = props

    const [isGalleryOpen, setIsGalleryOpen] = useState(false);
    usePageScrollLock(isGalleryOpen)
    const width = useWindowWidth()


    return (
        <div className={cn(styles.ListingHeader, className)}>
            <Container>
                <div className={styles.headerTop}>
                    <Heading title={title}/>
                    <AddToFavorite context="page" listingSlug={slug}/>
                </div>
                {width > mobile
                ?<div className={styles.images}>
                        {images.map((item,index)=>(
                            <div className={styles.image}>
                                <img
                                    onClick ={()=>{
                                        setIsGalleryOpen(true)
                                    }}
                                    src={`${process.env.REACT_APP_BASE_URL  }/${  slug  }/${  item.imageSrc}`}

                                    alt={title}/>
                            </div>
                        ))}


                        <div
                            onClick ={()=>{
                                setIsGalleryOpen(true)
                            }}
                            className={styles.showAlPhotos}>
                            <GallerySVG/>
                            Show all photos
                        </div>
                    </div>
                :<FractionSlider imagesArr={images} slug={slug} title={title}/>
                }
            </Container>
            <PhotoGallery
                setIsOpen={setIsGalleryOpen}
                isOpen={isGalleryOpen}
                images={images}
                slug={slug}/>
        </div>
    );
};