// src/pages/ShopPage.tsx
import React from "react";
import { useParams } from "react-router-dom";
import { shops } from "../data/data"; // Import shops data from data.tsx

interface Shop {
  name: string;
  image: string;
}

const ShopPage: React.FC = () => {
  const { id } = useParams<{ id: string }>(); // Extract category id from URL
  const categoryId = Number(id); // Convert id to number

  // Use categoryId as a key, ensuring TypeScript understands it as a valid key
  const categoryShops = shops[categoryId as keyof typeof shops];

  if (!categoryShops) {
    return <div>No shops available for this category.</div>;
  }

  return (
    <div className="shop-page">
      <h2>Shops in this Category</h2>
      <div className="shop-list">
        {categoryShops.map((shop: Shop, index: number) => (
          <div key={index} className="shop-item">
            <img src={shop.image} alt={shop.name} className="shop-image" />
            <h3>{shop.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShopPage;
