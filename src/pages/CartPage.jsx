import React from 'react';
import { useNavigate } from 'react-router-dom';
import CartTemplate from '../components/templates/CartTemplate/CartTemplate';
import { useCart } from '../contexts/CartContext';

const CartPage = () => {
  const navigate = useNavigate();
  const { state, dispatch, cartTotals } = useCart();

  const handleUpdateQuantity = (itemId, newQuantity) => {
    if (newQuantity <= 0) {
      dispatch({ type: 'REMOVE_ITEM', payload: { id: itemId } });
    } else {
      dispatch({
        type: 'UPDATE_QUANTITY',
        payload: { id: itemId, quantity: newQuantity },
      });
    }
  };

  const handleRemoveItem = (itemId) => {
    dispatch({ type: 'REMOVE_ITEM', payload: { id: itemId } });
  };

  const handleClearCart = () => {
    dispatch({ type: 'CLEAR_CART' });
  };

  const handleCheckout = () => {
    if (cartTotals.total <= 999.99) {
      alert('¡Compra realizada con éxito!');
      dispatch({ type: 'CLEAR_CART' });
      navigate('/');
    }
  };

  const handleContinueShopping = () => {
    navigate('/');
  };

  return (
    <CartTemplate
      cartItems={state.items}
      subtotal={cartTotals.subtotal}
      total={cartTotals.total}
      onUpdateQuantity={handleUpdateQuantity}
      onRemoveItem={handleRemoveItem}
      onClearCart={handleClearCart}
      onCheckout={handleCheckout}
      onContinueShopping={handleContinueShopping}
    />
  );
};

export default CartPage;
