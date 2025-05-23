import React from "react";
import ProductsTemplate from "../components/templates/ProductsTemplate/ProductsTemplate";
import { productsData } from "../data/products.json";

const ProductsPage = () => {
  const handleAddToCart = (product) => {
    console.log("Adding to cart:", product);
  };

  const handleToggleFavorite = (productId) => {
    console.log("Toggle favorite:", productId);
  };

  const handleViewDetail = (productId) => {
    console.log("View detail:", productId);
  };

  const handleCartClick = () => {
    console.log("Go to cart");
  };

  const handleSearch = (query) => {
    console.log("Search:", query);
  };

  return (
    <ProductsTemplate
      products={productsData.products}
      cartItemsCount={0}
      onAddToCart={handleAddToCart}
      onToggleFavorite={handleToggleFavorite}
      onViewDetail={handleViewDetail}
      onCartClick={handleCartClick}
      onSearch={handleSearch}
    />
  );
};

export default ProductsPage;
