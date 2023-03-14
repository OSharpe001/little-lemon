import HomePage from "./HomePage";
import BookingPage from "./BookingPage";
import AboutUs from "./AboutUs";
import Menu from "./Menu";
import Order from "./Order";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import ConfirmedBooking from "./ConfirmedBooking";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Terms from "./Terms";
import { Routes, Route } from "react-router-dom";
import React, { useReducer, useState } from "react";
import { fetchAPI, submitAPI } from './api.js';
import { useNavigate } from "react-router-dom";
import {validateEmail, validatePhone} from "./utils";

export default function Main() {

    const [firstName, setFirstName] = useState("");
    const [firstNameError, setFirstNameError] = useState("");
    const [lastName, setLastName] = useState("");
    const [lastNameError, setLastNameError] = useState("");
    const [email, setEmail] = useState("");
    const [emailError, setEmailError] = useState("");
    const [phone, setPhone] = useState("");
    const [phoneError, setPhoneError] = useState("");

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

    const handleFirstNameChange = (e) => {
        setFirstName(e.target.value);
        if (e.target.value.length < 2) {
            setFirstNameError("First name must have at least 2 characters.");
            return;
        } else if (e.target.value.length >15) {
            setFirstNameError("Please limit the first name to 15 characters long.");
        } else {
            setFirstNameError("");
        };
    };

    const handleLastNameChange = (e) => {
        setLastName(e.target.value);
        if (e.target.value.length < 2) {
            setLastNameError("Last name must have at least 2 characters.");
            return;
        } else if (e.target.value.length >15) {
            setLastNameError("Please limit the last name to 15 characters long.");
        } else {
            setLastNameError("");
        };
    };

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
        if (!validateEmail(e.target.value)) {
            setEmailError("Please submit a valid email address.");
            return;
        } else {
            setEmailError("");
        };
    };

    const handlePhoneChange = (e) => {
        setPhone(e.target.value);
        if (!validatePhone(e.target.value)) {
            setPhoneError("Please submit a valid phone number.");
            return;
        } else {
            setPhoneError("");
        };
    };

    const CustomerInfoProps = {
        firstName:firstName,
        handleFirstNameChange:handleFirstNameChange,
        firstNameError:firstNameError,
        lastName:lastName,
        handleLastNameChange:handleLastNameChange,
        lastNameError:lastNameError,
        email:email,
        handleEmailChange:handleEmailChange,
        emailError:emailError,
        phone:phone,
        handlePhoneChange:handlePhoneChange,
        phoneError:phoneError,
    }

    return (
        <>
            <Header />
            <Routes>
                <Route path="/" element={<HomePage />}/>
                <Route path="/booking" element={<BookingPage
                                                    info={CustomerInfoProps}
                                                    availableTimes={availableTimes}
                                                    dispatch={dispatch}
                                                    submitForm={submitForm}
                                                    />}/>
                <Route path="/about_us" element={<AboutUs />}/>
                <Route path="/menu" element={<Menu />}/>
                <Route path="/order" element={<Order />}/>
                <Route path="/sign_in" element={<SignIn />}/>

                <Route path="/confirmed_booking" element={<ConfirmedBooking data={data}/>}/>
                <Route path="/terms" element={<Terms />}/>
                <Route path="/sign_up" element={<SignUp info={CustomerInfoProps}/>}/>

            </Routes>
            <Footer />
        </>
    );
}