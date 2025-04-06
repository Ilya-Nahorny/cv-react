import { createSlice } from "@reduxjs/toolkit";

document.documentElement.classList.add("dark");

const darkModeSlice = createSlice({
  name: "theme",
  initialState: { theme: "dark" },
  reducers: {
    getLocaleStorageTheme(state) {
      if (localStorage.theme === "dark") {
        document.documentElement.classList.add("dark");
        state.theme = "dark";
      }
    },
    themeChange(state) {
      if (state.theme === "dark") {
        localStorage.removeItem("theme");
        document.documentElement.classList.remove("dark");
        state.theme = "light";
      } else {
        localStorage.theme = "dark";
        document.documentElement.classList.add("dark");
        state.theme = "dark";
      }
    },
  },
});

export const { getLocaleStorageTheme, themeChange } = darkModeSlice.actions;
export default darkModeSlice.reducer;
