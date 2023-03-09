import { fireEvent, render, screen } from '@testing-library/react';
import BookingForm from './components/BookingForm';
import HomePage from './HomePage';
import Menu from './Menu';

const [month, day, year] = (new Date()).toLocaleDateString('en-NY').split('/').map((number)=> number<10? "0"+number:number);
const today = [day,month,year].join("-");

test('Renders the Menu Text', () => {
  render(<Menu />);
  const headingElement = screen.getByText("Check out the Menu. . .");
  expect(headingElement).toBeInTheDocument();
});



test('Renders the Home "Online Menu" Button', () => {
  render(<HomePage />);
  const headingElement = screen.getByText("Little Lemon");
  expect(headingElement).toBeInTheDocument();
});

test('guestsError value true when "guests" input is above 10 or below 2', () => {
  render(<BookingForm />);
  const reserveTime = screen.getByLabelText("Number of Guests");
  fireEvent.change(reserveTime, {target: {value: 1}});
  expect(reserveTime).toBeInTheDocument();
});

test('Renders the BookingForm heading', () => {
  render(<BookingForm />);
  const headingElement = screen.getByText("17:00")
  expect(headingElement).toBeInTheDocument();
});

test('initializeTimes returns non-empty array', () => {
  render(<BookingForm />);
  const reserveTime = screen.getByLabelText("Choose Time");
  fireEvent.change(reserveTime, {target: {value: "19:00"}});
  expect(reserveTime).toBeInTheDocument();
});

test('updateTimes return same value provided in state', () => {
  render(<BookingForm />);
  const reserveDate = screen.getByLabel("Choose date");
  const reserveTime = screen.getByLabel("Choose time");
  fireEvent.change(reserveDate, {target: {value: {today}}});
  fireEvent.change(reserveTime, {target: {value: "19:00"}});
  expect(reserveTime).toBeInTheDocument();
  expect(reserveDate).toBeInTheDocument();
});
