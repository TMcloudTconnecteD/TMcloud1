// HomePage.tsx

import React from "react";
import { Link } from "react-router-dom";
import CategoryCard from "../components/CategoryCard/CategoryCard";
import ShopCard from "../components/ShopCard/ShopCard";
import "./HomePage.css";

const categories = [
  { id: "shopping", name: "Shopping", image: "/images/fashion0.jpg" },
  { id: "liquor", name: "Liquor", image: "/images/liquor0.jpg" },
  { id: "groceries", name: "Groceries", image: "/images/groceries.jpg" },
  { id: "transport", name: "Transport", image: "/images/rent_bike.jpg" },
  { id: "fashion", name: "Fashion", image: "/images/fashion3.jpg" },
];

const shops = [
  {
    id: "rose-shop",
    name: "Rose Shop",
    category: "shopping",
    image: "/images/groceries.jpg",
  },
  {
    id: "comrade-shop",
    name: "Comrade Shop",
    category: "shopping",
    image: "/images/fashion0.jpg",
  },
  {
    id: "famous-shop",
    name: "Famous Shop",
    category: "shopping",
    image: "/images/fashion2.jpg",
  },
  {
    id: "honey-pot",
    name: "Honey Pot",
    category: "liquor",
    image: "/images/liquor2.jpg",
  },
  {
    id: "yaya-center",
    name: "Yaya Center",
    category: "liquor",
    image: "/images/liquor2.jpg",
  },
  {
    id: "mr-beast",
    name: "Mr. Beast",
    category: "liquor",
    image: "/images/liquor0.jpg",
  },
];

const HomePage: React.FC = () => {
  const filteredShops = (category: string) =>
    shops.filter((shop) => shop.category === category);

  return (
    <div className="home-page">
      <h1>Welcome to TMcloud</h1>
      <div className="category-section">
        <h2>Categories</h2>
        <div className="category-list">
          {categories.map((category) => (
            <Link
              to={`/shop/${category.id}`}
              key={category.id}
              className="category-link"
            >
              <CategoryCard
                category={{ id: category.id, name: category.name }}
              />
            </Link>
          ))}
        </div>
      </div>

      <div className="shop-section">
        <h2>Featured Shops</h2>
        <div className="shop-list">
          {shops.map((shop) => (
            <ShopCard
              key={shop.id}
              shopName={shop.name} // Passing shop name
              shopImage={shop.image} // Passing shop image
              onClick={() => console.log(`Navigating to ${shop.name}`)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
