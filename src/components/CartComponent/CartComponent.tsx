// src/components/CartComponent.tsx
import React from "react";
import { useCart } from "../../context/CartContext"; // Import Cart Context
import { Link } from "react-router-dom";
import "../../pages/Cart.css";

const CartComponent: React.FC = () => {
  const { cart, removeFromCart, updateQuantity, getCartTotal } = useCart(); // Using Cart Context

  return (
    <div className="cart-page">
      <h1>Your Cart</h1>
      {cart.length === 0 ? (
        <div className="empty-cart-message">
          <p>Your cart is empty. Start shopping!</p>
          <Link to="/categories" className="explore-link">
            Explore Categories
          </Link>
        </div>
      ) : (
        <div className="cart-items">
          {cart.map((item) => (
            <div key={item.id} className="cart-item">
              <img
                src={item.image || "https://via.placeholder.com/150"} // Placeholder for missing images
                alt={item.name}
                className="cart-item-image"
              />
              <div className="cart-item-details">
                <h2>{item.name}</h2>
                <p>Price: Ksh {item.price}</p>
                <div className="quantity-controls">
                  <button
                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                  >
                    -
                  </button>
                  <span>{item.quantity}</span>
                  <button
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                  >
                    +
                  </button>
                </div>
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="remove-button"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
      <h2 className="cart-total">Total: Ksh {getCartTotal()}</h2>
      <Link to="/checkout" className="checkout-link">
        Go to Checkout
      </Link>
    </div>
  );
};

export default CartComponent;
