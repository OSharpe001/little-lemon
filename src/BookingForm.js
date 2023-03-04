//{props.availableTimes.filter((info)=> info.available===true).map((info) => <option onClick={(e) => props.dispatch({type: "select", choice: e.target.value})} key={info.time}>{info.time}</option>)}
import React, { useState, /*useEffect*/ } from "react";

export default function BookingForm(props) {

    //console.log("PROPS.DISPATCH", props.dispatch)
    //console.log("PROPS FROM BOOKING FORM", props)
    //console.log("PROPS.availableTimes", props.availableTimes()/*["17:00"]*/)
    
    const [resDate, setResDate] = useState("");
    const [resTime, setResTime]= useState("17:00");
    const [guests, setGuests] = useState("0");
    const [occasion, setOccasion]= useState("Birthday");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (resDate==="" || guests==="0") {
            alert("All fields are necessary. .");
            return;
          }

        alert("form submitted!");
        setResDate("");
        setResTime(props.availableTimes()[0].time);
        setGuests("0");
        setOccasion("Birthday");
    };

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
                value={resDate} 
                onChange={e => setResDate(e.target.value)}
                />
                <label htmlFor="res-time">Choose time</label>
                <select 
                id="res-time"
                name="res-time"
                value={resTime} 
                onChange={e => setResTime(e.target.value)}
                >
                    {props.availableTimes().filter((info)=> info.available===true).map((info) => <option onClick={(e) => props.dispatch({type: "select", choice: e.target.value})} key={info.time}>{info.time}</option>)}
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
                <input type="submit" value="Make Your reservation"/>
            </form>
    );
};