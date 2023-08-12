import { configureStore } from "@reduxjs/toolkit";
import showCartSlice from "./ShowcartReducer";

const store = configureStore({
  reducer: {
    show: showCartSlice.reducer,
  },
});

export default store;
