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

export default function VerticalSwiper(props) {
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
                {props.data.offers.map((offer) => {
                    return (
                        <SwiperSlide key={offer.id}>
                            <HorizontalSwiper
                                index={offer.id}
                                description={offer.description}
                                name={offer.name}
                                slideToRemove={slideToRemove}
                                swiperRef={swiperRef}
                            />
                        </SwiperSlide>
                    )

                })}
            </Swiper>
        </>
    );
}
