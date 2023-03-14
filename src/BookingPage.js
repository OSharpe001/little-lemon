import React, { useState } from "react";
import BookingForm from "./components/BookingForm";

export default function BookingPage(props) {

    const [seating, setSeating] = useState("Indoor");

    return (
            <section
            className={seating==="Indoor"?"booking-page indoor":"booking-page outdoor"}>
                <BookingForm
                    availableTimes={props.availableTimes}
                    dispatch={props.dispatch}
                    submitForm={props.submitForm}
                    seating={seating}
                    setSeating={setSeating}
                />
            </section>
    );
};