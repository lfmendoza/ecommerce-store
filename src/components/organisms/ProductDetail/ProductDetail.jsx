import React, { useState } from "react";
import Image from "../../atoms/Image/Image";
import Text from "../../atoms/Text/Text";
import Button from "../../atoms/Button/Button";
import Icon from "../../atoms/Icon/Icon";
import StarRating from "../../molecules/StarRating/StarRating";
import PriceDisplay from "../../molecules/PriceDisplay/PriceDisplay";
import QuantityControl from "../../molecules/QuantityControl/QuantityControl";

const ProductDetail = ({ product, onAddToCart, onToggleFavorite }) => {
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);

  const handleAddToCart = () => {
    onAddToCart?.({ ...product, quantity });
  };

  return (
    <div className="flex flex-col md:flex-row gap-8 p-6">
      <div className="md:w-1/2">
        <Image
          src={product.images?.[selectedImage] || product.image}
          alt={product.name}
          className="w-full h-96 rounded-lg mb-4"
        />

        {product.images && product.images.length > 1 && (
          <div className="flex space-x-2">
            {product.images.map((img, index) => (
              <button
                key={index}
                onClick={() => setSelectedImage(index)}
                className={`border-2 rounded-lg overflow-hidden ${
                  selectedImage === index
                    ? "border-blue-500"
                    : "border-gray-200"
                }`}
              >
                <Image
                  src={img}
                  alt={`${product.name} ${index + 1}`}
                  className="w-16 h-16"
                />
              </button>
            ))}
          </div>
        )}
      </div>

      <div className="md:w-1/2">
        <div className="flex justify-between items-start mb-2">
          <Text variant="h2">{product.name}</Text>
          <Button
            variant="ghost"
            size="small"
            onClick={() => onToggleFavorite?.(product.id)}
          >
            <Icon name="heart" />
          </Button>
        </div>

        <StarRating rating={product.rating} reviews={product.reviews} />

        <div className="mt-4 mb-6">
          <PriceDisplay
            price={product.price}
            originalPrice={product.originalPrice}
          />
        </div>

        <Text variant="body" color="muted" className="mb-6">
          {product.description}
        </Text>

        <div className="flex items-center space-x-4 mb-6">
          <Text variant="body">Cantidad:</Text>
          <QuantityControl
            quantity={quantity}
            onIncrease={() => setQuantity((q) => Math.min(q + 1, 9))}
            onDecrease={() => setQuantity((q) => Math.max(q - 1, 1))}
          />
        </div>

        <Button
          variant="primary"
          size="large"
          className="w-full"
          onClick={handleAddToCart}
        >
          Agregar al Carrito
        </Button>
      </div>
    </div>
  );
};

export default ProductDetail;
