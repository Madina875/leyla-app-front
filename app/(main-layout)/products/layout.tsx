import React, { ReactNode } from "react";

const ProductsLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <h2>Products</h2>
      <main className="min-h-[70vh]">{children}</main>
    </div>
  );
};

export default ProductsLayout;
