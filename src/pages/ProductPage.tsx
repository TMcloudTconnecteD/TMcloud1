import React from "react";
import { useParams } from "react-router-dom";
import { useCart } from "../context/CartContext";
import ProductCard from "../components/ProductCard/ProductCard";
import "./ProductPage.css";

const shopProducts: { [key: number]: { id: string; name: string; price: number; image: string }[] } = {
  1: [
    { id: "101", name: "Apple", price: 30, image: "/assets/apple.jpg" },
    { id: "102", name: "Orange", price: 40, image: "/assets/orange.jpg" },
  ],
  2: [
    { id: "201", name: "Whiskey", price: 1200, image: "/assets/whiskey.jpg" },
    { id: "202", name: "Wine", price: 800, image: "/assets/wine.jpg" },
  ],
};

const ProductPage: React.FC = () => {
  const { productId } = useParams<{ productId: string }>();
  const { addToCart } = useCart();

  const categoryId = Number(productId);
  if (isNaN(categoryId)) {
    return <div>Invalid category ID.</div>;
  }

  const products = shopProducts[categoryId] || [];

  if (!products.length) {
    return <div>No products available for this category.</div>;
  }

  return (
    <div className="product-page">
      <h1>Products</h1>
      <div className="product-list">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onAddToCart={() => {
              // Add the product to the cart with quantity set to 1
              addToCart({ ...product, quantity: 1 });
            }}
            alt={product.name} // Pass alt text for accessibility
          />
        ))}
      </div>
    </div>
  );
};

export default ProductPage;
