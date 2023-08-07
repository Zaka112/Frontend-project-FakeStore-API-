import { createSlice } from "@reduxjs/toolkit";

type Theme = {
  theme: "light" | "dark";
};

export const initialState: Theme = {
  theme: "dark",
};

const themeSlice = createSlice({
  name: "toggletheme",
  initialState,
  reducers: {
    toggleTheme: (state) => {
      state.theme === "light"
        ? (state.theme = "dark")
        : (state.theme = "light");
    },
  },
});

export const themeReducer = themeSlice.reducer;
const toggleThemeActions = themeSlice.actions;
export default toggleThemeActions;
