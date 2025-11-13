import { memo } from "react";
import ProductList from "../../../features/products/components/ProductList";

const Products = () => {
  return (
    <div>
      <h2>
        <ProductList />
      </h2>
    </div>
  );
};

export default memo(Products);
