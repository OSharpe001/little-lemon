import About from "./components/About";
//import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Specials from "./components/Specials";
import Testimonials from "./components/Testimonials";


export default function Homepage() {
    return (
        <>
            <Hero />
            <section className="declare1">
                <h2>This week's specials!</h2>
                <button className="button" >Online Menu</button>
            </section>
            <br/>
            <Specials />
            <h2 className="declare2">Testimonials</h2>
            <Testimonials />
            <br/>
            <About />
        </>
    );
};