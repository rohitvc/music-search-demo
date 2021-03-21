import { render, screen } from '@testing-library/react';
import App from '../App';

test('renders app including header', () => {
  render(<App />);
  const linkElement = screen.getByText(/Search Options/i);
  expect(linkElement).toBeInTheDocument();
});
