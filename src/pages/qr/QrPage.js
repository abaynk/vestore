import React, { useContext } from "react";
import { ProductContext } from "../../context/ProductContext";
import { ReactComponent as HomeLogo } from "../../homecredit.svg";
import QRCode from "qrcode.react";
import "./QrPage.css";
import Button from "../../components/buttons/Button";

const QrPage = () => {
  const { product } = useContext(ProductContext);

  return (
    <div className="qr_root">
      <div className="qr_itself">
        <p id="success">Покупка успешно завершена</p>
        <QRCode value={product.title} style={{ margin: "28px 0 16px 0" }} />
      </div>
      <div className="qr_container">
        <h2 id="qr_title">{product.title}</h2>
        <div className="flexrow">
          <div className="flexcolumn">
            <p className="qrlabel">заказ №</p>
            <p>121124</p>
          </div>
          <div>
            <p className="qrlabel">Оформлен в кредит</p>
            <HomeLogo />
          </div>
        </div>
      </div>
      <div className="sms_button">
        <Button text="закрыть" link="/" />
      </div>
    </div>
  );
};

export default QrPage;
