import { createSlice } from "@reduxjs/toolkit";

type InitialState = {
  theme: "light" | "dark";
};

export const initialState: InitialState = {
  theme: "light",
};

const themeSlice = createSlice({
  name: "toggletheme",
  initialState,
  reducers: {
    toggleTheme: (state) => {
      if (state.theme === "light") {
        state.theme = "dark";
        return;
      }
      if (state.theme === "dark") {
        state.theme = "light";
      }
    },
  },
});

export const themeReducer = themeSlice.reducer;
const toggleThemeActions = themeSlice.actions;
export default toggleThemeActions;
