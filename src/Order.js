import DeliveryCard from "./components/DeliveryCard";
import { Menu } from "./components/deliveryItems";
// import bruchetta from "./assets/images/bruchetta.png";
// import falafel from "./assets/images/falafel.png";
// import fries from "./assets/images/fries.png";
// import clams from "./assets/images/clams.png";
// import greek_salad from "./assets/images/greek_salad.jpg";
// import lemon_dessert from "./assets/images/lemon_dessert.jpg";
// import lemon_chicken_platter from "./assets/images/lemon_chicken_platter.png";
// import onion_rings from "./assets/images/onion_rings.png";
// import pasta_salad from "./assets/images/pasta_salad.png";
// import salmon from "./assets/images/salmon.png";
// import seared_fish from "./assets/images/seared_fish.png";
// import spicy_pasta from "./assets/images/spicy_pasta.png";

export default function Order() {
    // console.log("ORDER.JS MENU ITEMS", Menu.map(item => item.description))
    return (
            <section className="order">
                <h1>Order Stuff. . .</h1>
                <ul className="menu-list">
                    {Menu.map(item =>
                        <li key={item.name}>
                            <DeliveryCard
                                image={item.image}
                                alt={item.alt}
                                name={item.name}
                                description={item.description}
                                price={item.price}
                            />
                        </li>
                    )}
                </ul>
            </section>
    );
};