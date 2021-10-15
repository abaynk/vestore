import React, { useEffect, useState } from "react";
import BarcodeScannerComponent from "react-qr-barcode-scanner";
import { db } from "../../firebase";
import { doc, getDoc } from "firebase/firestore";
import "./HomePage.css";
import ProductPopup from "../../components/popup/ProductPopup";

const HomePage = () => {
  const [link, setLink] = useState("");
  const [data, setData] = useState();

  useEffect(() => {
    console.log(link);
    const getData = async () => {
      const querySnapshot = await getDoc(doc(db, "products", link));
      if (querySnapshot.exists()) {
        console.log(querySnapshot.data().title);
        setData(querySnapshot.data());
      } else {
        console.error("no docuement was found");
      }
    };
    if (link) {
      getData();
    }
  }, [link]);

  return (
    <div className="root">
      <div className="video_container">
        <div className="video_wrapper"></div>

        <BarcodeScannerComponent
          width="100000"
          className="scanner"
          onUpdate={(err, result) => {
            if (result) {
              setLink(result.text);
            }
          }}
          stopStream={link}
        />
      </div>
      {data && <ProductPopup product={data} id={link} />}
    </div>
  );
};

export default HomePage;
