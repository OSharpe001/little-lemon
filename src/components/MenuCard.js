

export default function MenuCard(props) {
    // console.log("MENUCARD PROPS: ", props)
  return (
    <section className="menu-item" >
      <div className="item" >
          <h3 className="name" >{props.name}</h3>
          <p className="description" >{props.description}</p>
      </div>
        <p className="price" >{props.price}</p>
    </section>
  )
}
