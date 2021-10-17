import React, { createContext, useState } from "react";

const ProductContext = createContext();

const Product = (props) => {
  const [product, setProduct] = useState();
  return (
    <ProductContext.Provider value={{ product, setProduct }}>
      {props.children}
    </ProductContext.Provider>
  );
};

export { Product, ProductContext };
