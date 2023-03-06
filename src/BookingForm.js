// props.dispatch({action: "select"}
import React, { useState, /*useEffect*/ } from "react";
// import { fetchAPI, submitAPI } from './api.js'

export default function BookingForm(props) {

    // console.log("PROPS.DISPATCH", props.dispatch)
    // console.log("PROPS FROM BOOKING FORM", props)
    console.log("PROPS.availableTimes", props.availableTimes()/*["17:00"]*/)

    const [month, day, year] = (new Date()).toLocaleDateString('en-NY').split('/').map((number)=> number<10? "0"+number:number)
    const today = [year, month, day].join("-");

    const [resDate, setResDate] = useState(today);
    const [resTime, setResTime]= useState(props.availableTimes()[0]);
    const [guests, setGuests] = useState("0");
    const [occasion, setOccasion]= useState("Birthday");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (guests==="0") {
            alert("All fields are necessary. .");
            return;
          } else if (resDate<today) {
            alert("Please choose a viable date. .");
            return;
          };

        alert("form submitted!");
        setResDate({today});
        setResTime(props.availableTimes()[0]);
        setGuests("0");
        setOccasion("Birthday");
    };

    const handleDateChange= (e) => {
        // console.log("PAST DATE?: ", e.target.value<today),
        // console.log("HANDLEDATECHANGE-E.TARGET.VALUE:", e.target.value),
        // console.log("TODAY: ", today),
        if (e.target.value<today) { return (
            setResDate(e.target.value),
            alert("Please pick a future date.")
        )} else { return (
        setResDate(e.target.value),
        props.dispatch({type: "select", payload: e.target.value}))}
    };

    // const date = () => {
    //     (e) => setResDate(e.target.value)
    //     props.dispatch({action: "select"});
    // };

    // console.log("TODAY: ", today)
    // console.log("RESDATE: ", resDate);
    // console.log("SETRESTIME: ", props.availableTimes()[0]);

    return (
            <form
            className="booking-form declare"
            onSubmit={handleSubmit}
            >
                <label htmlFor="res-date">Choose date</label>
                <input
                type="date"
                id="res-date"
                name="res-date"
                value={today/*resDate*/}
                onChange={handleDateChange}
                onBlur={handleDateChange}
                // onFocus = {e => props.dispatch({action: "select", payload: e.target.value})}
                />
                <label htmlFor="res-time">Choose time</label>
                <select
                id="res-time"
                name="res-time"
                // value={props.availableTimes()[0]}
                value={resTime}
                onChange={e => setResTime(e.target.value) }>
                    {props.availableTimes().map((time) => <option key={time}>{time}</option>)}
                </select>
                <label htmlFor="guests">Number of guests</label>
                <input
                type="number"
                placeholder="1"
                min="1" max="10"
                id="guests"
                name="guests"
                value={guests}
                onChange={e => setGuests(e.target.value)}
                />
                <label htmlFor="occasion">Occasion</label>
                <select
                id="occasion"
                name="occasion"
                value={occasion}
                onChange={e => setOccasion(e.target.value)}
                >
                    <option>Birthday</option>
                    <option>Anniversary</option>
                </select>
                <input onClick= {handleSubmit} type="submit" value="Make Your reservation"/>
            </form>
    );
};