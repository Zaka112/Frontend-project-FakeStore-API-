import React from "react";

import { Paper } from "@mui/material";
import { Carousel } from "react-responsive-carousel";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <Paper sx={{ marginTop: 10 }}>
      <Carousel showThumbs={false} showStatus={false} autoPlay>
        <Link to="/productlist">
          <Paper>
            <img
              alt="foot wear"
              src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
            />
          </Paper>
        </Link>
        <Link to="/productlist">
          <Paper>
            <img
              alt="head fones"
              src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=750&q=80"
            />
          </Paper>
        </Link>
        <Link to="/productlist">
          <Paper>
            <img
              alt="foot wear"
              src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
            />
          
          </Paper>
        </Link>
      </Carousel>
    </Paper>
  );
}
