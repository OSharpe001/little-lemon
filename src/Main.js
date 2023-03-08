import HomePage from "./HomePage";
import BookingPage from "./BookingPage";
import AboutUs from "./AboutUs";
import Menu from "./Menu";
import Order from "./Order";
import SignIn from "./SignIn";
import ContactUs from "./ContactUs";
import ConfirmedBooking from "./ConfirmedBooking";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { Routes, Route } from "react-router-dom";
import React, { useReducer, useState/*, useEffect*/ } from "react";
import { fetchAPI, submitAPI } from './api.js';
import { useNavigate } from "react-router-dom";

export default function Main() {

    const [month, day, year] = (new Date()).toLocaleDateString('en-NY').split('/').map((number)=> number<10? "0"+number:number);
    const today = [year,month, day].join("-");
    const todaysTimes = fetchAPI(new Date(today));
    const [data, setData] = useState({})
    //  console.log("MAIN.JS, TODAY: ", today);
    //  console.log("FETCHAPI RESULTS (todayTimes): ", todaysTimes);
    // const times= fetchAPI(new Date("04/24/2023"));
    // const times= fetchAPI(new Date("2023-03-07"));
    // console.log("FETCHAPI RESULTS (times): ", times);

    // const initialTimes = [
    //     "17:00",
    //     "18:00",
    //     "19:00",
    //     "20:00",
    //     "21:00",
    //     "22:00"
    // ];


    // console.log("RESDATE: ", resDate);
    const initializeTimes= () => todaysTimes;
    //const initializeTimes= (resDate) => fetchAPI(resDate);

    // const updateTimes = (availableTimes, action) => {
    //     // console.log("updateTimes action:", action.payload);
    //     if (action.type === "select") {
    //         // console.log("STATE AND ACTION OF UPDATE TIMES", availableTimes, action);
    //         // console.log("E.TARGET.VALUE FROM MAIN PAGE", availableTimes.choice);
    //         const newList= () => fetchAPI(new Date(action.payload));
    //         // console.log("NEWLIST: ", newList);
    //         return newList/*{available : !state.available}*/;
    //     } else {
    //         return todaysTimes;
    //     }
    // };

    const updateTimes = (availableTimes, action) => {
        let newList = "";
        switch (action.type) {
            case ("select"):
                newList = () => fetchAPI(new Date(action.payload));
                return newList;
            default:
                return todaysTimes;
        };
    };

    const [availableTimes, dispatch]= useReducer(updateTimes, initializeTimes);

    const navigate = useNavigate();
    const submitForm = (formData) => {
        // console.log("MAIN.JS FORMDATA: ", formData);
        const result=submitAPI(formData);
        // console.log("MAIN.JS 'RESULT': ", result);
        if (result) {
            setData(formData)
            navigate("/confirmed_booking")
        };
    };

    // function submitForm(formData) {
    //     const result = submitAPI(formData);
    //     // const goTo = useNavigate();

    //     useEffect(() => {
    //         if (result) {
    //             useNavigate("/confirmed_booking");
    //         }
    //     }, [result]);
    // };

    return (
        <>
            <Header />
            <Routes>
                <Route path="/" element={<HomePage />}/>
                <Route path="/booking" element={<BookingPage
                                                    availableTimes={availableTimes}
                                                    dispatch={dispatch}
                                                    submitForm={submitForm}
                                                    />}/>
                <Route path="/about_us" element={<AboutUs />}/>
                <Route path="/menu" element={<Menu />}/>
                <Route path="/order" element={<Order />}/>
                <Route path="/sign_in" element={<SignIn />}/>
                <Route path="/contact" element={<ContactUs />}/>
                <Route path="/confirmed_booking" element={<ConfirmedBooking data={data}/>}/>
            </Routes>
            <Footer />
        </>
    );
}