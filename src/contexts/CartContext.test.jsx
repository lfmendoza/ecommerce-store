import { renderHook, act } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { CartProvider, useCart } from './CartContext';

const wrapper = ({ children }) => <CartProvider>{children}</CartProvider>;

describe('CartContext', () => {
  it('adds item to cart', () => {
    const { result } = renderHook(() => useCart(), { wrapper });

    act(() => {
      result.current.dispatch({
        type: 'ADD_ITEM',
        payload: { id: 1, name: 'Test Product', price: 99.99, quantity: 1 },
      });
    });

    expect(result.current.state.items).toHaveLength(1);
    expect(result.current.cartTotals.total).toBe(99.99);
  });

  it('updates item quantity', () => {
    const { result } = renderHook(() => useCart(), { wrapper });

    act(() => {
      result.current.dispatch({
        type: 'ADD_ITEM',
        payload: { id: 1, name: 'Test Product', price: 99.99, quantity: 1 },
      });
    });

    act(() => {
      result.current.dispatch({
        type: 'UPDATE_QUANTITY',
        payload: { id: 1, quantity: 3 },
      });
    });

    expect(result.current.state.items[0].quantity).toBe(3);
    expect(result.current.cartTotals.total).toBe(299.97);
  });

  it('removes item from cart', () => {
    const { result } = renderHook(() => useCart(), { wrapper });

    act(() => {
      result.current.dispatch({
        type: 'ADD_ITEM',
        payload: { id: 1, name: 'Test Product', price: 99.99, quantity: 1 },
      });
    });

    act(() => {
      result.current.dispatch({
        type: 'REMOVE_ITEM',
        payload: { id: 1 },
      });
    });

    expect(result.current.state.items).toHaveLength(0);
    expect(result.current.cartTotals.total).toBe(0);
  });
});
