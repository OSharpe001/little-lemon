import DeliveryCard from "./components/DeliveryCard";
import { Menu } from "./components/deliveryItems";

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
                <section className="price-summary">
                        <h1>Sumary</h1>

                </section>
            </section>
    );
};