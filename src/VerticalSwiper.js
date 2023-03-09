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
    const [bagCount, setBagCount] = useState(0);
    var num = 1;

    const slideToRemove = (swiper) => {
        if (swiper.touches.currentX < swiper.touches.startX) {
            setBagCount(bagCount + 1);
        }
        swiper.slideNext(5, true);
        swiper.removeSlide(swiper.activeIndex - 1);
    };

    const incrementSlide = () => {
        props.setI(props.i + num);
        props.handleCookies();
    };

    return (
        <>
            <h2>
                {/* <center>Offers In Bag: {bagCount}</center> */}

            </h2>
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
                    var arrayLen = props.data.offers.length;
                    let arrayIndex = props.cookies.Counter
                    arrayIndex++;
                    return (
                        <SwiperSlide key={offer.id}>
                            <HorizontalSwiper
                                currentOffer={typeof props.cookies.Counter === 'undefined' ? offer : props.data.offers[props.cookies.Counter]}
                                nextOffer={
                                    offer.id === arrayLen
                                        ? null
                                        : typeof props.cookies.Counter === 'undefined' ? offer : props.data.offers[arrayIndex]
                                }
                                slideToRemove={slideToRemove}
                                swiperRef={swiperRef}
                                incrementSlide={incrementSlide}
                                setBag={props.setBag}
                            />
                        </SwiperSlide>
                    );
                })}
            </Swiper>
        </>
    );
}
