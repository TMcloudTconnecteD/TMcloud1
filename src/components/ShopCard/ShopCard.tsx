// ShopCard.tsx

import React from "react";
import "./ShopCard.css";

interface ShopCardProps {
  shopName: string;
  shopImage: string;
  onClick: () => void;
}

const ShopCard: React.FC<ShopCardProps> = ({ shopName, shopImage, onClick }) => {
  return (
    <div className="shop-card" onClick={onClick}>
      <img src={shopImage} alt={shopName} className="shop-card-image" />
      <h3>{shopName}</h3>
    </div>
  );
};

export default ShopCard;
