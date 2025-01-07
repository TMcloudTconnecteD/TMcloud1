// src/context/CartContext.tsx
import React, { createContext, useContext, useState, ReactNode } from "react";

// Define the structure of a cart item
export type CartItem = {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image?: string; // Optional image field
};

// Define the shape of the context
type CartContextType = {
  cart: CartItem[];
  addToCart: (item: CartItem) => void;
  removeFromCart: (id: string) => void;
  updateQuantity: (id: string, quantity: number) => void;
  getCartTotal: () => number;
};

// Create the context
export const CartContext = createContext<CartContextType | undefined>(undefined);

// Custom hook to use the cart context
export const useCart = (): CartContextType => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};

// CartProvider component to wrap the application
export const CartProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [cart, setCart] = useState<CartItem[]>([]);

  // Function to add an item to the cart
  const addToCart = (item: CartItem) => {
    setCart((prevCart) => {
      const existingItemIndex = prevCart.findIndex((cartItem) => cartItem.id === item.id);
      if (existingItemIndex >= 0) {
        const updatedCart = [...prevCart];
        updatedCart[existingItemIndex].quantity += item.quantity;
        return updatedCart;
      }
      return [...prevCart, item];
    });
  };

  // Function to remove an item from the cart
  const removeFromCart = (id: string) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  // Function to update the quantity of an item
  const updateQuantity = (id: string, quantity: number) => {
    if (quantity <= 0) return; // Prevent negative or zero quantity
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === id ? { ...item, quantity } : item
      )
    );
  };

  // Function to get the total price of all items in the cart
  const getCartTotal = (): number => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, updateQuantity, getCartTotal }}>
      {children}
    </CartContext.Provider>
  );
};
