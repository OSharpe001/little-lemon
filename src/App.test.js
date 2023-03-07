import { fireEvent, render, screen } from '@testing-library/react';
import BookingForm from './BookingForm';
// import BookingPage from './BookingPage';
import HomePage from './HomePage';
import Menu from './Menu';


const [month, day, year] = (new Date()).toLocaleDateString('en-NY').split('/').map((number)=> number<10? "0"+number:number);
const today = [day,month,year].join("-");

test('Renders the Home Online Menu Button', () => {
  render(<HomePage />);
  const headingElement = screen.getByText("Online Menu");
  expect(headingElement).toBeInTheDocument();
});

test('Renders the Menu heading', () => {
    render(<Menu />);
    const headingElement = screen.getByText("Check out the Menu. . .");
    expect(headingElement).toBeInTheDocument();
});


test('Renders the BookingForm heading', () => {
  render(<BookingForm />);
  const headingElement = screen.getByText("Occasion");
  expect(headingElement).toBeInTheDocument();
});
test('initializeTimes returns non-empty array', () => {
  render(<BookingForm />);
  const reserveDate = screen.getByLabel("Choose date");
  const reserveTime = screen.getByLabel("Choose time");
  fireEvent.change(reserveDate, {target: {value: today}});
  fireEvent.change(reserveTime, {target: {value: "19:00"}});
  expect(reserveTime).toBeInTheDocument();
  expect(reserveDate).toBeInTheDocument();
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
/*
test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
*/