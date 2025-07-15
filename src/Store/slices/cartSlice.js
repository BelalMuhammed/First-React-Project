import { createSlice } from "@reduxjs/toolkit";

const loadCartFromLocalStorage = () => {
  try {
    const saved = localStorage.getItem("cart");
    const parsed = saved ? JSON.parse(saved) : [];
    return Array.isArray(parsed)
      ? parsed.filter((item) => item && item.id)
      : [];
  } catch (error) {
    console.error("Failed to parse cart from localStorage:", error);
    return [];
  }
};

const initialState = {
  cartItems: loadCartFromLocalStorage(),
};
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const product = action.payload;
      const existing = state.cartItems.find((item) => item.id === product.id);
      if (existing) {
        existing.count += 1;
      } else {
        state.cartItems.push({ ...product, count: 1 });
      }
      console.log(state.cartItems);
      
    },
    removeFromCart: (state, action) => {
      const id = action.payload;
      state.cartItems = state.cartItems
        .map((item) =>
          item.id === id ? { ...item, count: item.count - 1 } : item
        )
        .filter((item) => item.count > 0);
    },
    clearCart: (state) => {
      state.cartItems = [];
    },
  },
});

export const { addToCart,removeFromCart,clearCart } = cartSlice.actions;
export default cartSlice.reducer;
