/**
 * TODO:
 * 1- CREATE A BURGER MENU FUNCTION FOR MOBILE SCREENS
 */
import { Link } from "react-router-dom";

export default function Nav(props) {
    return (
        <>
            <nav className="nav-bar">
                <Link aria-label="On Click" to="/" className="nav-item">Home</Link>
                <Link aria-label="On Click" to="/about_us" className="nav-item">About</Link>
                <Link aria-label="On Click" to="/menu" className="nav-item">Menu</Link>
                <Link aria-label="On Click" to="/booking" className="nav-item">Reservations</Link>
                <Link aria-label="On Click" to="/order" className="nav-item">Order Online</Link>
                
                 {/* SET UP A LOGIN/LOGOUT FUNCTION BASED ON PROPS.LOGGEDIN */}
                <Link aria-label="On Click" to="/sign_in" className="nav-item">Login</Link>
            </nav>
        </>
    );
};