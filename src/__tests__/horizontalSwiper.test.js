import { render, cleanup} from '@testing-library/react';
import HorizontalSwiper from '../HorizontalSwiper';

afterEach(() => {
  cleanup();
});

test('should render offer', () => {
  const { getByTestId } = render(<HorizontalSwiper index="20" />)
  expect(getByTestId('offer')).toHaveTextContent("Offer 20")
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