import BookingForm from "./BookingForm";

export default function BookingPage(props) {
    return (
            <section className="booking-page">
                <BookingForm 
                    availableTimes={props.availableTimes} 
                    dispatch={props.dispatch}
                    submitForm={props.submitForm}
                />
            </section>
    );
};