import React from "react";
import ProductDetailTemplate from "../components/templates/ProductDetailTemplate/ProductDetailTemplate";
import { productsData } from "../data/products.json";

const ProductDetailPage = ({ productId = 1 }) => {
  const product = productsData.products.find((p) => p.id === productId);
  const recommendations = productsData.products
    .filter((p) => p.id !== productId && p.category === product?.category)
    .slice(0, 4);

  const handleAddToCart = (product) => {
    console.log("Adding to cart:", product);
  };

  const handleToggleFavorite = (productId) => {
    console.log("Toggle favorite:", productId);
  };

  const handleCartClick = () => {
    console.log("Go to cart");
  };

  const handleBackClick = () => {
    console.log("Go back to products");
  };

  const handleViewDetail = (productId) => {
    console.log("View detail:", productId);
  };

  if (!product) {
    return <div>Producto no encontrado</div>;
  }

  return (
    <ProductDetailTemplate
      product={product}
      recommendations={recommendations}
      cartItemsCount={0}
      onAddToCart={handleAddToCart}
      onToggleFavorite={handleToggleFavorite}
      onCartClick={handleCartClick}
      onBackClick={handleBackClick}
      onViewDetail={handleViewDetail}
    />
  );
};

export default ProductDetailPage;
