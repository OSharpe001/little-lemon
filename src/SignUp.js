import CustomerInfoForm from "./components/CustomerInfoForm";
import CustomerPaymentForm from "./components/CustomerPaymentForm";
import CustomerDeliveryForm from "./components/CustomerDeliveryForm";
import { useState } from "react";

export default function SignUp(props) {

    const [sameAsBilling, setSameAsBilling] = useState(false);
    const [userName, setUserName] = useState("")
    const [userNameError, setUserNameError] = useState("")

    const handleUserNameChange = (e) => {
        setUserName(e.target.value);
        if (e.target.value.length < 2) {
            setUserNameError("Username must have at least 2 characters.");
            return;
        } else if (e.target.value.length >15) {
            setUserNameError("Please limit the Username to 15 characters long.");
        } else {
            setUserNameError("");
        };
    };

    // console.log("SAMEASBILLING VALUE: ", sameAsBilling)
  return (
    <section className="sign-up form">
        <h2>Personal Information</h2>

        <label htmlFor="user-name">Username <sup>*</sup></label>
        <input
        type="text"
        id="user-name"
        name="user-name"
        value={userName}
        placeholder="preffered UserName"
        onChange={handleUserNameChange}
        onBlur={handleUserNameChange}
        />
        {userNameError?<p className="error-message">{userNameError}</p>:null}

        <CustomerInfoForm info={props.info}/>
        <h2>Payment Information</h2>
        <CustomerPaymentForm payment={props.payment}
                             delivery={props.delivery}
                             />
        <h2>Delivery Address</h2>
        <div className="same-as-billing">
            <input
            type="checkbox"
            id="same-as-billing"
            name="same-as-billing"
            value={sameAsBilling}
            onChange={(e) => setSameAsBilling(!sameAsBilling)}
            />
            <label htmlFor="same-as-billing"> Same As Billing?</label>
        </div>

        {sameAsBilling?null:<CustomerDeliveryForm delivery={props.delivery}/>}
        
    </section>
  )
}
