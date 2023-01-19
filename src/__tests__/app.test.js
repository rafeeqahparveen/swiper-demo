import {render, screen, cleanup} from '@testing-library/react';
import App from "../App";
import { Swiper } from "swiper/react";

afterEach(() => {
  cleanup();
});

test('should render offer', () => {
  render(<App />);
  const offerId = 2;
  const offerElement = screen.getByTestId(`offer-${offerId}`); 
  expect(offerElement).toBeInTheDocument();
  expect(offerElement).toHaveTextContent(`Offer ${offerId}`)

  // const div = document.createElement("div");
  // ReactDOM.render(<Swiper></Swiper>, div);
}); 

test('should move to next offer', () => {
  render(<App />);
  const swiper = document.querySelector('.swiper-v').swiper;
  const currentIndex = swiper.activeIndex;
  swiper.slideNext();
  expect(swiper.activeIndex).toEqual(currentIndex+1)
});

test('should move to prev offer', () => {
  render(<App />);
  const swiper = document.querySelector('.swiper-v').swiper;
  const currentIndex = swiper.activeIndex;
  swiper.slideNext();
  swiper.slidePrev();
  expect(swiper.activeIndex).toEqual(currentIndex);
});

test('should recognize left swipe', () => {
  render(<App />);
  const swiper = document.querySelector('.swiper-v').querySelector('.swiper-h').swiper;
  const currentIndex = swiper.activeIndex;
  const actualDirection = swiper.slideNext() ? 'left' : 'right';
  const expectedDirection = swiper.activeIndex > currentIndex ? 'left' : 'right';
  expect(expectedDirection).toEqual(actualDirection);
});