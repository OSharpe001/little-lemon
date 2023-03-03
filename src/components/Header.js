import logo from "../assets/images/logo.png"
import Nav from  "./Nav"


export default function Header() {
    return (
        <header className="head">
            <img
            className="logo"
            src={logo}
            alt="Little Lemon's banner"
            />
            <Nav/>
        </header>
    );
};