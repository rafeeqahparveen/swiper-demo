import { render, screen, cleanup } from "@testing-library/react";
import VerticalSwiper from "../VerticalSwiper";
import data from '../offers.json';

afterEach(() => {
    cleanup();
});

test("should move to next offer", () => {
    render(<VerticalSwiper data={data} />);
    const swiper = document.querySelector(".swiper-v").swiper;
    const currentIndex = swiper.activeIndex;

    swiper.slideNext();

    expect(swiper.activeIndex).toEqual(currentIndex + 1);
});

test("should move to prev offer", () => {
    render(<VerticalSwiper data={data} />);
    const swiper = document.querySelector(".swiper-v").swiper;
    const currentIndex = swiper.activeIndex;

    swiper.slideNext();
    swiper.slidePrev();
    
    expect(swiper.activeIndex).toEqual(currentIndex);
});
