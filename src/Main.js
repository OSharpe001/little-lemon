import HomePage from "./HomePage";
import BookingPage from "./BookingPage";
import AboutUs from "./AboutUs";
import Menu from "./Menu";
import Order from "./Order";
import SignIn from "./SignIn";
import ContactUs from "./ContactUs";
import { Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";

export default function Main() {
    return (
        <>
            <Header />
            <Routes>
                <Route path="/" element={<HomePage />}/>
                <Route path="/booking" element={<BookingPage />}/>
                <Route path="/about_us" element={<AboutUs />}/>
                <Route path="/menu" element={<Menu />}/>
                <Route path="/order" element={<Order />}/>
                <Route path="/sign_in" element={<SignIn />}/>
                <Route path="/contact" element={<ContactUs />}/>
            </Routes>
            <Footer />
        </>
    );
}