import { productActions } from "../slice/products";
import { AppDispatch } from "../store";
import { productDetailActions } from "../slice/productDetail";

const productsURL = "https://api.escuelajs.co/api/v1/products";

export function getProductsData() {
  return async (dispatch: AppDispatch) => {
    const response = await fetch(productsURL);
    const fetchedProducts = await response.json();
    dispatch(productActions.getProductsData(fetchedProducts));
  };
}

export function getProductDetailData(productURL: string) {
  return async (dispatch: AppDispatch) => {
    const response = await fetch(productURL);
    const fetchedProductDetail = await response.json();
    dispatch(productDetailActions.getProductDetail(fetchedProductDetail));
  };
}
