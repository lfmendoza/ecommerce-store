import React from 'react';
import ProductCard from '../../molecules/ProductCard/ProductCard';

const ProductGrid = ({ products, onViewDetail }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 p-4 max-w-6xl mx-auto">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          onViewDetail={onViewDetail}
        />
      ))}
    </div>
  );
};

export default ProductGrid;
