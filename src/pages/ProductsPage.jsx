import React, { useState, useMemo } from 'react';
import ProductsTemplate from '../components/templates/ProductsTemplate/ProductsTemplate';
import { useProducts } from '../contexts/ProductContext';
import { useNavigate } from 'react-router-dom';

const ProductsPage = () => {
  const navigate = useNavigate();
  const { products } = useProducts();
  const [searchQuery, setSearchQuery] = useState('');

  const filteredProducts = useMemo(() => {
    if (!searchQuery) return products;

    return products.filter(
      (product) =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.category.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [products, searchQuery]);

  const handleViewDetail = (productId) => {
    navigate(`/product/${productId}`);
  };

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  return (
    <ProductsTemplate
      products={filteredProducts}
      onViewDetail={handleViewDetail}
      onSearch={handleSearch}
    />
  );
};

export default ProductsPage;
