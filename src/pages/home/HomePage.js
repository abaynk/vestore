import React, { useEffect, useState } from "react";
import BarcodeScannerComponent from "react-qr-barcode-scanner";
import { db } from "../../firebase";
import { doc, getDoc } from "firebase/firestore";
import "./HomePage.css";
import ProductPopup from "../../components/popup/ProductPopup";
import { ReactComponent as Corner } from "../../corner.svg";
import { useSwipeable } from "react-swipeable";

const HomePage = () => {
  const [link, setLink] = useState("");
  const [data, setData] = useState();
  const [error, setError] = useState(false);
  const [stop, setStop] = useState(false);
  const [note, setNote] = useState(false);

  const handlers = useSwipeable({
    onSwipedDown: () => {
      setData();
      setStop(false);
      setNote(true);
    },
  });
  useEffect(() => {
    console.log(link);
    const getData = async () => {
      const querySnapshot = await getDoc(doc(db, "products", link));
      if (querySnapshot.exists()) {
        console.log(querySnapshot.data().title);
        setData(querySnapshot.data());
        setError(false);
        setStop(true);
      } else {
        console.error("no docuement was found");
        setError(true);
      }
    };
    if (link) {
      getData();
    }
  }, [link]);

  return (
    <div className="root">
      <div className="video_container">
        <div className="video_wrapper">
          <p id="navedite">наведите камеру для сканирования</p>
          <Corner id="topleft" />
          <Corner id="topright" />
          <Corner id="bottomleft" />
          <Corner id="bottomright" />
          {error && <p id="error_message">штрихкод не распознан</p>}
          {note && <p id="note_message">пожалуйста обновите</p>}
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
      {data && (
        <div {...handlers}>
          <ProductPopup product={data} id={link} />
        </div>
      )}
    </div>
  );
};

export default HomePage;
