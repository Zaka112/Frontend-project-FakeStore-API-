import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type InitialState = {
  searchedString: string;
};
const initialState: InitialState = {
  searchedString: "",
};
const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    searchProduct: (state, action: PayloadAction<string>) => {
      state.searchedString = action.payload;
    },
  },
});
export const searchActions = searchSlice.actions;
const searchReducer = searchSlice.reducer;
export default searchReducer;
