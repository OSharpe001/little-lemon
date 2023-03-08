

export default function ConfirmedBooking(props) {

  const confirmed = props.data;
  const [year, month, day] = confirmed.date.split('-');
  const date = [month, day, year].join('/');
  const time = confirmed.time;
  const guests = confirmed.guests;
  const occasion = confirmed.occasion;
  // console.log("CONFIRMEDBOOKING PROPS: ", props.data);
  // console.log("CONFIRMEDBOOKING DATE", date)

  return (
    <>
      <section className="confirmed-booking">
          <h1>Congrats!</h1>
          <p>Your reservation has been secured!</p>
          <section>
            <p>Date:<span className="confirmed-res-info">{date}</span></p>
            <p>Time:<span className="confirmed-res-info">{time}</span></p>
            <p>Number of Guests:<span className="confirmed-res-info">{guests}</span></p>
            <p>Occasion:<span className="confirmed-res-info">{occasion}</span></p>
          </section>
          {/* TODO: PLACE A COMPENENT TO DISPLAY THE 
          DATE/TIME/NUMBER OF GUESTS/OCCASION */}
      </section>
    </>
  );
};
