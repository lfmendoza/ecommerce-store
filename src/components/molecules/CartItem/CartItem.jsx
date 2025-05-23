import React from "react";
import Image from "../../atoms/Image/Image";
import Text from "../../atoms/Text/Text";
import Button from "../../atoms/Button/Button";
import Icon from "../../atoms/Icon/Icon";
import QuantityControl from "../QuantityControl/QuantityControl";
import { formatPrice } from "../../../utils/helpers";

const CartItem = ({ item, onUpdateQuantity, onRemove }) => {
  return (
    <div className="flex items-center space-x-4 py-4 border-b border-gray-200">
      <Image
        src={item.image}
        alt={item.name}
        className="w-20 h-20 rounded-lg"
      />

      <div className="flex-grow">
        <Text variant="h4" className="mb-1">
          {item.name}
        </Text>
        <Text variant="body" color="primary">
          {formatPrice(item.price)}
        </Text>
      </div>

      <div className="flex items-center space-x-4">
        <QuantityControl
          quantity={item.quantity}
          onIncrease={() => onUpdateQuantity?.(item.id, item.quantity + 1)}
          onDecrease={() => onUpdateQuantity?.(item.id, item.quantity - 1)}
        />

        <Button
          variant="danger"
          size="small"
          onClick={() => onRemove?.(item.id)}
        >
          <Icon name="delete" />
        </Button>
      </div>

      <Text variant="h4" color="primary" className="min-w-20 text-right">
        {formatPrice(item.price * item.quantity)}
      </Text>
    </div>
  );
};

export default CartItem;
