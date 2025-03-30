import { configureStore } from "@reduxjs/toolkit";
import darkModeSlice from "./darkModeSlice";
import toggleMenuSlice from "./toggleMenuSlice";
import cartReducer from "../redux/cartSlice";
import cookieReducer from "../redux/cookieSlice";

export const store = configureStore({
  reducer: {
    theme: darkModeSlice,
    menu: toggleMenuSlice,
    cart: cartReducer,
    cookie: cookieReducer,
  },
});
