/*
TODO: FIGURE OUT THE "WAIT" FUNCTION SO THAT THE SIGN
OUT PAGE CAN BE SEEN FOR A FEW SECONDS*/

import { wait } from "@testing-library/user-event/dist/utils";
import { useEffect } from "react";
// import { useNavigate } from "react-router-dom";


export default function SignOut(props) {
    // console.log("SIGNOUT PROPS: ", props)
    const navigate = props.navigate;
    // const setLoggedIn = props.setLoggedIn

    useEffect(() => {
        props.setLoggedIn({state:false, userName:""});
        wait(5000).then(navigate("/"))
        // ,[setLoggedIn]
    });
    // props.setLoggedIn({state:false, userName:""})
  return (
    <section className="sign-out">
        <h2>We'll be anticipating your return. .</h2>
    </section>
  );
};
