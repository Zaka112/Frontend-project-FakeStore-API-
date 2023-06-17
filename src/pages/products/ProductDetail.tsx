import React, { useEffect, useState } from "react";

import { Link, useParams } from "react-router-dom";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton, { IconButtonProps } from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import AddLocationIcon from "@mui/icons-material/AddLocation";
import { Box, Button, CircularProgress, Paper } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";

import { Cart, Product } from "../../types/types";
import { AppDispatch, RootState } from "../../redux/store";
import { useDispatch, useSelector } from "react-redux";
import productDetail from "../../redux/slice/productDetail";
import { getProductDetailData } from "../../redux/thunk/products";
import background from "../../assets/bg.svg";
import { cartListActions } from "../../redux/slice/cart";
import { productActions } from "../../redux/slice/products";

interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function ProductDetail() {
  const { id } = useParams<{ id: string }>();
  const productDetail = useSelector(
    (state: RootState) => state.productDetail.product
  );
  const isLoading = useSelector(
    (state: RootState) => state.productDetail.isLoading
  );

  const dispatchApp = useDispatch<AppDispatch>();
  const productDetailURL = `https://api.escuelajs.co/api/v1/products/${id}?fullText=true`;
  const dispatch = useDispatch();
  function addFavorite(product: Product) {
    dispatch(productActions.addFavoriteProducts(product));
  }
  function addToCart(product: Product) {
    dispatch(cartListActions.addToCart(product));
  }
  const [expanded, setExpanded] = useState<boolean>(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  useEffect(() => {
    dispatchApp(getProductDetailData(productDetailURL));
  }, [productDetailURL]);

  if (isLoading) {
    return (
      <div>
        <CircularProgress />
      </div>
    );
  } else
    return (
      <Paper  sx={{ display:"flex", marginTop:5, justifyContent:"center",  backgroundImage:`url(${background})`}}>
        <Box 
          key={productDetail.id}
          sx={{ 
            margin: 15,
            marginTop: 5,
          }}
        >
          <Card sx={{ maxWidth: 300, minHeight: 320 }}>
      
        <CardMedia
          component="img"
          alt="green iguana"
          height="140"
          image={productDetail.images[0]}
        />
     
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {productDetail.title}
        </Typography>

        <Typography gutterBottom variant="body2" component="div">
          Price: {productDetail.price} $
        </Typography>
        <Typography variant="body2" color="text.secondary">
        {productDetail.title} belongs to {productDetail.category.name} category.
        </Typography>
        
          <Button size="small" style={{ color: "black" }} onClick={()=> addToCart(productDetail)}>
            Add to cart
          </Button>
       
      </CardContent>

      <IconButton
        aria-label="add to favorites"
        onClick={() => addFavorite(productDetail)}
      >
        <FavoriteIcon />
      </IconButton>
    </Card></Box>
      </Paper>
    );
}
