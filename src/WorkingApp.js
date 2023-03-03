import HomePage from "./HomePage";
import BookingPage from "./BookingPage";
import AboutUs from "./AboutUs";
import Menu from "./Menu";
import Order from "./Order";
import SignIn from "./SignIn";
import './App.css';
import { Routes, Route, Link } from "react-router-dom";


export default function App() {
  return (
      <div className="container">
        <nav className="nav-bar">
          <Link to="/" className="nav-item">Home</Link>
          <Link to="/booking" className="nav-item">Reservations</Link>
          <Link to="/about_us" className="nav-item">About Us</Link>
          <Link to="/menu" className="nav-item">Menu</Link>
          <Link to="/order" className="nav-item">Order Online</Link>
          <Link to="/sign_in" className="nav-item">Login</Link>
        </nav>
        <Routes>
            <Route path="/" element={<HomePage />}/>
            <Route path="/booking" element={<BookingPage />}/>
            <Route path="/about_us" element={<AboutUs />}/>
            <Route path="/menu" element={<Menu />}/>
            <Route path="/order" element={<Order />}/>
            <Route path="/sign_in" element={<SignIn />}/>
        </Routes>
      </div>
  );
};

