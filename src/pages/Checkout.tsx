// src/pages/Checkout.tsx
import React from "react";
import { useCart } from "../context/CartContext";

const Checkout: React.FC = () => {
  const { cart, getCartTotal } = useCart();

  return (
    <div className="checkout-page">
      <h2>Checkout</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty. Add some items first!</p>
      ) : (
        <div className="checkout-items">
          {cart.map((item) => (
            <div key={item.id} className="checkout-item">
              <img
                src={item.image}
                alt={item.name}
                className="checkout-item-image"
              />
              <div className="checkout-item-info">
                <h3>{item.name}</h3>
                <p>Price: ${item.price}</p>
                <p>Quantity: {item.quantity}</p>
              </div>
            </div>
          ))}
          <div className="checkout-total">
            <h3>Total: ${getCartTotal()}</h3>
            <button>Complete Purchase</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Checkout;
