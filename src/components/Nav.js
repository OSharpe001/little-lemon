import { Link } from "react-router-dom";

export default function Nav() {
    return (
        <nav className="nav-bar">
            <Link to="/" className="nav-item">Home</Link>
            <Link to="/about" className="nav-item">About</Link>
            <Link to="/menu" className="nav-item">Menu</Link>
            <Link to="/booking" className="nav-item">Reservations</Link>
            <Link to="/order" className="nav-item">Order Online</Link>
            <Link to="/signIn" className="nav-item">Login</Link>
        </nav>
    );
};