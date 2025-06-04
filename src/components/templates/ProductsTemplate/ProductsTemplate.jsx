import React from 'react';
import Header from '../../organisms/Header/Header';
import ProductGrid from '../../organisms/ProductGrid/ProductGrid';

const ProductsTemplate = ({ products, onViewDetail, onSearch }) => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header onSearch={onSearch} />
      <main>
        <ProductGrid products={products} onViewDetail={onViewDetail} />
      </main>
    </div>
  );
};

export default ProductsTemplate;
