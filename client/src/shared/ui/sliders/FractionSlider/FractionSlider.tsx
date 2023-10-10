import React, {FC, useState} from "react";
import cn from 'classnames'
import {Swiper, SwiperRef, SwiperSlide, useSwiper, useSwiperSlide} from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import styles from './FractionSlider.module.scss'
import {Image} from "@/features/ListingCreation/model/types/IListing";
import {Loader} from "@/shared/ui/Loader/Loader";
import 'swiper/css/pagination';
import '../fraction.scss'


interface FractionSliderProps {
    imagesArr: Image[]
    slug: string
    title: string
}

export const FractionSlider: FC<FractionSliderProps> = (props) => {

    const {imagesArr,slug,title} = props
    const [isLoading, setIsLoading] = useState (true);


    return (
        <Swiper
            pagination ={{
                type:"fraction",

            }}
            modules={[Pagination]}
            className={cn(styles.fractionSlider, 'fractionSlider')}>
            {imagesArr.map((slide, index, array) => (
                <SwiperSlide
                    className={cn(styles.slide, 'slide')}
                    onLoad={() => setIsLoading(false)}>
                    {isLoading && <Loader/>}
                    <img loading="lazy"
                         className={styles.image}
                         src={`${process.env.REACT_APP_BASE_URL  }/${  slug  }/${  slide.imageSrc}`}
                         alt={title}/>
                </SwiperSlide>
            ))}
        </Swiper>
    );
};