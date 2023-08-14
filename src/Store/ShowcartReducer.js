import { createSlice } from "@reduxjs/toolkit";

const showCartSlice = createSlice({
  name: "show",
  initialState: { cartVisability: false, notification: null },
  reducers: {
    cartShow(state) {
      state.cartVisability = !state.cartVisability;
    },

    setNotification(state,action){
      state.notification = {
        status: action.payload.status,
        title: action.payload.title,
        message: action.payload.message,
      }
    }
  },
});
export const showCartActions = showCartSlice.actions;
export default showCartSlice;
