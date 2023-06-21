import React from "react";

import { Link } from "react-router-dom";
import { Box, Paper } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";

export default function Footer() {
  return (
    <Paper
      sx={{
        display: "flex",
        paddingTop: 1,
        flexDirection: "column",
        justifyContent: "center",
        minHeight: 50,
      }}
    >
      <Box gap={1}>
        <p>copyright &copy; BuY !T</p> <FacebookIcon />
        <InstagramIcon />
        <TwitterIcon />
      </Box>
      <Box>
        <div className="footer-menu">
          <ul className="f-menu">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/productlist">Products</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
        </div>
      </Box>
      <Box></Box>
    </Paper>
  );
}
