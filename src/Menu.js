

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
    console.log("MENU.JS' LIQUOR VALUES: ", Liquor.COCKTAILS);
    // Appetizers.map((item)=>console.log(item.name,item.price));
    return (
        <section className="menu">
            <section className="menu-section">
                <h2>Appetizers</h2>
                <ul className="menu-list">
                    {Appetizers.map(item =>
                        <li key={item.name}>
                            <MenuCard
                                name={item.name}
                                description={item.description}
                                price={item.price}
                            />
                        </li>
                    )}
                </ul>
                <ul className="menu-list">
                <h2>Entrees</h2>
                {Entrees.map(item =>
                    <li key={item.name}>
                        <MenuCard
                            name={item.name}
                            description={item.description}
                            price={item.price}
                        />
                    </li>
                )}
                </ul>
                <ul className="menu-list">
                <h2>Soups</h2>
                {Soups.map(item =>
                    <li key={item.name}>
                        <MenuCard
                            name={item.name}
                            description={item.description}
                            price={item.price}
                        />
                    </li>
                )}
                </ul>
                <ul className="menu-list">
                <h2>Off the Grill</h2>
                {Off_the_Grill.map(item =>
                    <li key={item.name}>
                        <MenuCard
                            name={item.name}
                            description={item.description}
                            price={item.price}
                        />
                    </li>
                )}
                </ul>
                <ul className="menu-list">
                <h2>Fish</h2>
                {Fish.map(item =>
                    <li key={item.name}>
                        <MenuCard
                            name={item.name}
                            description={item.description}
                            price={item.price}
                        />
                    </li>
                )}
                </ul>
                <ul className="menu-list">
                <h2>Side Orders</h2>
                {Side_Orders.map(item =>
                    <li key={item.name}>
                        <MenuCard
                            name={item.name}
                            description={item.description}
                            price={item.price}
                        />
                    </li>
                )}
                </ul>
                <ul className="menu-list">
                <h2>Flame Brick Oven</h2>
                {Flame_Brick_Oven.map(item =>
                    <li key={item.name}>
                        <MenuCard
                            name={item.name}
                            description={item.description}
                            price={item.price}
                        />
                    </li>
                )}
                </ul>
                <ul className="menu-list">
                <h2>Salads</h2>
                {Salads.map(item =>
                    <li key={item.name}>
                        <MenuCard
                            name={item.name}
                            description={item.description}
                            price={item.price}
                        />
                    </li>
                )}
                </ul>
                <ul className="menu-list">
                <h2>Pasta</h2>
                {Pasta.map(item =>
                    <li key={item.name}>
                        <MenuCard
                            name={item.name}
                            description={item.description}
                            price={item.price}
                        />
                    </li>
                )}
                </ul>
                <ul className="menu-list">
                <h2>Shish Kebab</h2>
                {Shish_Kebab.map(item =>
                    <li key={item.name}>
                        <MenuCard
                            name={item.name}
                            description={item.description}
                            price={item.price}
                        />
                    </li>
                )}
                </ul>
                <ul className="menu-list">
                <h2>Desserts</h2>
                {Desserts.map(item =>
                    <li key={item.name}>
                        <MenuCard
                            name={item.name}
                            description={item.description}
                            price={item.price}
                        />
                    </li>
                )}
                </ul>
                <ul className="menu-list">
                <h2>Beverages</h2>
                {Beverages.map(item =>
                    <li key={item.name}>
                        <MenuCard
                            name={item.name}
                            description={item.description}
                            price={item.price}
                        />
                    </li>
                )}
                </ul>
                <ul className="menu-list">
                <h1>Liquor</h1>
                <h2>Wines by the Glass</h2>
                <h3>REDS</h3>
                {Liquor["WINES BY THE GLASS"].REDS.map(item =>
                    <li key={item.name}>
                        <MenuCard
                            name={item.name}
                            description={item.description}
                            price={item.price}
                        />
                    </li>
                )}
                </ul>
                <ul className="menu-list">
                <h3>WHITES</h3>
                {Liquor["WINES BY THE GLASS"].WHITES.map(item =>
                    <li key={item.name}>
                        <MenuCard
                            name={item.name}
                            description={item.description}
                            price={item.price}
                        />
                    </li>
                )}
                </ul>
                <ul className="menu-list">
                <h3>ROSÉ</h3>
                {Liquor["WINES BY THE GLASS"].ROSÉ.map(item =>
                    <li key={item.name}>
                        <MenuCard
                            name={item.name}
                            description={item.description}
                            price={item.price}
                        />
                    </li>
                )}
                </ul>
                <ul>
                <h2>COCKTAILS</h2>
                {Liquor.COCKTAILS.map(item =>
                    <li key={item.name}>
                        <MenuCard
                            name={item.name}
                            description={item.description}
                            price={item.price}
                        />
                    </li>
                )}
                </ul>
            </section>
        </section>
    );
    //  {Liquor.map(item =>
    //                 <li key={item.name}>
    //                     <MenuCard
    //                         name={item.name}
    //                         description={item.description}
    //                         price={item.price}
    //                     />
    //                 </li>
    //             )} 
};
