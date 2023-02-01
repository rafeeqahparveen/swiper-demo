import { render, cleanup, screen } from '@testing-library/react';
import HorizontalSwiper from '../HorizontalSwiper';
import data from '../offers.json';
afterEach(() => {
  cleanup();
});

test('should render offer', () => {
  const { getByTestId } = render(<HorizontalSwiper currentOffer={data.offers[1]} nextOffer={data.offers[2]} />)

  expect(getByTestId('offer')).toHaveTextContent("Offer 2")
});

test('should recognize left swipe', () => {
  render(<HorizontalSwiper currentOffer={data.offers[1]} nextOffer={data.offers[2]} />);
  const swiper = document.querySelector('.swiper-h').swiper;
  const currentIndex = swiper.activeIndex;

  const expectedDirection = swiper.slideNext() ? 'left' : 'right';
  const actualDirection = swiper.activeIndex > currentIndex ? 'left' : 'right';

  expect(expectedDirection).toEqual(actualDirection);
});

test('should recognize right swipe', () => {
  render(<HorizontalSwiper currentOffer={data.offers[1]} nextOffer={data.offers[2]} />);
  const swiper = document.querySelector('.swiper-h').swiper;
  const currentIndex = swiper.activeIndex;

  const actualDirection = swiper.slidePrev() ? 'right' : 'left';
  const expectedDirection = swiper.activeIndex > currentIndex ? 'left' : 'right';

  expect(expectedDirection).toEqual(actualDirection);
});

test('should remove offer when swiped to left', () => {
  render(<HorizontalSwiper currentOffer={data.offers[1]} nextOffer={data.offers[2]} />);
  const swiper = document.querySelector('.swiper-h').swiper;

  swiper.slideNext()
  const activeSlide = swiper.activeIndex == 2 ? 'add' : 'remove'
  const textContent = screen.getByTestId(activeSlide).textContent;

  expect(textContent).toContain("Offer 3")
});

test('should add offer when swiped to right', () => {
  render(<HorizontalSwiper currentOffer={data.offers[1]} nextOffer={data.offers[2]} />);
  const swiper = document.querySelector('.swiper-h').swiper;

  swiper.slidePrev()
  const activeSlide = swiper.activeIndex == 0 ? 'remove' : 'add'
  const textContent = screen.getByTestId(activeSlide).textContent;

  expect(textContent).toContain("Offer 3")
});