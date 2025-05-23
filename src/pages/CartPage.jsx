import React, { useState } from "react";
import CartTemplate from "../components/templates/CartTemplate/CartTemplate";

const CartPage = () => {
  // Datos de ejemplo para el carrito
  const [cartItems] = useState([
    {
      id: 1,
      name: "Smartphone Pro Max",
      price: 899.99,
      image: "https://via.placeholder.com/300x300/007bff/ffffff?text=Phone",
      quantity: 2,
    },
    {
      id: 2,
      name: "Auriculares Inalámbricos",
      price: 199.99,
      image:
        "https://via.placeholder.com/300x300/6c757d/ffffff?text=Headphones",
      quantity: 1,
    },
  ]);

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const total = subtotal; // Sin impuestos ni envío por ahora

  const handleUpdateQuantity = (itemId, newQuantity) => {
    console.log("Update quantity:", itemId, newQuantity);
  };

  const handleRemoveItem = (itemId) => {
    console.log("Remove item:", itemId);
  };

  const handleClearCart = () => {
    console.log("Clear cart");
  };

  const handleCheckout = () => {
    console.log("Proceed to checkout");
  };

  const handleContinueShopping = () => {
    console.log("Continue shopping");
  };

  return (
    <CartTemplate
      cartItems={cartItems}
      subtotal={subtotal}
      total={total}
      onUpdateQuantity={handleUpdateQuantity}
      onRemoveItem={handleRemoveItem}
      onClearCart={handleClearCart}
      onCheckout={handleCheckout}
      onContinueShopping={handleContinueShopping}
    />
  );
};

export default CartPage;
