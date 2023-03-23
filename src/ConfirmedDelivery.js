

export default function ConfirmedDelivery(props) {

    const confirmed = props.data;
    // const [year, month, day] = confirmed.date.split('-');
  
    // const date = [month, day, year].join('/');
    const name = confirmed["first-name"]+" "+confirmed["last-name"];
    const email = confirmed.email;
    const phone = confirmed.phone;
    const seating= confirmed.seating;
    const time = confirmed.time;
    const guests = confirmed.guests;
    const occasion = confirmed.occasion;

    console.log("CONFIRMEDDELIVERY PROPS: ", props);

    return (
        <>
            <div>ConfirmedDelivery</div>
    
            <section className="confirmed-booking">
                <h1>Congrats!</h1>
                <p>Your order is being prepared, now!</p>
                <section>
                    <p>Name:<span className="confirmed-res-info">{name}</span></p>
                    <p>Phone:<span className="confirmed-res-info">{phone}</span></p>
                    {/* <p>Date:<span className="confirmed-res-info">{date}</span></p> */}
                    <p>Time:<span className="confirmed-res-info">{time}</span></p>
                    <p>Seating:<span className="confirmed-res-info">{seating}</span></p>
                    <p>Number of Guests:<span className="confirmed-res-info">{guests} Guests</span></p>
                    <p>Occasion:<span className="confirmed-res-info">{occasion}</span></p>
                </section>
                <p>We've sent an email to <span className="confirmed-res-info">{email} </span>with your confirmation</p>
                <p>If we are experiencing any difficulties fullfilling your
                    requests, we will email and/or text you a notice 24 hours (or
                    nearest applicable time) before your reservation date-time.
                </p>
            </section>
        </>
    )
}
