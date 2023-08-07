import React, { useState } from "react";

import { Paper, TextField } from "@mui/material";
import { useDispatch } from "react-redux";

import { searchActions } from "../redux/slices/search";

export default function SearchForm() {
  const [userInput, setUserInput] = useState("");
  const dispatch = useDispatch();
  function findProduct(event: React.ChangeEvent<HTMLInputElement>) {
    setUserInput(event.target.value);
    dispatch(searchActions.searchProduct(userInput));
  }
  return (
    <Paper>
      <form>
        <TextField
          id="standard-basic"
          label="Search"
          variant="standard"
          helperText="Search Product by Name"
          onChange={findProduct}
        />
      </form>
    </Paper>
  );
}
