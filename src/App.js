// Import Swiper React components
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-cards";

import "./styles.css";
import { EffectCards } from "swiper";

import SwiperCore, { Manipulation } from "swiper";
SwiperCore.use([Manipulation]);

export default function App() {
  const [swiperRef, setSwiperRef] = useState(null);

  const remove = () => {
    console.log(swiperRef.activeIndex)
    swiperRef.removeSlide(swiperRef.activeIndex);
  };
  return (
    <>

      <Swiper
        className="mySwiper swiper-v main-container"
        effect={"cards"}
        grabCursor={true}
        modules={[EffectCards]}
        spaceBetween={50}
        pagination={{
          clickable: true
        }}
        direction={"vertical"}
      >
        <SwiperSlide>
          <Swiper
            className="mySwiper2 swiper-h"
            onSwiper={(swiper) => setSwiperRef(swiper)}
            direction={"horizontal"}
            effect={"cards"}
            grabCursor={true}
            modules={[EffectCards]}
            spaceBetween={50}
            pagination={{
              clickable: true
            }}
            freeMode={true}
            initialSlide={1}
            onSlideChange={() => {
              //remove();
            }}
          >
            <SwiperSlide>Offer 1: Added to bag</SwiperSlide>
            <SwiperSlide> Offer 1</SwiperSlide>
            <SwiperSlide>Offer 1: Removed</SwiperSlide>
          </Swiper>
        </SwiperSlide>

        <SwiperSlide>
          <Swiper
            className="mySwiper2 swiper-h"
            direction={"horizontal"}
            effect={"cards"}
            grabCursor={true}
            modules={[EffectCards]}
            spaceBetween={50}
            pagination={{
              clickable: true
            }}
            freeMode={true}
            initialSlide={1}
          >
            <SwiperSlide>Offer 2: Added to bag</SwiperSlide>
            <SwiperSlide>Offer 2</SwiperSlide>
            <SwiperSlide>Offer 2: Removed</SwiperSlide>
          </Swiper>
        </SwiperSlide>

        <SwiperSlide>
          <Swiper
            className="mySwiper2 swiper-h"
            direction={"horizontal"}
            effect={"cards"}
            grabCursor={true}
            modules={[EffectCards]}
            spaceBetween={50}
            pagination={{
              clickable: true
            }}
            freeMode={true}
            initialSlide={1}
          >
            <SwiperSlide>Offer 3: Added to bag</SwiperSlide>
            <SwiperSlide>Offer 3</SwiperSlide>
            <SwiperSlide>Offer 3: Removed</SwiperSlide>
          </Swiper>
        </SwiperSlide>

        <SwiperSlide>
          <Swiper
            className="mySwiper2 swiper-h"
            direction={"horizontal"}
            effect={"cards"}
            grabCursor={true}
            modules={[EffectCards]}
            spaceBetween={50}
            pagination={{
              clickable: true
            }}
            freeMode={true}
            initialSlide={1}
          >
            <SwiperSlide>Offer 4: Added to bag</SwiperSlide>
            <SwiperSlide>Offer 4</SwiperSlide>
            <SwiperSlide>Offer 4: Removed</SwiperSlide>
          </Swiper>
        </SwiperSlide>

        <SwiperSlide>
          <Swiper
            className="mySwiper2 swiper-h"
            direction={"horizontal"}
            effect={"cards"}
            grabCursor={true}
            modules={[EffectCards]}
            spaceBetween={50}
            pagination={{
              clickable: true
            }}
            freeMode={true}
            initialSlide={1}
          >
            <SwiperSlide>Offer 5: Added to bag</SwiperSlide>
            <SwiperSlide>Offer 5</SwiperSlide>
            <SwiperSlide>Offer 5: Removed</SwiperSlide>
          </Swiper>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
