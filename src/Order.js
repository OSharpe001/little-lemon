import DeliveryCard from "./components/DeliveryCard";
import { Menu } from "./components/deliveryItems";
import { useState } from "react";

export default function Order(props) {

    // const [sum,setSum] = useState(0);
    const [orderUp,setOrderUp] = useState([])
    const sum = (orderUp.map(item=>item[2]));
    const tax = sum *.0875
    const deliveryFee =sum===0?0:props.userName?5:10;
    const total = sum+tax+deliveryFee

    const setOrder = (newOrder) => {
        setOrderUp([...orderUp, newOrder])
    }

    console.log("SUM'S VALUE: ", sum)
    console.log("ORDER.JS'S ORDERUP VALUE: ", orderUp)
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
                                    setOrder={setOrder}
                                />
                            </li>
                        )}
                    </ul>
                    <section className="price-summary">
                        <h2>Order Sumary:</h2>
                        <hr className="total-seperation" />
                        {orderUp.map(item => <p>Item:{item[0]}-- Amount:{item[1]}-- Cost:{item[2]}</p>)}
                        <hr className="total-seperation" />
                        <p>Sub-Total: {sum}</p>
                        <p>Tax: {tax}</p>
                        <p>Delivery Fee: {deliveryFee}</p>
                        <hr className="total-seperation" />
                        <h2>Total: {total}</h2>
                    </section>
                </div>
            </section>
    );
};