import React from "react";

import { Paper, Typography } from "@mui/material";
import { Carousel } from "react-responsive-carousel";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <Paper sx={{ marginTop: 10 }}>
    
      <Carousel showThumbs={false} showStatus={false} autoPlay>
        <Link to="/productlist">
          <div>
            <img
              alt=""
              src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
            />
            <Typography>Headfone</Typography>
          </div>
        </Link>
        <Link to="/productlist">
          <div>
            <img
              alt=""
              src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=750&q=80"
            />

            <Typography>Footwear</Typography>
          </div>
        </Link>
        <Link to="/productlist">
          <div>
            <img
              alt=""
              src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
            />
            <Typography>Headfone</Typography>
          </div>
        </Link>
      </Carousel>
    </Paper>
  );
}
