import { doc, getDoc } from "@firebase/firestore";
import { getDownloadURL, ref } from "@firebase/storage";
import React, { useEffect, useState } from "react";
import { db, storage } from "../../firebase";
import "./ProductPage.css";
const ProductPage = (props) => {
  const id = props.match.params.id;
  const [data, setData] = useState();

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
      <img id="myimg" alt="text" />
      <div className="product_details">
        <p>Описание</p>
        <p>Производитель: {data.brand}</p>
        <p>Категория: {data.category}</p>
        <p>Описание: {data.description}</p>
        <p>Серийный номер: {data.id}</p>
        <p>Цена: {data.price}</p>
        <p>Магазин: {data.store}</p>
      </div>
    </div>
  );
};

export default ProductPage;
