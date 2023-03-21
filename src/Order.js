import DeliveryCard from "./components/DeliveryCard";
import { Menu } from "./components/deliveryItems";

export default function Order() {
    // console.log("ORDER.JS MENU ITEMS", Menu.map(item => item.description))
    return (
            <section className="order">
                <h1>Delivery Menu</h1>
                <div className="menu-list">
                    <ul >
                        {Menu.map(item =>
                            <li key={item.name}>
                                <DeliveryCard
                                    image={item.image}
                                    name={item.name}
                                    description={item.description}
                                    price={item.price}
                                />
                            </li>
                        )}
                    </ul>
                    <section className="price-summary">
                        <h2>Order Sumary:</h2>
                        {/* <p>Sub-Total: {sum}</p>
                        <p>Tax: {tax}</p>
                        <p>Delivery Fee: {deliveryFee}</p>
                        {/* ADD A BREAK LINE /}
                        <h2>Total: {total}</h2> */}
                    </section>
                </div>
            </section>
    );
};