import { createSlice } from "@reduxjs/toolkit";

const showCartSlice = createSlice({
  name: "show",
  initialState: { cartVisability: false },
  reducers: {
    cartShow(state) {
      state.cartVisability = !state.cartVisability;
    },
  },
});
export const showCartActions = showCartSlice.actions;
export default showCartSlice;
