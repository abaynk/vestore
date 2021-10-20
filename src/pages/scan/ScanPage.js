import React, { useContext, useEffect, useState } from "react";
import BarcodeScannerComponent from "react-qr-barcode-scanner";
import { ReactComponent as Corner } from "../../corner.svg";
import { ReactComponent as Shutter } from "../../shutter.svg";
import Lottie from "lottie-react";
import animationData from "../../lf30_editor_p6izlfvs.json";
import "./ScanPage.css";
import { useHistory } from "react-router";
import { ProductContext } from "../../context/ProductContext";

const ScanPage = () => {
  const { product } = useContext(ProductContext);

  const [link, setLink] = useState("");
  const [stop, setStop] = useState(false);
  const [lottie, setLottie] = useState(false);
  const history = useHistory();
  const handleSnap = (e) => {
    e.preventDefault();
    setStop(true);
    // setTimeout(() => {
    //   setLottie(true);
    // }, 3000);
    handleRedirect();
  };
  const handleRedirect = () => {
    // setLottie(false);
    setTimeout(() => {
      history.push("/register");
    }, 3000);
  };
  useEffect(() => {
    console.log(product);
  }, []);
  return (
    <div className="root">
      <div className="video_container">
        <div className="scan_wrapper">
          <p id="navedite">
            наведите камеру для сканирования удостоверения личности
          </p>
          <Corner id="topleft" />
          <Corner id="topright" />
          <Corner id="bottomleft" />
          <Corner id="bottomright" />
          <Shutter id="shutter" onClick={(e) => handleSnap(e)} />
          <p id="or">или</p>
          <button id="gallery">Выберите из галереи</button>
          {lottie && (
            <div id="lottie_container">
              <Lottie
                animationData={animationData}
                onLoopComplete={() => handleRedirect()}
                id="lottie"
                speed={5}
              />
            </div>
          )}
        </div>

        <BarcodeScannerComponent
          width="100000"
          className="scanner"
          onUpdate={(err, result) => {
            if (result) {
              setLink(result.text);
            }
          }}
          stopStream={stop}
        />
      </div>
    </div>
  );
};

export default ScanPage;
