import DeliveryCard from "./components/DeliveryCard";
import { Menu } from "./components/deliveryItems";

export default function Order(props) {

    const sum = props.orderUp.map(item=>item[2]).reduce((total,number)=> {return total+number},0);
    const tax = sum *.0875
    const deliveryFee =sum===0?0:props.userName?5+((Math.round(sum/100))*10):10+((Math.round(sum/100))*10);
    const total = sum+tax+deliveryFee
    const disabled=(sum===0)

    const orderRundown = props.orderUp.map(item => item[1]>0?<p key={item[0]}>Item:{item[0]}-- Amount:{item[1]}-- Cost:{item[2]}</p>:null)

    const handleOrderSubmit= () => {
        if (!props.userName) {
            props.submitForm(props.orderUp, props.userName, total.toFixed(2));
        } else {
            props.submitMemberForm({"order":props.orderUp, "price":total.toFixed(2)});
            props.setOrderUp([]);
        }
    }

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
                                    setOrder={props.setOrder}
                                />
                            </li>
                        )}
                    </ul>
                    <section className="price-summary">
                        <h2>Order Sumary:</h2>
                        <hr className="total-seperation" />
                        {orderRundown}
                        <hr className="total-seperation" />
                        <p>Sub-Total: {sum.toFixed(2)}</p>
                        <p>Tax: {tax.toFixed(2)}</p>
                        <p>Delivery Fee: {deliveryFee.toFixed(2)}</p>
                        <hr className="total-seperation" />
                        <h2>Total: {total.toFixed(2)}</h2>
                        <br/>
                        <button
                            disabled={disabled}
                            style={disabled?{border: "1px solid #999999", backgroundColor: "#cccccc", color: "#666666", cursor: "not-allowed"}:null}
                            className="button"
                            aria-label="On Click"
                            onClick={handleOrderSubmit}
                            >
                                {!props.userName?"Delivery Address":"Confirm Order"}
                        </button>
                    </section>
                </div>
            </section>
    );
};