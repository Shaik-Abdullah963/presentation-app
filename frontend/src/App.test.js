import { render, screen } from '@testing-library/react';
import App from './App';

test('renders presentation app header', () => {
  render(<App />);
  const headerElement = screen.getByText(/Presentation App/i);
  expect(headerElement).toBeInTheDocument();
});

test('renders home page by default', () => {
  render(<App />);
  const homeElement = screen.getByText(/Home - Presentation List/i);
  expect(homeElement).toBeInTheDocument();
});
