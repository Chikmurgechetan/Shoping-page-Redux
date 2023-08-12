import { configureStore } from "@reduxjs/toolkit";
import showCartSlice from "./ShowcartReducer";
import cartSlice from "./CartReducer";

const store = configureStore({
  reducer: {
    show: showCartSlice.reducer,
    cart: cartSlice.reducer
  },
});

export default store;
