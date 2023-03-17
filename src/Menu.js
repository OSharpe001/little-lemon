import MenuCard from "./components/MenuCard";
import { 
    Appetizers,
    Entrees,
    Soups,
    Off_the_Grill,
    Fish,
    Side_Orders,
    Flame_Brick_Oven,
    Salads,
    Pasta,
    Shish_Kebab,
    Desserts,
    Beverages,
    Liquor 
    } from "./components/menuItems";

export default function Menu() {
    console.log(Appetizers);
    // Appetizers.map((item)=>console.log(item.name,item.price));
    return (
        <>
            <section className="menu">
                <h2>Appetizers</h2>
                {Appetizers.map(item =>
                    <MenuCard
                        name={item.name}
                        description={item.description}
                        price={item.price}
                    />
                )}
            </section>
        </>
    );
};