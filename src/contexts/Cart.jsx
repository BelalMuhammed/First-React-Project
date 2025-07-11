// src/context/CartContext.js
import React, { createContext, useContext, useEffect, useState } from 'react';

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState(() => {
    try {
      const saved = localStorage.getItem('cart');
      const parsed = saved ? JSON.parse(saved) : [];
      // ✅ Filter out null/undefined/broken items
      return Array.isArray(parsed) ? parsed.filter(item => item && item.id) : [];
    } catch (error) {
      console.error('Failed to parse cart from localStorage:', error);
      return [];
    }
  });

  // 🧠 Sync to localStorage
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cartItems));
  }, [cartItems]);

  // ➕ Add to cart
  const addToCart = (product) => {
    setCartItems((prevItems) => {
      const existing = prevItems.find((item) => item.id === product.id);
      if (existing) {
        return prevItems.map((item) =>
          item.id === product.id ? { ...item, count: item.count + 1 } : item
        );
      } else {
        return [...prevItems, { ...product, count: 1 }];
      }
    });
  };

  // ➖ Remove from cart (decrease count or remove if count = 1)
  const removeFromCart = (productId) => {
    setCartItems((prevItems) =>
      prevItems
        .map((item) =>
          item.id === productId
            ? { ...item, count: item.count - 1 }
            : item
        )
        .filter((item) => item.count > 0)
    );
  };

  // ❌ Clear all items
  const clearCart = () => {
    setCartItems([]);
  };

  return (
    <CartContext.Provider
      value={{ cartItems, addToCart, removeFromCart, clearCart }}
    >
      {children}
    </CartContext.Provider>
  );
}

// 🔁 Custom hook
export function useCart() {
  return useContext(CartContext);
}
