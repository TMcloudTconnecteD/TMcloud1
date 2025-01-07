// src/components/CategoryCard.tsx
import React from "react";

interface CategoryCardProps {
  category: {
    id: string;
    name: string;
  };
}

const CategoryCard: React.FC<CategoryCardProps> = ({ category }) => {
  return (
    <div className="category-card">
      <h3>{category.name}</h3>
      {/* You can add an image or other details */}
    </div>
  );
};

export default CategoryCard;
