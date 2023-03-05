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
import React, { useReducer/*, useEffect*/ } from "react";
import { fetchAPI, submitAPI } from './api.js'


export default function Main() {

    const initialTimes = [
        {time:"17:00", available:true},
        {time:"18:00", available:true},
        {time:"19:00", available:true},
        {time:"20:00", available:true},
        {time:"21:00", available:true},
        {time:"22:00", available:true}
    ];

    const initializeTimes= () => initialTimes;

    const updateTimes = (availableTimes, action) => {
        console.log("updateTimes action:", action.type)
        if (action.type === "select") {
            console.log("STATE AND ACTION OF UPDATE TIMES", availableTimes, action);
            console.log("E.TARGET.VALUE FROM MAIN PAGE", availableTimes.choice);
            const newList=[...availableTimes, {available:!availableTimes.available}]
            return newList/*{available : !state.available}*/;
        }
    };

    const [availableTimes, dispatch]= useReducer(updateTimes, initializeTimes);

    return (
        <>
            <Header />
            <Routes>
                <Route path="/" element={<HomePage />}/>
                <Route path="/booking" element={<BookingPage 
                                                    availableTimes={availableTimes} 
                                                    dispatch={dispatch}
                                                    />}/>
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