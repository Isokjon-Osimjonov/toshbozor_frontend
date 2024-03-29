import { useEffect, useState } from "react";
import { FETCH_PRODUCTS } from "../api/requests";
import { FETCH_STATUSES } from "./fetch-statuses";

const ProductsFetcher = ({ endpoint }) => {
  const [products, setProducts] = useState([[]]);
  const [error, setError] = useState(null);
  const [status, setStatus] = useState(FETCH_STATUSES.IDLE);

  const fetchProducts = async () => {
    try {
      setStatus(FETCH_STATUSES.LOADING);
      const response = await FETCH_PRODUCTS(endpoint);
      const productsData = response.data;

      if (productsData) {
        setProducts(productsData);
        setStatus(FETCH_STATUSES.SUCCESS);
        setError(null);
      }
    } catch (error) {
      setStatus(FETCH_STATUSES.ERROR);
      setError(error.message);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, [endpoint]);

  return { products, error, status };
};

export default ProductsFetcher;
