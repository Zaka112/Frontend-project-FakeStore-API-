import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type InitialState = {
  value: string;
};
const initialState: InitialState = {
  value: "",
};
const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    searchProduct: (state, action: PayloadAction<string>) => {
      state.value = action.payload;
    },
  },
});
export const searchActions = searchSlice.actions;
const searchReducer = searchSlice.reducer;
export default searchReducer;
