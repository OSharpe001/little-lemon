

import { wait } from "@testing-library/user-event/dist/utils";
import { useEffect } from "react";


export default function SignOut(props) {
    const navigate = props.navigate;

    useEffect(() => {
        props.setLoggedIn({state:false, userName:""});
        wait(5000).then(navigate("/"))
    });
  return (
    <section className="sign-out">
        <h2>We'll be anticipating your return. .</h2>
    </section>
  );
};
