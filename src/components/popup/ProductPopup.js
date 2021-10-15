import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { storage } from "../../firebase";

import "./ProductPopup.css";
import { ref, getDownloadURL } from "firebase/storage";

const ProductPopup = ({ product, id }) => {
  useEffect(() => {
    getDownloadURL(ref(storage, product.img))
      .then((url) => {
        // Or inserted into an <img> element
        const img = document.getElementById("myimg");
        img.setAttribute("src", url);
      })
      .catch((error) => {
        console.error(error);
      });
  });
  if (!product) {
    return <p>Loading..</p>;
  }
  return (
    <div className="popup_root">
      <h2 className="popup_title">{product.title}</h2>
      <img id="myimg" alt="text" />

      <button className="popup_button">
        <Link to={`/products/${id}`}>купить</Link>
      </button>
    </div>
  );
};

export default ProductPopup;

// store
// title
// price
// img
// description
// id
// category
// brand
// barcode
