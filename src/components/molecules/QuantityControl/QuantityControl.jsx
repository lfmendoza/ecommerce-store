import React from "react";
import Button from "../../atoms/Button/Button";
import Text from "../../atoms/Text/Text";
import Icon from "../../atoms/Icon/Icon";

const QuantityControl = ({
  quantity,
  onIncrease,
  onDecrease,
  maxQuantity = 9,
  minQuantity = 1,
}) => {
  return (
    <div className="flex items-center space-x-2">
      <Button
        variant="secondary"
        size="small"
        onClick={onDecrease}
        disabled={quantity <= minQuantity}
      >
        <Icon name="minus" />
      </Button>
      <Text variant="body" className="min-w-8 text-center">
        {quantity}
      </Text>
      <Button
        variant="secondary"
        size="small"
        onClick={onIncrease}
        disabled={quantity >= maxQuantity}
      >
        <Icon name="plus" />
      </Button>
    </div>
  );
};

export default QuantityControl;
