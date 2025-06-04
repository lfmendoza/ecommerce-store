import React from 'react';
import Text from '../../atoms/Text/Text';
import Button from '../../atoms/Button/Button';
import { formatPrice } from '../../../utils/helpers';

const CartSummary = ({
  subtotal,
  shipping = 0,
  total,
  onCheckout,
  hasError = false,
}) => {
  return (
    <div className="bg-gray-100 p-6 rounded-lg">
      <Text variant="h3" className="mb-4">
        Resumen
      </Text>

      <div className="space-y-2 mb-4">
        <div className="flex justify-between">
          <Text variant="body">Subtotal</Text>
          <Text variant="body">{formatPrice(subtotal)}</Text>
        </div>
        <div className="flex justify-between">
          <Text variant="body">Envío</Text>
          <Text variant="body">
            {shipping === 0 ? 'Gratis' : formatPrice(shipping)}
          </Text>
        </div>
        <div className="border-t border-gray-300 pt-2">
          <div className="flex justify-between">
            <Text variant="h4">Total</Text>
            <Text variant="h4" color="primary">
              {formatPrice(total)}
            </Text>
          </div>
        </div>
      </div>

      {hasError && (
        <Text variant="small" color="danger" className="mb-4">
          ERROR: El total excede $999.99
        </Text>
      )}

      <Button
        variant="primary"
        size="large"
        className="w-full"
        onClick={onCheckout}
        disabled={hasError}
      >
        Completar Compra
      </Button>
    </div>
  );
};

export default CartSummary;
