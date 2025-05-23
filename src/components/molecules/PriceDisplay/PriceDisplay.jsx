import React from "react";
import Text from "../../atoms/Text/Text";
import { formatPrice, calculateDiscount } from "../../../utils/helpers";

const PriceDisplay = ({ price, originalPrice, showDiscount = true }) => {
  const discount = calculateDiscount(originalPrice, price);

  return (
    <div className="flex items-center space-x-2">
      <Text variant="h4" color="primary">
        {formatPrice(price)}
      </Text>
      {originalPrice && (
        <>
          <Text variant="small" color="muted" className="line-through">
            {formatPrice(originalPrice)}
          </Text>
          {showDiscount && discount > 0 && (
            <Text variant="small" color="success">
              -{discount}%
            </Text>
          )}
        </>
      )}
    </div>
  );
};

export default PriceDisplay;
