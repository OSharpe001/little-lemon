import HomePage from "./HomePage";
import BookingPage from "./BookingPage";
import AboutUs from "./AboutUs";
import Menu from "./Menu";
import Order from "./Order";
import SignIn from "./SignIn";
import ContactUs from "./ContactUs";
import ConfirmedBooking from "./ConfirmedBooking";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Terms from "./Terms";
import { Routes, Route } from "react-router-dom";
import React, { useReducer, useState } from "react";
import { fetchAPI, submitAPI } from './api.js';
import { useNavigate } from "react-router-dom";

export default function Main() {

    const [month, day, year] = (new Date()).toLocaleDateString('en-NY').split('/').map((number)=> number<10? "0"+number:number);
    const today = [year,month, day].join("-");
    const todaysTimes = fetchAPI(new Date(today));
    const [data, setData] = useState({})
    const initializeTimes= () => todaysTimes;

    const updateTimes = (availableTimes, action) => {
        let newList = "";
        switch (action.type) {
            case ("select"):
                newList = () => fetchAPI(new Date(action.payload));
                return newList;
            default:
                return todaysTimes;
        };
    };

    const [availableTimes, dispatch]= useReducer(updateTimes, initializeTimes);

    const navigate = useNavigate();
    const submitForm = (formData) => {
        const result=submitAPI(formData);
        if (result) {
            setData(formData)
            navigate("/confirmed_booking")
        };
    };

    return (
        <>
            <Header />
            <Routes>
                <Route path="/" element={<HomePage />}/>
                <Route path="/booking" element={<BookingPage
                                                    availableTimes={availableTimes}
                                                    dispatch={dispatch}
                                                    submitForm={submitForm}
                                                    />}/>
                <Route path="/about_us" element={<AboutUs />}/>
                <Route path="/menu" element={<Menu />}/>
                <Route path="/order" element={<Order />}/>
                <Route path="/sign_in" element={<SignIn />}/>
                <Route path="/contact" element={<ContactUs />}/>

                <Route path="/confirmed_booking" element={<ConfirmedBooking data={data}/>}/>
                <Route path="/terms" element={<Terms />}/>
            </Routes>
            <Footer />
        </>
    );
}