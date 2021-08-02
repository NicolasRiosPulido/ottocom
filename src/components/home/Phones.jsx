import React from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from "swiper/react";
import { useMediaQuery } from 'react-responsive';
import styles from '../../styles/Home.module.css';

import "swiper/swiper.min.css";
import "swiper/components/effect-coverflow/effect-coverflow.min.css";
import "swiper/components/pagination/pagination.min.css";

import SwiperCore, { EffectCoverflow, Pagination } from 'swiper/core';

SwiperCore.use([EffectCoverflow, Pagination]);

const Phones = () => {
    const isMobile = useMediaQuery({ query: '(min-device-width: 700px)' })
    if (isMobile) {
        return <></>
    }
    return (
        <>
            <Swiper
                effect={'coverflow'}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={'auto'}
                coverflowEffect={{
                    "rotate": 50,
                    "stretch": 0,
                    "depth": 100,
                    "modifier": 1,
                    "slideShadows": true
                }}
                pagination={true}
                className="mySwiper"
            >
                <SwiperSlide>
                    <Image
                        src={'/images/home/iPhoneA.png'}
                        alt="iphon descripcion"
                        layout='fill'
                        objectFit='contain'
                        quality={100}
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <Image
                        src={'/images/home/iPhoneA.png'}
                        alt="iphon descripcion"
                        layout='fill'
                        objectFit='contain'
                        quality={100}
                    />
                </SwiperSlide>
            </Swiper>
        </>
    )
}

export default Phones
