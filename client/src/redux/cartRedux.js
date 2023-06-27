import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    products: [],
    quantity: 0,
    total: 0,
  },
  reducers: {
    addProduct: (state, action) => {
      state.quantity += 1;
      state.products.push(action.payload);
      state.total += action.payload.price * action.payload.quantity;
    },
    removeProduct: (state, action) => {
      const { id, price, quantity } = action.payload;

      if (state.quantity > 0) {
        state.quantity -= 1;
        state.products = state.products.filter((product) => product.id !== id);
        state.total -= price * quantity;
      }
    },
    emptyCart: (state) => {
      state.products = [];
      state.quantity = 0;
      state.total = 0;
    },
    decreaseQuantity: (state, action) => {
      const productId = action.payload;
      const product = state.products.find((p) => p.id === productId);

      if (product && product.quantity > 1) {
        product.quantity -= 1;
        state.total -= product.price;
      } else {
        state.products = state.products.filter((p) => p.id !== productId);
        state.total -= product.price;
      }
    },

    increaseQuantity: (state, action) => {
      const productId = action.payload;
      const product = state.products.find((p) => p.id === productId);

      if (product) {
        const updatedProduct = { ...product };
        updatedProduct.quantity += 1;

        state.products = state.products.map((p) =>
          p.id === productId ? updatedProduct : p
        );

        state.total += product.price;
      }
    },
  },
});

export const {
  addProduct,
  removeProduct,
  emptyCart,
  decreaseQuantity,
  increaseQuantity,
} = cartSlice.actions;

export default cartSlice.reducer;
