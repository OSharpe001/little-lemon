

export default function DeliveryCard(props) {
  console.log("DELIVERYCARD PROPS.IMAGE: ", props.name)
  return (
    <section className="menu-item" >
        {props.image}
        <div className="item" >
            <h4 className="item-name" >{props.name}</h4>
            <p className="item-description" >{props.description}</p>
        </div>
        <p className="item-price" >{props.price}</p>
    </section>
  )
}
