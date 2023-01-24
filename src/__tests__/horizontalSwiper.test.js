import { render, screen, cleanup } from '@testing-library/react';
import HorizontalSwiper from '../HorizontalSwiper';

afterEach(() => {
    cleanup();
});

test('should render offer', () => {
    render(<HorizontalSwiper />);
    const offerId = 1;
    const offerElement = screen.getByTestId(`offer-${offerId}`);
    expect(offerElement).toBeInTheDocument();
    // expect(offerElement).toHaveTextContent(`Offer ${offerId}`)
});

test('should recognize left swipe', () => {
    render(<HorizontalSwiper />);
    const swiper = document.querySelector('.swiper-h').swiper;
    const currentIndex = swiper.activeIndex;
    const actualDirection = swiper.slideNext() ? 'left' : 'right';
    const expectedDirection = swiper.activeIndex > currentIndex ? 'left' : 'right';
    expect(expectedDirection).toEqual(actualDirection);
});

test('should recognize right swipe', () => {
    render(<HorizontalSwiper />);
    const swiper = document.querySelector('.swiper-h').swiper;
    const currentIndex = swiper.activeIndex;
    const actualDirection = swiper.slidePrev() ? 'right' : 'left';
    const expectedDirection = swiper.activeIndex > currentIndex ? 'left' : 'right';
    expect(expectedDirection).toEqual(actualDirection);
});