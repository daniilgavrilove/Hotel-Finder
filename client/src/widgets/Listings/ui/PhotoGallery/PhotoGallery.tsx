import {FC, useCallback, useEffect, useState} from "react";
import cn from 'classnames'
import {PhotoGalleryProps} from './PhotoGallery.props'
import styles from './PhotoGallery.module.scss'
import {Container} from "@/shared/ui/Container/Container";
import {ArrowButton} from "@/shared/ui/ArrowButton/ArrowButton";


export const PhotoGallery: FC<PhotoGalleryProps> = (props) => {

    const {isOpen,setIsOpen,images,slug} = props

    const [showGallery, setShowGallery] = useState(false);

    useEffect(() => {
        setShowGallery(isOpen)
    }, [isOpen]);


    const handleClose = ()=>{
        setShowGallery(false)
        setTimeout(() => {
            setIsOpen(false)

        }, 300);

    }

    if (!isOpen) {
        return null
    }

    return (
        <div className={cn(styles.wrapper,{
            [styles.showGallery]:showGallery

        })}>
            <div className={styles.galleryHeader}>
                <ArrowButton
                    className={styles.arrowButton}
                    onClick={handleClose}
                    direction="toLeft"/>
        </div>
        <div className={cn(styles.PhotoGalleryWrapper)}>

                <div className={styles.photoGallery} >
                    {images.map((item,index)=>(
                        <div className={styles.image}>
                            <img
                                src={`${process.env.REACT_APP_BASE_URL  }/${  slug  }/${  item.imageSrc}`}
                                alt={slug}/>
                        </div>
                    ))}
                </div>
        </div>

        </div>
    );
};