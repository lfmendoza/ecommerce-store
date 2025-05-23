import React from "react";
import Image from "../../atoms/Image/Image";
import Text from "../../atoms/Text/Text";
import Button from "../../atoms/Button/Button";
import Icon from "../../atoms/Icon/Icon";
import StarRating from "../StarRating/StarRating";
import PriceDisplay from "../PriceDisplay/PriceDisplay";

const ProductCard = ({
  product,
  onAddToCart,
  onToggleFavorite,
  onViewDetail,
}) => {
  return (
    <div className="border border-gray-200 rounded-lg p-4 hover:shadow-lg transition-shadow">
      <div className="relative">
        <Image
          src={product.image}
          alt={product.name}
          className="w-full h-48 rounded-lg mb-3"
          onClick={onViewDetail}
        />
        <Button
          variant="ghost"
          size="small"
          className="absolute top-2 right-2"
          onClick={() => onToggleFavorite?.(product.id)}
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
        onClick={() => onAddToCart?.(product)}
      >
        <Icon name="cart" /> Agregar
      </Button>
    </div>
  );
};

export default ProductCard;
