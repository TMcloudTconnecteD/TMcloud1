// src/App.tsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Categories from "./pages/Categories";
import CartComponent from "./components/CartComponent/CartComponent";
import Checkout from "./pages/Checkout";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { CartProvider } from "./context/CartContext";
import FeedbackProvider from "./context/FeedbackContext";
import ShopPage from "./pages/ShopPage"; // Assuming ShopPage is where we display shops for a category

const App: React.FC = () => {
  return (
    <CartProvider>
      <FeedbackProvider>
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/categories" element={<Categories />} />
            <Route path="/cart" element={<CartComponent />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/shops/:id" element={<ShopPage />} /> {/* Add route for ShopPage */}
          </Routes>
          <Footer />
        </Router>
      </FeedbackProvider>
    </CartProvider>
  );
};

export default App;
