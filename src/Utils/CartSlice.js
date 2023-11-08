// import { createSlice } from "@reduxjs/toolkit";

// const CartSlice = createSlice({
//   name: "cart",
//   initialState: {
//     items: [],
//   },
//   reducers: {
//     addItem: (state, action) => {
//       state.items.push(action.payload);
//     },
//     removeItem: (state, action) => {
//       const indexOfItemToRemove = state.items.splice(action.payload, 1);
//       if (indexOfItemToRemove !== -1) {
//         state.items.splice(indexOfItemToRemove, 1);
//       }
//     },
//     clearCart: (state) => {
//       state.items = [];
//     },
//   },
// });
// export default CartSlice.reducer;
// export const { addItem, clearCart, removeItem } = CartSlice.actions;
import { createSlice } from "@reduxjs/toolkit";

const CartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addItem: (state, action) => {
      state.items.push(action.payload);
    },
    removeItem: (state, action) => {
      const itemToRemoveIndex = state.items.findIndex(
        (item) => item.id === action.payload
      );
      if (itemToRemoveIndex !== -1) {
        state.items.splice(itemToRemoveIndex, 1);
      }
    },
    clearCart: (state) => {
      state.items = [];
    },
  },
});

export default CartSlice.reducer;
export const { addItem, clearCart, removeItem } = CartSlice.actions;
