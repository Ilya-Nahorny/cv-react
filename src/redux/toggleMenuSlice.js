import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isActive: JSON.parse(localStorage.getItem("isActive")) || true,
  isSideMenuActive:
    JSON.parse(localStorage.getItem("isSideMenuActive")) || false,
};

const toggleMenuSlice = createSlice({
  name: "menu",
  initialState,
  reducers: { 
    toggleMenu(state) {
      state.isActive = !state.isActive;
      localStorage.setItem("isActive", JSON.stringify(state.isActive));
    },
    toggleSideMenu(state) {
      state.isSideMenuActive = !state.isSideMenuActive;
      localStorage.setItem(
        "isSideMenuActive",
        JSON.stringify(state.isSideMenuActive)
      );
    },
  },
});

export const { toggleMenu, toggleSideMenu } = toggleMenuSlice.actions;
export default toggleMenuSlice.reducer;
