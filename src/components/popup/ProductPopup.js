import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { storage } from "../../firebase";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";
import "./ProductPopup.css";
import { ref, getDownloadURL } from "firebase/storage";

const ProductPopup = ({ product, id }) => {
  const [imgReady, setImgReady] = useState(false);
  useEffect(() => {
    getDownloadURL(ref(storage, product.img))
      .then((url) => {
        // Or inserted into an <img> element
        const img = document.getElementById("myimg");
        img.setAttribute("src", url);
        setImgReady(true);
      })
      .catch((error) => {
        console.error(error);
      });
  });
  if (!product) {
    return (
      <div className="popup_root">
        <Loader
          type="ThreeDots"
          color="#d83232"
          height={100}
          width={100}
          timeout={3000} //3 secs
        />
        <Link to={`/products/${id}`} className="popup_button">
          <button className="popup_button">купить</button>
        </Link>
      </div>
    );
  }

  return (
    <div className="popup_root">
      <div className="popup_details">
        <h2 className="popup_title">{product.title}</h2>
        <p id="popup_price">{product.price} тенге</p>
      </div>
      <div style={imgReady ? { display: "block" } : { display: "none" }}>
        <img id="myimg" alt="text" />
      </div>
      <div style={!imgReady ? { display: "block" } : { display: "none" }}>
        <Loader
          type="ThreeDots"
          color="#d83232"
          height={100}
          width={100}
          timeout={3000} //3 secs
        />
      </div>

      <Link to={`/products/${id}`} className="popup_button">
        <button className="popup_button">купить</button>
      </Link>
    </div>
  );
};

export default ProductPopup;

// store
// title
// price
// img
// description
// code
// type
// brand
// barcode
