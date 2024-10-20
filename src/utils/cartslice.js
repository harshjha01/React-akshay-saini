import { createSlice } from "@reduxjs/toolkit";
const cartslice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    additem: (state, action) => {
      state.items.push(action.payload);
    },
    removeitem: (state, action) => {
      state.items.pop();
    },
    emptycart: (state, action) => {
      state.items.length = 0;
    },
  },
});
export const { additem, removeitem, emptycart } = cartslice.actions;
export default cartslice.reducer;
