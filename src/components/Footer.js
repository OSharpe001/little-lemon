import footer_logo from "../assets/images/footer_logo.png";
import { Link } from "react-router-dom";

export default function Footer() {
    return (
        <>
            <footer>
                <div>
                    <img
                    className="footer-logo"
                    src={footer_logo}
                    alt="Little Lemon's Logo"
                    />
                </div>
                <nav className="footer-nav">
                    <p>Doormat Navigation</p>
                    <Link to="/" className="nav-item">Home</Link>
                    <Link to="/about" className="nav-item">About</Link>
                    <Link to="/menu" className="nav-item">Menu</Link>
                    <Link to="/booking" className="nav-item">Reservations</Link>
                    <Link to="/order" className="nav-item">Order Online</Link>
                    <Link to="/sign_in" className="nav-item">Login</Link>
                </nav>
                <nav className="footer-nav">
                    <p>Contact</p>
                    <Link to="/contact" className="nav-item">Address</Link>
                    <Link to="/contact" className="nav-item">Phone Number</Link>
                    <Link to="/contact" className="nav-item">Email</Link>
                </nav>
                <nav className="footer-nav">
                    <p>Social Media Links</p>
                    <Link to="https://twitter.com" className="nav-item">Twitter</Link>
                    <Link to="https://www.facebook.com" className="nav-item">Facebook</Link>
                    <Link to="https://www.instagram.com" className="nav-item">Instagram</Link>
                </nav>
            </footer>
        </>
    );
};