import React from "react";
import Header from "../../organisms/Header/Header";
import ProductDetail from "../../organisms/ProductDetail/ProductDetail";
import RecommendationList from "../../organisms/RecommendationList/RecommendationList";
import Button from "../../atoms/Button/Button";
import Icon from "../../atoms/Icon/Icon";

const ProductDetailTemplate = ({
  product,
  recommendations,
  cartItemsCount,
  onAddToCart,
  onToggleFavorite,
  onCartClick,
  onBackClick,
  onViewDetail,
}) => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header cartItemsCount={cartItemsCount} onCartClick={onCartClick} />

      <main className="max-w-6xl mx-auto">
        <div className="p-4">
          <Button
            variant="ghost"
            size="small"
            onClick={onBackClick}
            className="mb-4"
          >
            <Icon name="back" /> Volver
          </Button>
        </div>

        <ProductDetail
          product={product}
          onAddToCart={onAddToCart}
          onToggleFavorite={onToggleFavorite}
        />

        <div className="px-6">
          <RecommendationList
            products={recommendations}
            onAddToCart={onAddToCart}
            onViewDetail={onViewDetail}
          />
        </div>
      </main>
    </div>
  );
};

export default ProductDetailTemplate;
