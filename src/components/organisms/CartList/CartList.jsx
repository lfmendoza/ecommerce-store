import React from "react";
import Text from "../../atoms/Text/Text";
import Button from "../../atoms/Button/Button";
import CartItem from "../../molecules/CartItem/CartItem";

const CartList = ({ items, onUpdateQuantity, onRemoveItem, onClearCart }) => {
  if (items.length === 0) {
    return (
      <div className="text-center py-12">
        <Text variant="h3" color="muted">
          Tu carrito está vacío
        </Text>
        <Text variant="body" color="muted" className="mt-2">
          Agrega algunos productos para comenzar
        </Text>
      </div>
    );
  }

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <Text variant="h3">Tu Carrito ({items.length} productos)</Text>
        <Button variant="danger" size="small" onClick={onClearCart}>
          Vaciar carrito
        </Button>
      </div>

      <div className="space-y-2">
        {items.map((item) => (
          <CartItem
            key={item.id}
            item={item}
            onUpdateQuantity={onUpdateQuantity}
            onRemove={onRemoveItem}
          />
        ))}
      </div>
    </div>
  );
};

export default CartList;
