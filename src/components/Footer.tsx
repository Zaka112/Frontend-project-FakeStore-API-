import React from "react";

import { Link } from "react-router-dom";
import { Paper, Typography } from "@mui/material";

export default function Footer() {
  return (
    <Paper >
      <div className="footer">
        <div className="box-1">
          <div>
            <h4>Features</h4>
            <div className="footer-links">
              <Link to="#">
                <Typography>Help Center</Typography>
              </Link>
             
              <Link to="#">Status</Link>
              <Link to="#">Contact Support</Link>
            </div>
          </div>
        </div>
        <div className="box-2">
          <div>
            <h4>Support</h4>
            <div className="footer-links">
              <Link to="#">Home</Link>
              <Link to="#">About</Link>
              <Link to="#">FAQs</Link>
              <Link to="#">Support</Link>
            </div>
          </div>
        </div>
        <div className="box-3">
          <div>
            <h4>Trending</h4>
            <div className="footer-links">
              <Link to="#">Shop</Link>
              <Link to="#">Portfolio</Link>
              
            </div>
          </div>
        </div>
        <div className="box-4">
          <div>
            <h4>Get to Know us</h4>
            <div className="footer-links">
            
              <Link to="#">eCommerce</Link>
              <Link to="#">Personal</Link>
            </div>
          </div>
        </div>
      </div>
    </Paper>
  );
}
