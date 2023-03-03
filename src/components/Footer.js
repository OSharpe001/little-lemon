import footer_logo from "../assets/images/footer_logo.png";
import { Link } from "react-router-dom";

export default function Footer() {
    return (
        <footer>
            <div>
                <img
                className="footer-logo"
                src={footer_logo}
                alt="Little Lemon's Logo"
                />
            </div>
            <nav>
                <p>Doormat Navigation</p>
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/menu">Menu</Link>
                <Link to="/booking">Reservations</Link>
                <Link to="/order">Order Online</Link>
                <Link to="/signIn">Login</Link>
            </nav>
            <nav>
                <p>Contact</p>
                <ul>
                    <li><a href="address.html">Address</a></li>
                    <li><a href="number.html">Phone Number</a></li>
                    <li><a href="email.html">Email</a></li>
                </ul>
            </nav>
            <nav>
                <p>Social Media Links</p>
                <ul>
                    <li><a href="https://twitter.com">Twitter</a></li>
                    <li><a href="https://www.facebook.com">Facebook</a></li>
                    <li><a href="https://www.instagram.com">Instagram</a></li>
                </ul>
            </nav>
        </footer>
    );
};