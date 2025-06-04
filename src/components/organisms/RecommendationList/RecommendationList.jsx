import React from 'react';
import Text from '../../atoms/Text/Text';
import ProductCard from '../../molecules/ProductCard/ProductCard';

const RecommendationList = ({
  products,
  title = 'Recomendaciones',
  onViewDetail,
}) => {
  if (!products || products.length === 0) return null;

  return (
    <div className="mt-8">
      <Text variant="h3" className="mb-4">
        {title}
      </Text>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {products.slice(0, 4).map((product) => (
          <div key={product.id} className="scale-90">
            <ProductCard product={product} onViewDetail={onViewDetail} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecommendationList;
