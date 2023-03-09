import React, { useState } from "react";

export default function BookingForm(props) {

    const [month, day, year] = (new Date()).toLocaleDateString('en-NY').split('/').map((number)=> number<10? "0"+number:number)
    const today = [year, month, day].join("-");
    const timeSelection = props.availableTimes();
    const [resTime, setResTime] = useState(props.availableTimes(today)[0]);
    const [resDate, setResDate] = useState(today);
    const [guests, setGuests] = useState("2");
    const [occasion, setOccasion]= useState("");
    const [guestsError, setGuestsError]= useState("");
    const [dateError, setDateError]= useState("");
    const [occasionError, setOccasionError]= useState("");


    const handleSubmit = (e) => {
        e.preventDefault();
        switch (occasion) {
            case (""):
                setOccasionError("What's the occasion?");
                return;
            default:
                setOccasionError("");
                props.submitForm({
                    "date":resDate,
                    "time":resTime,
                    "guests":guests,
                    "occasion":occasion
                });
                setResDate(today);
                setGuests("2");
                setOccasion("Occasion");
        }
    };

    const handleGuestsChange = (e) => {
        setGuests(e.target.value);
        if (e.target.value < 2) {
            setGuestsError("Reservations have a two-party minimum");
            return;
        } else if (e.target.value >10) {
            setGuestsError("Reservations have a ten-party maximum");
        } else {
            setGuestsError("");
        };
    }

    const handleDateChange= (e) => {
        if (e.target.value<today) { return (
            null
        )} else { return (
        setDateError(""),
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
    
    return (
            <form
            className="booking-form"
            onSubmit={handleSubmit}
            >
                <p>Reserve Your Table Today</p>
                <label htmlFor="res-date">Choose Date</label>
                <input
                type="date"
                id="res-date"
                name="res-date"
                value={resDate}
                onChange={handleDateChange}
                onBlur={handleDateChange}
                />
                <p className="error-message">{dateError}</p>
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
                min="2" max="10"
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
                <input
                disabled={guestsError || occasionError}
                className="button"
                type="submit"
                value="Make Your Reservation!"
                aria-label="On Click"
                />
            </form>
    );
};