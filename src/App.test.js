import { fireEvent, render, screen } from '@testing-library/react';
//import App from './App';
////
import BookingForm from './BookingForm';

test('Renders the BookingForm heading', () => {
    render(<BookingForm />);
    const headingElement = screen.getByText("Home");
    expect(headingElement).toBeInTheDocument();
});
test('initializeTimes returns expected value', () => {
  render(<BookingForm />);
  const reserveTime = screen.getByLabel("Choose time");
  fireEvent.change(reserveTime, {target: {value: "19:00"}})
  expect(reserveTime).toBeInTheDocument();
});

test('updateTimes return same value provided in state', () => {
  render(<BookingForm />);
  const reserveTime = screen.getByText("Choose time");
  fireEvent.click(reserveTime, {target: {value: "19:00"}})
  expect(reserveTime).toBeInTheDocument();
});
/*
test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
*/