import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  accepted: JSON.parse(localStorage.getItem("cookieAccepted")) || false,
};

const cookieSlice = createSlice({
  name: "cookie",
  initialState,
  reducers: {
    acceptCookie: (state) => {
      state.accepted = true;
      localStorage.setItem("cookieAccepted", true);
    },
    declineCookie: (state) => {
      state.accepted = false;
      localStorage.setItem("cookieAccepted", false);
    },
  },
});

export const { acceptCookie, declineCookie } = cookieSlice.actions;

export default cookieSlice.reducer;
