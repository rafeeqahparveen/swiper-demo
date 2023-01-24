// Import Swiper React components
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";

import "./styles.css";
import { EffectCards } from "swiper";

import SwiperCore, { Manipulation } from "swiper";
import HorizontalSwiper from "./HorizontalSwiper";
SwiperCore.use([Manipulation]);

export default function VerticalSwiper() {
    const [swiperRef, setSwiperRef] = useState(null);
    let offers = [];

    const slideToRemove = (swiper) => {
        swiper.slideNext(5, true);
        swiper.removeSlide(swiper.activeIndex - 1);
    };
    
    for (let i = 1; i <= 10; i++) {
        offers.push(<SwiperSlide key={i}>
            <HorizontalSwiper
                index={i}
                slideToRemove={slideToRemove}
                swiperRef={swiperRef}
            />
        </SwiperSlide>)
    }

    return (
        <>
            <Swiper
                onSwiper={(swiper) => setSwiperRef(swiper)}
                className="mySwiper swiper-v main-container"
                effect={"cards"}
                grabCursor={true}
                modules={[EffectCards]}
                spaceBetween={50}
                pagination={{
                    clickable: true,
                }}
                direction={"vertical"}
            >
                {offers}
            </Swiper>
        </>
    );
}
