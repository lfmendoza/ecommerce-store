import { createContext, useContext, useRef, useCallback } from 'react';

import { getProducts, buildRecommendations } from './ProductContext.utils';

export const ProductContext = createContext([]);

export function ProductProvider({ children }) {
  const viewed = useRef([]);

  const addToViewedProducts = (productId) => {
    viewed.current.unshift({ productId, timestamp: new Date().toISOString() });
    if (viewed.current.length > 10)
      viewed.current = viewed.current.slice(0, 10);
  };

  const getRecommendations = useCallback((currentProductId, limit = 4) => {
    const viewedIds = viewed.current.map((v) => v.productId);
    return buildRecommendations(viewedIds, currentProductId, limit);
  }, []);

  return (
    <ProductContext.Provider
      value={{
        products: getProducts(),
        addToViewedProducts,
        getRecommendations,
        getViewedProducts: () => viewed.current,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
}

export function useProducts() {
  const context = useContext(ProductContext);
  if (!context) {
    throw new Error('useProducts must be used within a ProductProvider');
  }
  return context;
}
