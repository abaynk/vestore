import { doc, getDoc } from "@firebase/firestore";
import { getDownloadURL, ref } from "@firebase/storage";
import React, { useContext, useEffect, useState } from "react";
import Loader from "react-loader-spinner";
import Oformit from "../../components/popup/Oformit";
import { ProductContext } from "../../context/ProductContext";
import { db, storage } from "../../firebase";
import "./ProductPage.css";
const ProductPage = (props) => {
  const id = props.match.params.id;
  const [data, setData] = useState();
  const [imgReady, setImgReady] = useState(false);
  const { setPrice } = useContext(ProductContext);
  useEffect(() => {
    console.log(id);
    const getData = async () => {
      const querySnapshot = await getDoc(doc(db, "products", id));
      if (querySnapshot.exists()) {
        console.log(querySnapshot.data().title);
        setData(querySnapshot.data());
        setPrice(querySnapshot.data().price);
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
      <div className="product_container">
        <div className="product_details">
          <h1 className="product_title">{data.title}</h1>
          <p id="product_price">{data.price} тенге</p>
        </div>
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
          <p id="details_header">Основные характеристики</p>
          <p className="details_point">
            Магазин: <span className="point_span">{data.store}</span>
          </p>
          <p className="details_point">
            Тип продукта: <span className="point_span">{data.type}</span>
          </p>
          <p className="details_point">
            Бренд: <span className="point_span">{data.brand}</span>
          </p>
          <p className="details_point">
            Описание: <span className="point_span">{data.description}</span>
          </p>
          <p className="details_point">
            Код товара: <span className="point_span">{data.code}</span>
          </p>
        </div>
        <Oformit />
      </div>
    </div>
  );
};

export default ProductPage;
