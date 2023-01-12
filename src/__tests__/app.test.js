import {render, screen, cleanup} from '@testing-library/react';
import App from "../App";

afterEach(() => {
  cleanup();
});

test('should render offer', () => {
  render(<App />);
  const offerId = 2;
  const offerElement = screen.getByTestId(`offer-${offerId}`); 
  expect(offerElement).toBeInTheDocument();
  expect(offerElement).toHaveTextContent(`Offer ${offerId}`)
}); 