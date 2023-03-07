import entree from "../assets/images/entree.jpg";

export default function Hero() {
    return (
        <>
            <section className="hero">
                <div className="greeting">
                    <h1>Little Lemon</h1>
                    <p>New York City</p>
                    <article>
                        We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.
                    </article>
                    <button className="button" >Reserve a Table</button>
                </div>
                <div>
                    <img
                    src={entree}
                    alt="entree plate of baggettes stuffed with fresh vegetables"
                    />
                </div>
            </section>
        </>
    )
}