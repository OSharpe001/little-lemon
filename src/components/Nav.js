import { Link } from "react-router-dom";

export default function Nav() {
    return (
        <nav className="nav-bar">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/menu">Menu</Link>
            <Link to="/booking">Reservations</Link>
            <Link to="/order">Order Online</Link>
            <Link to="/signIn">Login</Link>
        </nav>
    );
};