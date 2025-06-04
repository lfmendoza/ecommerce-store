import React from 'react';
import Image from '../../atoms/Image/Image';
import Text from '../../atoms/Text/Text';
import Button from '../../atoms/Button/Button';
import Icon from '../../atoms/Icon/Icon';
import StarRating from '../StarRating/StarRating';
import PriceDisplay from '../PriceDisplay/PriceDisplay';
import { useCart } from '../../../contexts/CartContext';
import { useFavorites } from '../../../contexts/FavoritesContext';

const ProductCard = ({ product, onViewDetail }) => {
  const { dispatch } = useCart();
  const { toggleFavorite, isFavorite } = useFavorites();

  const handleAddToCart = () => {
    dispatch({
      type: 'ADD_ITEM',
      payload: { ...product, quantity: 1 },
    });
  };

  const handleToggleFavorite = () => {
    toggleFavorite(product.id);
  };

  return (
    <div className="border border-gray-200 rounded-lg p-4 hover:shadow-lg transition-shadow">
      <div className="relative">
        <Image
          src={product.image}
          alt={product.name}
          className="w-full h-48 rounded-lg mb-3 cursor-pointer"
          onClick={() => onViewDetail?.(product.id)}
        />
        <Button
          variant="ghost"
          size="small"
          className={`absolute top-2 right-2 ${isFavorite(product.id) ? 'text-red-500' : ''}`}
          onClick={handleToggleFavorite}
        >
          <Icon name="heart" />
        </Button>
      </div>

      <Text variant="h4" className="mb-2 truncate">
        {product.name}
      </Text>

      <StarRating rating={product.rating} reviews={product.reviews} />

      <div className="mt-2 mb-3">
        <PriceDisplay
          price={product.price}
          originalPrice={product.originalPrice}
        />
      </div>

      <Button
        variant="primary"
        size="small"
        className="w-full"
        onClick={handleAddToCart}
      >
        <Icon name="cart" /> Agregar
      </Button>
    </div>
  );
};

export default ProductCard;
