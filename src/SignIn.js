import { useState } from "react";
import { Link } from "react-router-dom";

export default function SignIn() {

    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");

    return (
        <>
            <section className="sign-in">
                <form
                // onSubmit={handleSubmit}
                className="form"
                >

                <h2>Sign In or Sign Up. . .</h2>
                    <label htmlFor="username">Username: </label>
                    <input
                    name="username"
                    id="username"
                    value={userName}
                    type="text"
                    placeholder="Username"
                    onChange= {(e) => setUserName(e.target.value)}
                    />

                    <label htmlFor="password">Password: </label>

                    <input
                    name="password"
                    id="password"
                    value={password}
                    type="password"
                    onChange= {(e) => setPassword(e.target.value)}
                    />

                    <div className="sign-up-or-in">
                        <input
                        aria-label="On Click"
                        className="button"
                        type="submit"
                        value="Sign In"
                        />

                        <p>or</p>
                        <p>If You're Not Already A Member</p>

                        <Link aria-label="On Click" className="button" to="/sign_up">Sign Up</Link>
                    </div>
                </form>
            </section>
        </>
    );
};