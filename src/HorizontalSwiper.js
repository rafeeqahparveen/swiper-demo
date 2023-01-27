import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";

import "./styles.css";
import { EffectCards } from "swiper";

import SwiperCore, { Manipulation } from "swiper";
SwiperCore.use([Manipulation]);

export default function HorizontalSwiper(props) {

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
            onSlideResetTransitionEnd={() => {
                props.slideToRemove(props.swiperRef);
            }}
            data-testid="offer"
        >
            <SwiperSlide>Offer {props.index}: Added to bag</SwiperSlide>
            <SwiperSlide>{props.name}<br></br>{props.description}</SwiperSlide>
            <SwiperSlide>Offer:{props.index}: Removed</SwiperSlide>
        </Swiper>
    );
}