// src/components/Header/Header.tsx
import React from "react";
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";

import { useCart } from "../../context/CartContext";
import "./Header.css";

const Header: React.FC = () => {
  const { cart } = useCart();

  return (
    <header className="header">
      <div className="logo">
        <Link to="/">ShopLink</Link>
      </div>
      <div className="nav-links">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/categories">Explore</Link>
        </li>

        <Link to="/cart">
          <FaShoppingCart className="cart-icon" /> ({cart.length})
        </Link>
        <Link to="/feedback">Feedback</Link>
      </div>
    </header>
  );
};

export default Header;

// Ensure you're using React Router for navigation
