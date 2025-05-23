import React from "react";
import ProductCard from "../../molecules/ProductCard/ProductCard";

const ProductGrid = ({
  products,
  onAddToCart,
  onToggleFavorite,
  onViewDetail,
}) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 p-4">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          onAddToCart={onAddToCart}
          onToggleFavorite={onToggleFavorite}
          onViewDetail={() => onViewDetail?.(product.id)}
        />
      ))}
    </div>
  );
};

export default ProductGrid;
