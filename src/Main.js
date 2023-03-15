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
import {
    validateEmail,
    validatePhone,
    validateAddress,
    validateCity,
    validateZipCode,
    validateCardNumber,
    validateCardExpiration,
    validateCardCVV,
    } from "./utils";

export default function Main() {

    const [firstName, setFirstName] = useState("");
    const [firstNameError, setFirstNameError] = useState("");
    const [lastName, setLastName] = useState("");
    const [lastNameError, setLastNameError] = useState("");
    const [email, setEmail] = useState("");
    const [emailError, setEmailError] = useState("");
    const [phone, setPhone] = useState("");
    const [phoneError, setPhoneError] = useState("");

    const [address, setAddress] = useState("");
    const [addressError, setAddressError] = useState("");
    const [city, setCity] = useState("");
    const [cityError, setCityError] = useState("");
    const [state, setState] = useState("");
    const [zipCode, setZipCode] = useState("");
    const [zipCodeError, setZipCodeError] = useState("");

    const [cardNumber, setCardNumber] = useState("");
    const [cardNumberError, setCardNumberError] = useState("");
    const [cardExpiration, setCardExpiration] = useState("");
    const [cardExpirationError, setCardExpirationError] = useState("");
    const [cardCVV, setCardCVV] = useState("");
    const [cardCVVError, setCardCVVError] = useState("");

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
    };

    const handleCardNumberChange = (e) => {
        setCardNumber(e.target.value);
        if (!validateCardNumber(e.target.value)) {
            setCardNumberError("Please submit a valid credit/debit card number.");
            return;
        } else {
            setCardNumberError("");
        };
    };

    const handleCardExpirationChange = (e) => {
        setCardExpiration(e.target.value);
        if (!validateCardExpiration(e.target.value)) {
            setCardExpirationError("Are you sure that this is the expiration date?");
            return;
        } else {
            setCardExpirationError("");
        };
    };

    const handleCardCVVChange = (e) => {
        setCardCVV(e.target.value);
        if (!validateCardCVV(e.target.value)) {
            setCardCVVError("Are you sure that this is the CVV number?");
            return;
        } else {
            setCardCVVError("");
        };
    };

    const CustomerPaymentProps = {
        cardNumber: cardNumber,
        handleCardNumberChange:handleCardNumberChange,
        cardNumberError:cardNumberError,
        cardExpiration:cardExpiration,
        handleCardExpirationChange:handleCardExpirationChange,
        cardExpirationError:cardExpirationError,
        cardCVV:cardCVV,
        handleCardCVVChange:handleCardCVVChange,
        cardCVVError:cardCVVError,
    };

    const handleAddressChange = (e) => {
        setAddress(e.target.value);
        if (!validateAddress(e.target.value)) {
            setAddressError("Please submit a valid address.");
            return;
        } else {
            setAddressError("");
        };
    };

    const handleCityChange = (e) => {
        setCity(e.target.value);
        if (!validateCity(e.target.value)) {
            setCityError("Please submit a valid City.");
            return;
        } else {
            setCityError("");
        };
    };

    const handleStateChange = (e) => {
        setState(e.target.value);
    };

    const handleZipCodeChange = (e) => {
        setZipCode(e.target.value);
        if (!validateZipCode(e.target.value)) {
            setZipCodeError("Please submit a valid Zip Code.");
            return;
        } else {
            setZipCodeError("");
        };
    };

    const CustomerDeliveryProps = {
        address:address,
        handleAddressChange:handleAddressChange,
        addressError:addressError,
        city:city,
        handlCityChange:handleCityChange,
        cityError:cityError,
        state:state,
        handleStateChange:handleStateChange,
        zipCode:zipCode,
        handleZipCodeChange:handleZipCodeChange,
        zipCodeError:zipCodeError,
    };

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
                <Route path="/sign_up" element={<SignUp info={CustomerInfoProps}
                                                        payment={CustomerPaymentProps}
                                                        delivery={CustomerDeliveryProps}
                                                        />}/>

            </Routes>
            <Footer />
        </>
    );
}