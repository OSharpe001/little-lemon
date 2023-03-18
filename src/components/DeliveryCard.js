

export default function DeliveryCard(props) {
  return (
    <section className="menu-item" >
        <img
            className="item-image"
            src={props.image}
            alt={props.alt}
        />
        <div className="item" >
            <h4 className="item-name" >{props.name}</h4>
            <p className="item-description" >{props.description}</p>
        </div>
        <p className="item-price" >{props.price}</p>
    </section>
  )
}
