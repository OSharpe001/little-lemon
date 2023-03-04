import BookingForm from "./BookingForm";

export default function BookingPage(props) {
    return (
        <section className="booking-page testimonials">
            <h1>This is the Reservations Page!</h1>
            <BookingForm 
                availableTimes={props.availableTimes} 
                dispatch={props.dispatch}
            />
        </section>
    );
};