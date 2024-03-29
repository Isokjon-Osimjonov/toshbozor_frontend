/* eslint-disable react/prop-types */
import "./products.css";
import { Outlet } from "react-router-dom";

const Products = () => {
  return (
    <div>
      <Outlet></Outlet>
    </div>
  );
};

export default Products;
