import React, {useRef, useState} from "react";
import ArrowSVG from '@/shared/lib/svg/arrow.svg'


import {Swiper, SwiperRef, SwiperSlide, useSwiper, useSwiperSlide} from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


import '../pagination.scss'
import '../navigation.scss'

import {Link, useNavigate} from "react-router-dom";
import cn from "classnames";
import {Image} from "@/features/ListingCreation/model/types/IListing";
import {Loader} from "@/shared/ui/Loader/Loader";
import styles from "./PaginationSlider.module.scss";


interface PaginationSliderProps {
    imagesArr: Image[]
    slug: string
    title: string
    param: string
}

export function PaginationSlider({imagesArr, slug, title, param}: PaginationSliderProps) {
    const navigate = useNavigate()
    const [isLoading, setIsLoading] = useState (true);

    const [swiperRef, setSwiperRef] = useState<any>(null);

    const [isBeginning, setIsBeginning] = useState<boolean | null>(true);
    const [isEnd, setIsEnd] = useState<boolean>(imagesArr?.length === 1);


    const slideDetect = () => {
        setIsEnd(swiperRef?.isEnd)
        setIsBeginning(swiperRef?.isBeginning)
    }



    return (
            <Swiper
                onClick={()=>navigate(`listing/${param}`)}

                onSwiper={setSwiperRef}
                pagination ={{
                    clickable:true,
                    dynamicBullets:true,
                }}
                navigation={{
                    prevEl: '.arrows .prev',
                    nextEl: '.arrows .next',
                }}
                modules={[Pagination,Navigation]}

                onSlideChange={slideDetect}
                className={cn(styles.paginationNavigationSlider, 'paginationNavigationSlider')}>
                {imagesArr?.map((slide, index, array) => (
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
                <div
                    className="arrows">
                    <div className={cn("arrow prev",{
                        'isBeginning':isBeginning
                    })}><ArrowSVG/></div>

                    <div className={cn("arrow next",{
                        'isEnd':isEnd
                    })}><ArrowSVG/></div>
                </div>

            </Swiper>
    );
}
