import React, { createContext, useState } from "react";

const ProductContext = createContext();

const Product = (props) => {
  const [price, setPrice] = useState();
  return (
    <ProductContext.Provider value={{ price, setPrice }}>
      {props.children}
    </ProductContext.Provider>
  );
};

export { Product, ProductContext };
