import React, { useState } from "react";

export default function BookingForm() {

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

        console.log("form submitted!");
        setResDate("");
        setResTime("17:00");
        setGuests("0");
        setOccasion("Birthday");
    }


    return (
            <form 
            className="booking-form declare" onSubmit={handleSubmit}>
                <label htmlFor="res-date">Choose date</label>
                <input 
                type="date" 
                id="res-date" 
                value={resDate} 
                onChange={e => setResDate(e.target.value)}
                />
                <label htmlFor="res-time">Choose time</label>
                <select 
                id="res-time "
                value={resTime} 
                onChange={e => setResTime(e.target.value)}
                >
                    <option>17:00</option>
                    <option>18:00</option>
                    <option>19:00</option>
                    <option>20:00</option>
                    <option>21:00</option>
                    <option>22:00</option>
                </select>
                <label htmlFor="guests">Number of guests</label>
                <input 
                type="number" 
                placeholder="1" 
                min="1" max="10" 
                id="guests"
                value={guests} 
                onChange={e => setGuests(e.target.value)}
                />
                <label htmlFor="occasion">Occasion</label>
                <select 
                id="occasion" 
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