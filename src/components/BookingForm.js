/*
TODO:

1- FIX MOBILE SCREEN LAYOUT FOR NEW ADDITIONS
*/
import {validateEmail, validatePhone} from "../utils";
import React, { useState } from "react";

export default function BookingForm(props) {

    const [month, day, year] = (new Date()).toLocaleDateString('en-NY').split('/').map((number)=> number<10? "0"+number:number);
    const today = [year, month, day].join("-");
    const timeSelection = props.availableTimes();

    const [resTime, setResTime] = useState(props.availableTimes(today)[0]);
    const [resDate, setResDate] = useState(today);
    const [guests, setGuests] = useState("1");
    const [guestsError, setGuestsError] = useState("");
    const [occasion, setOccasion] = useState("");
    const [occasionError, setOccasionError] = useState("");
    const [firstName, setFirstName] = useState("");
    const [firstNameError, setFirstNameError] = useState("");
    const [lastName, setLastName] = useState("");
    const [lastNameError, setLastNameError] = useState("");
    const [email, setEmail] = useState("");
    const [emailError, setEmailError] = useState("");
    const [phone, setPhone] = useState("");
    const [phoneError, setPhoneError] = useState("");
    const [requests, setRequests] = useState("");
    const [requestsError, setRequestsError] = useState("");
    // const [seating, setSeating] = useState("Indoor");
    const [terms, setTerms] = useState(false);

    const clearForm = () => {
        setFirstName("");
        setLastName("");
        setEmail("");
        setPhone("");
        props.setSeating("Indoor")
        setResDate(today);
        setGuests("1");
        setOccasion("Occasion");
        setRequests("");
        setTerms(false)
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        
        /** TODO:
         * 1- CREATE PROGROM THAT WILL RUN ALL CHECKS AND ISSUE ALL ERRORS
         * AT ONCE INSTEAD OF CURRENT METHOD.
        */
        if (occasion === "") {
            setOccasionError("What's the occasion?");
            return;
        } else if (firstName === ""){
            setFirstNameError("All fields are required.");
            console.log("FIRSTNAMEERROR: ", firstNameError)
        } else if (lastName === ""){
            setLastNameError("All fields are required.");
        } else if (email === ""){
            setEmailError("All fields are required.");
        } else if (phone === ""){
            setPhoneError("All fields are required.");
        } else if (terms === false){
            alert("Do you agree to our terms of service?");
        } else {
                setOccasionError("");
                props.submitForm({
                    "first-name":firstName,
                    "last-name":lastName,
                    "email":email,
                    "phone":phone,
                    "seating":props.seating,
                    "date":resDate,
                    "time":resTime,
                    "guests":guests,
                    "occasion":occasion,
                    "requests":requests
                });
                clearForm();
        }
    };

    console.log("(GLOBAL) FIRSTNAMEERROR: ", firstNameError)
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

    const handleSeatingChange = (e) => {
        props.setSeating(e.target.value);
    }

    const handleGuestsChange = (e) => {
        setGuests(e.target.value);
        if (e.target.value < 2) {
            setGuestsError("Reservations have a two-party minimum");
            return;
        } else if (e.target.value >9) {
            setGuestsError("Reservations have a ten-party maximum");
        } else {
            setGuestsError("");
        };
    };

    const handleDateChange= (e) => {
        if (e.target.value<today) { return (
            null
        )} else { return (
        setResDate(e.target.value),
        props.dispatch({type: "select", payload: e.target.value}))}
    };
    const handleTimeChange = (e) => {
        setResTime(e.target.value)
    };

    const handleOccasionChange = (e)=> {
        setOccasion(e.target.value);
        e.target.value===""?setOccasionError("What's the occasion?"):setOccasionError("");
    };

    const handleRequestsChange = (e) => {
        setRequests(e.target.value);
        if (e.target.value.length > 250) {
            setRequestsError("No more than 250 characters, please.");
            return;
        } else {
            setRequestsError("");
        };
    };

    const handleTermsChange = (e) => {
        setTerms(!terms);
        console.log("TERMS VALUE INSIDE HANDLETERMS: ", terms)
    }

    const disabled = !!(guestsError) || !!(occasionError) || !!(requestsError) || !!(phoneError) || !!(emailError) || !!(firstNameError) || !!(lastNameError);

    console.log("SEATING VALUE: ", props.seating);
    return (
            <form
            className="booking-form"
            onSubmit={handleSubmit}
            >
                <h2>Let's Get Your Info, First</h2>

                <label htmlFor="first-name">First Name <sup>*</sup></label>
                <input
                type="text"
                id="first-name"
                name="first-name"
                value={firstName}
                onChange={handleFirstNameChange}
                onBlur={handleFirstNameChange}
                />
                <p className="error-message">{firstNameError}</p>

                <label htmlFor="last-name">Last Name <sup>*</sup></label>
                <input
                type="text"
                id="last-name"
                name="last-name"
                value={lastName}
                onChange={handleLastNameChange}
                onBlur={handleLastNameChange}
                />
                <p className="error-message">{lastNameError}</p>

                <label htmlFor="email">Email <sup>*</sup></label>
                <input
                type="email"
                id="email"
                name="email"
                placeholder="little@lemon.com"
                value={email}
                onChange={handleEmailChange}
                onBlur={handleEmailChange}
                />
                <p className="error-message">{emailError}</p>

                <label htmlFor="phone">Phone Number <sup>*</sup></label>
                <input
                type="tel"
                id="phone"
                name="phone"
                placeholder="(123) 456-7890"
                value={phone}
                onChange={handlePhoneChange}
                onBlur={handlePhoneChange}
                />
                <p className="error-message">{phoneError}</p>

                <h2>Let's Reserve Your Table Today</h2>

                <div className="seating">
                    <label
                    htmlFor="indoor">
                        <input
                        type="radio"
                        id="indoor"
                        checked={props.seating==="Indoor"}
                        name="seating"
                        value="Indoor"
                        onChange={handleSeatingChange}
                        />
                    Indoor Seating
                    </label>

                    <label
                    htmlFor="outdoor">
                        <input
                        type="radio"
                        id="outdoor"
                        checked={props.seating==="Outdoor"}
                        name="seating"
                        value="Outdoor"
                        onChange={handleSeatingChange}
                        />
                    Outdoor Seating
                    </label>
                </div>

                <label htmlFor="res-date">Choose Date <sup>*</sup></label>
                <input
                type="date"
                id="res-date"
                name="res-date"
                value={resDate}
                onChange={handleDateChange}
                onBlur={handleDateChange}
                />

                <label htmlFor="res-time">Choose Time <sup>*</sup></label>
                <select
                id="res-time"
                name="res-time"
                value={resTime}
                onChange={handleTimeChange} >
                    {timeSelection.map((time) => <option key={time}>{time}</option>)}
                </select>

                <label htmlFor="guests">Number of Guests <sup>*</sup></label>
                <input
                type="number"
                min="1" max="9"
                id="guests"
                name="guests"
                value={guests}
                onChange={e => handleGuestsChange(e)}
                />
                <p className="error-message">{guestsError}</p>

                <label htmlFor="occasion">Occasion <sup>*</sup></label>
                <select
                id="occasion"
                name="occasion"
                style={occasion?{color: "#EDEFEE", backgroundColor: "#495E57"}:null}
                value={occasion}
                onChange={handleOccasionChange}
                onFocus={handleOccasionChange}>
                    <option value="" >Occasion</option>
                    <option value="Birthday" >Birthday</option>
                    <option value="Engagement" >Engagement</option>
                    <option value="Anniversary" >Anniversary</option>
                    <option value="Other" >Other. . .</option>
                </select>
                <p className="error-message">{occasionError}</p>

                <label htmlFor="requests">Any Comments or Requests?</label>
                <textarea
                rows={5}
                placeholder="Additional Comments"
                id="requests"
                name="requests"
                value={requests}
                onChange={handleRequestsChange}
                />
                <p className="error-message">{requestsError}</p>

                <div className="terms">
                    <input
                    type="checkbox"
                    id="terms"
                    name="terms"
                    onChange={handleTermsChange}
                    />
                        <label htmlFor="terms">Agree to our <a aria-label="On Click" className="terms-link" href="/terms">Terms of Service</a> <sup>*</sup>
                        </label>
                </div>

                <input
                style={disabled?{border: "1px solid #999999", backgroundColor: "#cccccc", color: "#666666", cursor: "not-allowed"}:null}
                disabled={disabled}
                className="button"
                type="submit"
                value="Make Your Reservation!"
                aria-label="On Click"
                />
            </form>
    );
};