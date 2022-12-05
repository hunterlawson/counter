// import necessary react testing library helpers here
// import the Counter component here

import { render, screen } from "@testing-library/react";
import userEvent from '@testing-library/user-event'
import Counter from '../components/Counter';

beforeEach(() => {
  render(<Counter />);
})

test('renders counter message', () => {
  const counterMessage = screen.getByText(/Counter/i);
  expect(counterMessage).toBeInTheDocument();
});

test('should render initial count with value of 0', () => {
  const counterValue = screen.getByTestId('count');
  expect(counterValue).toHaveTextContent('0');
});

test('clicking + increments the count', () => {
  userEvent.click(screen.getByText('+'));
  const counterValue = screen.getByTestId('count');
  expect(counterValue).toHaveTextContent('1');
});

test('clicking - decrements the count', () => {
  userEvent.click(screen.getByText('-'));
  const counterValue = screen.getByTestId('count');
  expect(counterValue).toHaveTextContent('-1');
});
