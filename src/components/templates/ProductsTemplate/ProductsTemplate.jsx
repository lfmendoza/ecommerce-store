import React from "react";
import Header from "../../organisms/Header/Header";
import ProductGrid from "../../organisms/ProductGrid/ProductGrid";

const ProductsTemplate = ({
  products,
  cartItemsCount,
  onAddToCart,
  onToggleFavorite,
  onViewDetail,
  onCartClick,
  onSearch,
}) => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header
        cartItemsCount={cartItemsCount}
        onCartClick={onCartClick}
        onSearch={onSearch}
      />
      <main>
        <ProductGrid
          products={products}
          onAddToCart={onAddToCart}
          onToggleFavorite={onToggleFavorite}
          onViewDetail={onViewDetail}
        />
      </main>
    </div>
  );
};

export default ProductsTemplate;
