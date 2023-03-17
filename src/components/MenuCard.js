

export default function MenuCard(props) {
    console.log("MENUCARD PROPS: ", props)
  return (
    <section className="menu-card">
        <div className="item">{props.name}</div>
        <div className="description">{props.description}</div>
        <div className="price">{props.price}</div>
    </section>
  )
}
