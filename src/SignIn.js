import { useState } from "react";
import { Link } from "react-router-dom";

export default function SignIn(props) {

    const [userName, setUserName] = useState("");
    const [userNameError, setUserNameError] = useState("");
    const [password, setPassword] = useState("");
    const [passwordError, setPasswordError] = useState("");

    const disabled = !!(userNameError) || !!(passwordError);
    const gotRequiredInfo = !!userName && !!password;

    const clearForm = () => {
        setUserName("");
        setPassword("");
    };

    const setSubmissionErrors = () => {
        if (userName === "") {
            setUserNameError("All fields are required.");
        };
        if (password === "") {
            setPasswordError("All fields are required.");
        };
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!gotRequiredInfo) {
            setSubmissionErrors();
            return
        } else {
                props.submitForm({
                    "user-name":userName,
                    "password":password,
                });
                clearForm();
        };
    };

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

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
        if (e.target.value.length < 8) {
            setPasswordError("Password must have at least 8 characters.");
            return;
        } else if (e.target.value.length >15) {
            setPasswordError("Please limit the password to 15 characters long.");
        } else {
            setPasswordError("");
        };
    };

    return (
        <>
            <section className="sign-in">
                <form
                onSubmit={handleSubmit}
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
                    onChange= {handleUserNameChange}
                    />
                    {userNameError?<p className="error-message">{userNameError}</p>:null}

                    <label htmlFor="password">Password: </label>

                    <input
                    name="password"
                    id="password"
                    value={password}
                    type="password"
                    onChange= {handlePasswordChange}
                    />
                    {passwordError?<p className="error-message">{passwordError}</p>:null}

                    <div className="sign-up-or-in">
                        <input
                        disabled={disabled}
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