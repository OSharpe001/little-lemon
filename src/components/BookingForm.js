import React, { useState, /*useEffect*/ } from "react";

export default function BookingForm(props) {

    const [month, day, year] = (new Date()).toLocaleDateString('en-NY').split('/').map((number)=> number<10? "0"+number:number)
    const today = [year, month, day].join("-");
    const timeSelection = props.availableTimes();
    const [resTime, setResTime] = useState(props.availableTimes(today)[0]);
    const [resDate, setResDate] = useState(today);
    const [guests, setGuests] = useState("2");
    const [occasion, setOccasion]= useState("");
    const [guestsError, setGuestsError]= useState("");
    // const [timeError, setTimeError]= useState("");
    const [dateError, setDateError]= useState("");
    const [occasionError, setOccasionError]= useState("");


    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log("BOOKINGFORM.JS PROPS.SUBMITFORM RESULTS: ", props.submitForm(e.target.value));
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
        // console.log("PAST DATE?: ", e.target.value<today),
        // console.log("HANDLEDATECHANGE-E.TARGET.VALUE:", e.target.value),
        // console.log("TODAY: ", today),
        if (e.target.value<today) { return (
            null
            // props.dispatch(e.target.value),
            // setDateError("Please pick a future date.")
        )} else { return (
        // props.dispatch(e.target.value),
        // setTimeError(""),
        setDateError(""),
        setResDate(e.target.value),
        // console.log("HANDLEDATECHANGE-E.TARGET.VALUE:", e.target.value),
        props.dispatch({type: "select", payload: e.target.value}))}
    };
    const handleTimeChange = (e) => {
        setResTime(e.target.value)
        // TODO: SET A FUNCTION TO CHANGE 
        // THE TIME VALUE ON THE INTERFACE
    };

    const handleOccasionChange = (e)=> {
        setOccasion(e.target.value);
        // console.log("OCCASION (LOCAL): ", occasion)
        // console.log('WHAT "OCCASION" IS SUPPOSED TO BE (LOCAL): ', e.target.value)
        e.target.value===""?setOccasionError("What's the occasion?"):setOccasionError("");
    };

    // const date = () => {
    //     (e) => setResDate(e.target.value)
    //     props.dispatch({action: "select"});
    // };

    // console.log("TODAY: ", today)
    // console.log("RESDATE: ", resDate);
    // console.log("PROPS.DISPATCH", props.dispatch);
    // console.log("PROPS FROM BOOKING FORM", props);
    // console.log("PROPS.availableTimes", props.availableTimes());
    // console.log("PROPS.availableTimes", timeSelection);
    console.log("CURRENT OCCASION (GLOBAL): ", occasion);
    // console.log("CURRENT OCCASION BOOLEAN: ", !occasion);
    // console.log("CURRENT GUESTS AMOUNT: ", guests)


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
                // onFocus = {e => props.dispatch({action: "select", payload: e.target.value})}
                />
                <p className="error-message">{dateError}</p>
                <label htmlFor="res-time">Choose Time</label>
                <select
                id="res-time"
                name="res-time"
                // value={props.availableTimes()[0]}
                value={resTime}
                onChange={handleTimeChange} >
                    {timeSelection.map((time) => <option key={time}>{time}</option>)}
                </select>
                {/* <p className="error-message">{timeError}</p> */}
                <label htmlFor="guests">Number of Guests</label>
                <input
                type="number"
                min="2" max="10"
                id="guests"
                name="guests"
                value={guests}
                onChange={e => handleGuestsChange(e)/*setGuests(e.target.value)*/}
                // onBlur={handleGuestsChange}
                />
                <p className="error-message">{guestsError}</p>
                <select
                id="occasion"
                name="occasion"
                invalid={!occasion? "true": "false"}
                value={occasion}
                onChange={handleOccasionChange}
                onFocus={handleOccasionChange}>
                    <option value="" >Occasion</option>
                    <option style={{color: "blue", backgroundColor: "#495E57"}} value="Birthday" >Birthday</option>
                    <option id={occasion==="Engagement"?"checked":undefined} value="Engagement" >Engagement</option>
                    <option id={occasion==="Anniversary"?"checked":undefined} value="Anniversary" >Anniversary</option>
                    <option id={occasion==="Other"?"checked":undefined} value="Other" >Other. . .</option>
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