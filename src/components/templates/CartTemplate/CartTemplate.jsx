import React from "react";
import Header from "../../organisms/Header/Header";
import CartList from "../../organisms/CartList/CartList";
import CartSummary from "../../molecules/CartSummary/CartSummary";
import Button from "../../atoms/Button/Button";

const CartTemplate = ({
  cartItems,
  subtotal,
  total,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart,
  onCheckout,
  onContinueShopping,
}) => {
  const hasError = total > 999.99;

  return (
    <div className="min-h-screen bg-gray-50">
      <Header cartItemsCount={cartItems.length} onCartClick={() => {}} />

      <main className="max-w-6xl mx-auto p-4">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold">Tu Carrito de Compras</h1>
          <Button variant="ghost" onClick={onContinueShopping}>
            Seguir comprando
          </Button>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          <div className="lg:w-2/3">
            <CartList
              items={cartItems}
              onUpdateQuantity={onUpdateQuantity}
              onRemoveItem={onRemoveItem}
              onClearCart={onClearCart}
            />
          </div>

          {cartItems.length > 0 && (
            <div className="lg:w-1/3">
              <CartSummary
                subtotal={subtotal}
                total={total}
                onCheckout={onCheckout}
                hasError={hasError}
              />
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default CartTemplate;
