import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";

import "./styles.css";
import { EffectCards } from "swiper";

import SwiperCore, { Manipulation } from "swiper";
SwiperCore.use([Manipulation]);

export default function SwiperComponent(props) {
    const [direction, setDirection] = useState(null);

    return (
        <Swiper
            className="mySwiper2 swiper-h"
            direction={"horizontal"}
            effect={"cards"}
            grabCursor={true}
            modules={[EffectCards]}
            spaceBetween={50}
            pagination={{
                clickable: true,
            }}
            freeMode={true}
            initialSlide={1}
            onSlideResetTransitionEnd={(swiperChild) => {
                if (swiperChild.touches.currentX > swiperChild.touches.startX) {
                    setDirection("right");
                    //console.log("direction: right");
                }
                if (swiperChild.touches.currentX < swiperChild.touches.startX) {
                    setDirection("left");
                    //console.log("direction: left");
                }
                props.slideToRemove(props.swiperRef);
            }}
            data-testid="offer-1"
        >
            <SwiperSlide>Offer {props.index}: Added to bag</SwiperSlide>
            <SwiperSlide>Offer {props.index}</SwiperSlide>
            <SwiperSlide>Offer {props.index}: Removed</SwiperSlide>
        </Swiper>
    );
}