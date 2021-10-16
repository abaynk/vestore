import { doc, getDoc } from "@firebase/firestore";
import { getDownloadURL, ref } from "@firebase/storage";
import React, { useEffect, useState } from "react";
import Loader from "react-loader-spinner";
import Oformit from "../../components/popup/Oformit";
import { db, storage } from "../../firebase";
import "./ProductPage.css";
const ProductPage = (props) => {
  const id = props.match.params.id;
  const [data, setData] = useState();
  const [imgReady, setImgReady] = useState(false);

  useEffect(() => {
    console.log(id);
    const getData = async () => {
      const querySnapshot = await getDoc(doc(db, "products", id));
      if (querySnapshot.exists()) {
        console.log(querySnapshot.data().title);
        setData(querySnapshot.data());
        getDownloadURL(ref(storage, querySnapshot.data().img))
          .then((url) => {
            // Or inserted into an <img> element
            const img = document.getElementById("myimg");
            img.setAttribute("src", url);
            setImgReady(true);
          })
          .catch((error) => {
            console.error(error);
          });
      } else {
        console.error("no docuement was found");
      }
    };
    if (id) {
      getData();
    }
  }, [id]);

  if (!data) {
    return <p>Loading...</p>;
  }
  return (
    <div className="product_root">
      <h1>{data.title}</h1>
      <div
        style={
          imgReady
            ? { display: "block", textAlign: "center" }
            : { display: "none" }
        }
      >
        <img id="myimg" alt="text" />
      </div>
      <div
        style={
          !imgReady
            ? { display: "block", textAlign: "center" }
            : { display: "none" }
        }
      >
        <Loader
          type="ThreeDots"
          color="#d83232"
          height={100}
          width={100}
          timeout={3000} //3 secs
        />
      </div>
      <div className="product_details">
        <p id="details_header">Описание</p>
        <p className="details_point">
          Производитель: <span className="point_span">{data.brand}</span>
        </p>
        <p className="details_point">
          Категория: <span className="point_span">{data.category}</span>
        </p>
        <p className="details_point">
          Описание: <span className="point_span">{data.description}</span>
        </p>
        <p className="details_point">
          Серийный номер: <span className="point_span">{data.id}</span>
        </p>
        <p className="details_point">
          Цена: <span className="point_span">{data.price}</span>
        </p>
        <p className="details_point">
          Магазин: <span className="point_span">{data.store}</span>
        </p>
      </div>
      <Oformit />
    </div>
  );
};

export default ProductPage;
