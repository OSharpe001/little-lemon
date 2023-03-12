/*
TODO:

1- VALIDATION/CONTROL MEASURES NEED TO BE IMPLEMENTED FOR
    NEW INPUTS.
*/
import {validateEmail} from "../utils";
import React, { useState } from "react";

export default function BookingForm(props) {

    const [month, day, year] = (new Date()).toLocaleDateString('en-NY').split('/').map((number)=> number<10? "0"+number:number)
    const today = [year, month, day].join("-");
    const timeSelection = props.availableTimes();
    const [resTime, setResTime] = useState(props.availableTimes(today)[0]);
    const [resDate, setResDate] = useState(today);
    const [guests, setGuests] = useState("1");
    const [occasion, setOccasion] = useState("");
    const [guestsError, setGuestsError] = useState("");
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
    const [seating, setSeating] = useState("indoor")
    // SET UP A VALID OR INVALID VARIABLE TO CONTROL THE SUBMISSION BUTTON




    const clearForm = () => {
        setFirstName("");
        setLastName("");
        setEmail("");
        setPhone("");
        setSeating("indoor")
        setResDate(today);
        setGuests("2");
        setOccasion("Occasion");
        setRequests("");
    };

    
    const handleSubmit = (e) => {
        console.log("EVENT: ", e.target.value);
        // handleFirstNameChange(e)
        e.preventDefault();
        if (occasion === "") {
            setOccasionError("What's the occasion?");
            return;
        } else if (firstName === ""){
            setFirstNameError("All fields are required.");
        } else if (lastName === ""){
            setLastNameError("All fields are required.");
        } else if (email === ""){
            setEmailError("All fields are required.");
        } else if (phone === ""){
            setPhoneError("All fields are required.");
        } else {
                setOccasionError("");
                props.submitForm({
                    "first-name":firstName,
                    "last-name":lastName,
                    "email":email,
                    "phone":phone,
                    "seating":seating,
                    "date":resDate,
                    "time":resTime,
                    "guests":guests,
                    "occasion":occasion,
                    "requests":requests
                });
                clearForm();
        }
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
        console.log("HANDLEEMAILCHANGE'S CHECK ON EMAIL'S VALUE", e.target.value)
        if (!validateEmail(e.target.value)) {
            setEmailError("Please submit a valid email address.");
            return;
        } else {
            setEmailError("");
        };
    };

    const handlePhoneChange = (e) => {
        setPhone(e.target.value);
        if (e.target.value.length < 2/* NEED TO FIX THIS TO CHECK FOR PHONE NUMBER FORMAT */) {
            setPhoneError("Please submit a valid phone number.");
            return;
        } else {
            setPhoneError("");
        };
    };

    const handleSeatingChange = (e) => {
        setSeating(e.target.value);
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
    
    const disabled = !!(guestsError) || !!(occasionError) || !!(requestsError) || !!(phoneError) || !!(emailError) || !!(firstNameError) || !!(lastNameError);
    // const isFormValid = () => {
    //     return (firstName && lastName && validateEmail(email))
    // };

    console.log("DISABLED'S VALUE: ", disabled)
    console.log("VALIDATE EMAIL RESULTS: ", validateEmail(email))
    // console.log("SEATING VALUE: ", seating);
    // console.log("INVALID FORM RESULT: ", invalidForm)
    // console.log("EMAIL: ", email)

    return (
            <form
            className="booking-form"
            onSubmit={handleSubmit}
            >
                <h2>Let's Get Your Info, First</h2>

                <label htmlFor="first-name">First Name</label>
                <input
                type="text"
                id="first-name"
                name="first-name"
                value={firstName}
                onChange={handleFirstNameChange}
                onBlur={handleFirstNameChange}
                />
                <p className="error-message">{firstNameError}</p>

                <label htmlFor="last-name">Last Name</label>
                <input
                type="text"
                id="last-name"
                name="last-name"
                value={lastName}
                onChange={handleLastNameChange}
                onBlur={handleLastNameChange}
                />
                <p className="error-message">{lastNameError}</p>
                




                {/*  */}
                <label htmlFor="email">Email</label>
                <input
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={handleEmailChange}
                onBlur={handleEmailChange}
                />
                <p className="error-message">{emailError}</p>
                
                <label htmlFor="phone">Phone Number</label>
                <input
                type="tel"
                id="phone"
                name="phone"
                value={phone}
                onChange={handlePhoneChange}
                onBlur={handlePhoneChange}
                />
                <p className="error-message">{phoneError}</p>
                {/*  */}


                <h2>Let's Reserve Your Table Today</h2>


                {/*  */}
                <div className="seating">
                    <label
                    htmlFor="indoor">
                        <input
                        type="radio"
                        id="indoor"
                        checked={seating==="indoor"}
                        name="seating"
                        value="indoor"
                        onChange={handleSeatingChange}
                        />
                    Indoor Seating
                    </label>

                    <label
                    htmlFor="outdoor">
                        <input
                        type="radio"
                        id="outdoor"
                        checked={seating==="outdoor"}
                        name="seating"
                        value="outdoor"
                        onChange={handleSeatingChange}
                        />
                    Outdoor Seating
                    </label>
                </div>
                {/*  */}



                <label htmlFor="res-date">Choose Date</label>
                <input
                type="date"
                id="res-date"
                name="res-date"
                value={resDate}
                onChange={handleDateChange}
                onBlur={handleDateChange}
                />

                <label htmlFor="res-time">Choose Time</label>
                <select
                id="res-time"
                name="res-time"
                value={resTime}
                onChange={handleTimeChange} >
                    {timeSelection.map((time) => <option key={time}>{time}</option>)}
                </select>

                <label htmlFor="guests">Number of Guests</label>
                <input
                type="number"
                min="1" max="9"
                id="guests"
                name="guests"
                value={guests}
                onChange={e => handleGuestsChange(e)}
                />
                <p className="error-message">{guestsError}</p>

                <label htmlFor="occasion">Occasion</label>
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





                {/* CREATE THE SECTION FOR "COMMENTS/REQUESTS" */}
                <label htmlFor="requests">Any Comments or Requests?</label>
                <input
                type="textarea"
                id="requests"
                name="requests"
                value={requests}
                onChange={handleRequestsChange}
                />
                <p className="error-message">{requestsError}</p>

                {/* ADD AN AGREEMENT CHECKBOX AND A LINK TO "TERMS OF SERVICE" */}
                {/*  */}






                <input
                disabled={disabled}
                className="button"
                type="submit"
                value="Make Your Reservation!"
                aria-label="On Click"
                />
            </form>
    );
};