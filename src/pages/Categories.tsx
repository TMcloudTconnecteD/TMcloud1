// src/pages/Categories.tsx
import React from "react";
import { categories } from "../data/data"; // Import the categories from data.tsx
import CategoryCard from "../components/CategoryCard1/CategoryCard1"; // Import CategoryCard component
import "./Categories.css";

const Categories: React.FC = () => {
  return (
    <div className="categories">
      <h1>Categories</h1>
      <div className="category-cards">
        {categories.map((category) => (
          <CategoryCard
            key={category.id}
            id={category.id}
            name={category.name}
            image={category.image}
          />
        ))}
      </div>
    </div>
  );
};

export default Categories;
