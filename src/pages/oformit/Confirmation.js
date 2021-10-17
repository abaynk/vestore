import { getDownloadURL, ref } from "@firebase/storage";
import React, { useContext, useEffect } from "react";
import Button from "../../components/buttons/Button";
import { ProductContext } from "../../context/ProductContext";
import { storage } from "../../firebase";
import "./Confirmation.css";

const Confirmation = () => {
  const { product } = useContext(ProductContext);
  const img = product.img;
  useEffect(() => {
    console.log(product);
    getDownloadURL(ref(storage, img))
      .then((url) => {
        // Or inserted into an <img> element
        const img = document.getElementById("myimg2");
        img.setAttribute("src", url);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);
  return (
    <div className="confirmation_root">
      <div className="confirmation_container">
        <p id="success">Кредит одобрен!</p>
        <img id="myimg2" alt="text" />
        <h3>{product.title}</h3>
        <h3 id="conf_price">{product.price} тенге</h3>
      </div>
      <div className="background_secondary">
        <p className="credit_label">ежемесячный платеж</p>
        <p className="initialPayment">{product.payment.monthlyPayment} тг</p>
      </div>
      <div className="confirmation_container">
        <div>
          <p className="label">срок кредита</p>
          <p className="payment_info">{product.payment.monthsCount} мес</p>
        </div>
        {product.payment.vznos && (
          <div>
            <p className="label">первоначальный взнос</p>
            <p className="payment_info">{product.payment.vznos} тг</p>
          </div>
        )}
      </div>
      <div className="sms_button">
        <Button text="получить QR-код" link="/successQR" />
      </div>
    </div>
  );
};

export default Confirmation;
