import { createContext, useContext, useReducer, useMemo } from 'react';

import {
  round,
  cartInitialState,
  cartReducer,
  CART_ACTIONS,
} from './CartContext.utils';

export const CartContext = createContext(cartInitialState);

export function CartProvider({ children }) {
  const [state, dispatch] = useReducer(cartReducer, cartInitialState);

  const cartTotals = useMemo(() => {
    const subtotal = round(
      state.items.reduce((s, i) => s + i.price * i.quantity, 0)
    );
    const shipping = 0;
    const total = round(subtotal + shipping);
    const itemCount = state.items.reduce((sum, item) => sum + item.quantity, 0);

    return { subtotal, shipping, total, itemCount };
  }, [state.items]);

  return (
    <CartContext.Provider value={{ state, dispatch, cartTotals, CART_ACTIONS }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
}
