import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import ProductDetailTemplate from '../components/templates/ProductDetailTemplate/ProductDetailTemplate';
import { useProducts } from '../contexts/ProductContext';

const ProductDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { products, addToViewedProducts, getRecommendations } = useProducts();

  const productId = parseInt(id);
  const product = products.find((p) => p.id === productId);

  useEffect(() => {
    if (product) {
      addToViewedProducts(product.id);
    }
  }, [product, addToViewedProducts]);

  const recommendations = getRecommendations(productId);

  const handleBackClick = () => {
    navigate('/');
  };

  const handleViewDetail = (productId) => {
    navigate(`/product/${productId}`);
  };

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Producto no encontrado</h1>
          <button onClick={handleBackClick} className="text-blue-600">
            Volver a la tienda
          </button>
        </div>
      </div>
    );
  }

  return (
    <ProductDetailTemplate
      product={product}
      recommendations={recommendations}
      onBackClick={handleBackClick}
      onViewDetail={handleViewDetail}
    />
  );
};

export default ProductDetailPage;
