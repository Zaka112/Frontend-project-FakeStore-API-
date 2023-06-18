import React from "react";

import { Paper, TextField } from "@mui/material";
import { useDispatch } from "react-redux";

import { searchActions } from "../redux/slice/search";

export default function SearchForm() {
  const dispatch = useDispatch();
  function findProduct(event: React.ChangeEvent<HTMLInputElement>) {
    dispatch(searchActions.searchProduct(event.target.value));
  }
  return (
    <div>
      <form action="">
        <TextField
          id="standard-basic"
          label="Search"
          variant="standard"
          helperText="Search Product by Name"
          onChange={findProduct}
        />
      </form>
    </div>
  );
}
