// Import Swiper React components
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";

import "./styles.css";
import { EffectCards } from "swiper";

import SwiperCore, { Manipulation } from "swiper";
import SwiperComponent from "./SwiperComponent";
SwiperCore.use([Manipulation]);

export default function App() {
    const [swiperRef, setSwiperRef] = useState(null);

    const slideToRemove = (swiper) => {
        swiper.slideNext(5, true);
        swiper.removeSlide(swiper.activeIndex - 1);
    };
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
                <SwiperSlide>
                    <SwiperComponent
                        index="1"
                        slideToRemove={slideToRemove}
                        swiperRef={swiperRef}
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <SwiperComponent
                        index="2"
                        slideToRemove={slideToRemove}
                        swiperRef={swiperRef}
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <SwiperComponent
                        index="3"
                        slideToRemove={slideToRemove}
                        swiperRef={swiperRef}
                    />
                </SwiperSlide>
            </Swiper>
        </>
    );
}
