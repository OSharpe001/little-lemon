import {useReducer} from "react";

const reducer = (state, action) => {
  if (action.type === "add") return {amount: state.amount + 1};
  if (state.amount>0 && action.type === "subtract") return {amount: state.amount - 1};
};

export default function DeliveryCard(props) {


  const initialState = {amount: 0};
  const [state, dispatch] = useReducer(reducer, initialState);

  
  // console.log("DELIVERYCARD PROPS.IMAGE: ", props.name)

  return (
    <section className="menu-item" >
      <div className="image-and-item">
        {props.image}
        <div className="item" >
            <h4 className="item-name" >{props.name}</h4>
            <p className="item-description" >{props.description}</p>
        </div>
      </div>
        
        <div className="item-price-amount" >
          <p className="item-price" >{props.price}</p>
          <div className="item-amount">
            <button className="button" onClick={() => state.amount<10?dispatch({type: "add"}):null}>
              +
            </button>

            <h1>{state.amount}</h1>

            <button className="button" onClick={() => state.amount>0?dispatch({type: "subtract"}):null}>
              -
            </button>
          </div>
        </div>
    </section>
  );
};
