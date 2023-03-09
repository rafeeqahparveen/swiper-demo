import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";

import "./styles.css";
import { EffectCards } from "swiper";

import SwiperCore, { Manipulation } from "swiper";
SwiperCore.use([Manipulation]);

export default function HorizontalSwiper(props) {
    const [action, setAction] = useState("");

    return (
        <>
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
                onReachEnd={() => {
                    if (props.nextOffer !== null) {
                        setAction(props.currentOffer.name)
                        localStorage.setItem("action", "remove")
                        props.slideToRemove(props.swiperRef);
                        props.incrementSlide();
                    }

                }}
                onReachBeginning={() => {
                    props.setBag((value) => [...value, "\n" + props.currentOffer.name + props.currentOffer.description + props.currentOffer.redemption + "\n-------------------------------------------------------------------------\n"]);

                    if (props.nextOffer !== null) {
                        setAction(props.currentOffer.name)
                        localStorage.setItem("action", "add")
                        props.slideToRemove(props.swiperRef);
                        props.incrementSlide();
                    }

                }}
                data-testid="offer"
            >
                <SwiperSlide data-testid="add">
                    {props.nextOffer !== null ? props.nextOffer.name : "Added"}
                    <br></br>
                    {props.nextOffer !== null ? props.nextOffer.description : ""}
                </SwiperSlide>
                <SwiperSlide>
                    {props.currentOffer.name}
                    <br></br><br></br>
                    {props.currentOffer.description}
                </SwiperSlide>
                <SwiperSlide data-testid="remove">
                    {props.nextOffer !== null ? props.nextOffer.name : "Removed"}
                    <br></br>
                    {props.nextOffer !== null ? props.nextOffer.description : ""}
                </SwiperSlide>
            </Swiper>
        </>
    );
}
