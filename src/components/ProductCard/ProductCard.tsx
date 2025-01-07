import React from "react";
import { Link } from "react-router-dom";
import "./ProductCard.css";

// Update the type definition to optionally accept an 'alt' prop
interface ProductCardProps {
  product: { id: string; name: string; price: number; image: string };
  onAddToCart: () => void;
  alt?: string; // Optional alt prop for image
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onAddToCart, alt }) => {
  return (
    <div className="product-card">
      <Link to={`/product/${product.id}`}>
        <img src={product.image} alt={alt || product.name} /> {/* Use 'alt' if provided, otherwise fallback to product.name */}
        <h4>{product.name}</h4>
        <p>{product.price} USD</p>
      </Link>
      <button onClick={onAddToCart}>Add to Cart</button>
    </div>
  );
};

export default ProductCard;
