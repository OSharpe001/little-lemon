import Mario_and_Adrian_1 from "./assets/images/Mario_and_Adrian_1.jpg";
import Mario_and_Adrian_2 from "./assets/images/Mario_and_Adrian_2.jpg";
import footer_logo from "./assets/images/footer_logo.png"
import entree from "./assets/images/entree.jpg";
import greek_salad from "./assets/images/greek_salad.jpg";
import bruchetta from "./assets/images/bruchetta.png";
import lemon_dessert from "./assets/images/lemon_dessert.jpg";
import moped_icon from "./assets/images/moped_icon_option.png";
import mock_profile_pic from "./assets/images/mock_profile_pic.png";


export default function Homepage() {
    return (
        <>
            <section class="hero">
                <div className="greeting">
                    <h1>Little Lemon</h1>
                    <p>New York City</p>
                    <article>
                        We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.
                    </article>
                    <button>Reserve a Table</button>
                </div>
                <div>
                    <img
                    src={entree}
                    alt="entree plate of baggettes stuffed with fresh vegetables"
                    />
                </div>
            </section>
            <section className="declare1">
                <h2>This week's specials!</h2>
                <button >Online Menu</button>
            </section>
            <br/>
            <section className="specials">
                <article>
                    <img
                        className="specials-img"
                        src={greek_salad}
                        alt="salad"
                        />
                    <div className="name-price">
                        <h4>Greek Salad</h4>
                        <p className="price">$12.99</p>
                    </div>
                    <div className="specials-text">
                        <p className="specials-text-p">The famous greek salad of crispy lettuce, peppers, olives and our New York style feta cheese garnished with crunchy garlic and rosemary croutons.</p>
                        <a className="specials-a" href="order.html" >Order a delivery 
                            <img 
                                className="moped"
                                src={moped_icon}
                                alt="moped"
                            />
                        </a>
                    </div>
                </article>
                <article>
                    <img
                        className="specials-img"
                        src={bruchetta}
                        alt="platter of toasted bread topped with tomatoes and seasoning"
                        />
                    <div className="name-price">
                        <h4>Bruchetta</h4>
                        <p className="price">$5.99</p>
                    </div>
                    <div className="specials-text">
                        <p className="specials-text-p">Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.</p>
                        <a className="specials-a" href="order.html">Order a delivery 
                        <img 
                            className="moped"
                            src={moped_icon}
                            alt="moped"
                            />
                        </a>
                    </div>
                </article>
                <article>
                    <img
                        className="specials-img"
                        src={lemon_dessert}
                        alt="slice of lemon cake with lemons in the background"
                        />
                    <div className="name-price">
                        <h4>Lemon Dessert</h4>
                        <p className="price">$5.00</p>
                    </div>
                    <div className="specials-text">
                        <p className="specials-text-p">This comes straight from grandma's recipe book, every last ingredient has been sourced and is as authentic as can be imagined.</p>
                        <a className="specials-a" href="order.html">Order a delivery 
                            <img
                                className="moped"
                                src={moped_icon}
                                alt="moped"
                            />
                        </a>
                    </div>
                </article>
            </section>
            <h2 className="declare2">Testimonials</h2>
            <section className="testimonials">
                <div>
                    <p>(Rating)</p>
                    <div className='profile'>
                        <img
                        className="profile-pic"
                        src={mock_profile_pic}
                        alt="mock profile-pic"
                        />
                        <p>(User Name)</p>
                    </div>
                    <p>(Review)</p>
                </div>
                <div>
                    <p>(Rating)</p>
                    <div className='profile'>
                        <img
                        className="profile-pic"
                        src={mock_profile_pic}
                        alt="mock profile-pic"
                        />
                        <p>(User Name)</p>
                    </div>
                    <p>(Review)</p>
                </div>
                <div>
                    <p>(Rating)</p>
                    <div className='profile'>
                        <img
                        className="profile-pic"
                        src={mock_profile_pic}
                        alt="mock profile-pic"
                        />
                        <p>(User Name)</p>
                    </div>
                    <p>(Review)</p>
                </div>
                <div>
                    <p>(Rating)</p>
                    <div className='profile'>
                        <img
                        className="profile-pic"
                        src={mock_profile_pic}
                        alt="mock profile-pic"
                        />
                        <p>(User Name)</p>
                    </div>
                    <p>(Review)</p>
                </div>
            </section>
            <br/>
            <section className="about">
                <div className="description">
                    <h2>Little Lemon</h2>
                    <p>New York City</p>
                    <article>
                        Little Lemon is a charming neighborhood bistro that serves 
                        simple food and classic cocktails in a lively but casual 
                        environment. The restaurant features a locally-sourced menu 
                        with daily specials.
                    </article>
                    {/* <article>
                        Little Lemon is owned by two Italian brothers, Mario and Adrian, who moved to the United States to pursue their shared dream of owning a restaurant. 
                        The restaurant has a rustic and relaxed atmosphere with moderate prices, making it a popular place for a meal any time of the day.
                        <br/>
                        We've updated our menu with new dinners! 
                        Come in and enjoy our "home-cooked" flavors. Your meal will be 20% off (for a limited time)!
                    </article> */}
                </div>
                <div className="about-pics">
                    <img
                        className="pic2"
                        src={Mario_and_Adrian_2}
                        alt="Mario and Adrian discussing the menu"
                        />
                    <img
                        className="pic1"
                        src={Mario_and_Adrian_1}
                        alt="Mario and Adrian smiling over a new dish"
                        />
                </div>
            </section>
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
                <ul>
                    <li><a href="index.html">Home</a></li>
                    <li><a href="about.html">About</a></li>
                    <li><a href="menu.html">Menu</a></li>
                    <li><a href="reservations.html">Reservations</a></li>
                    <li><a href="order.html">Order Online</a></li>
                    <li><a href="signIn.html">Login</a></li>
                </ul>
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
        </>
    );
};