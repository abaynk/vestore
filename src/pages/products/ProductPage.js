import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { db } from "../../firebase";
import { doc, getDoc } from "firebase/firestore";

const ProductPage = (props) => {
  const id = props.match.params.id;
  const [data, setData] = useState();
  useEffect(() => {
    const getData = async () => {
      const querySnapshot = await getDoc(doc(db, "products", id));
      if (querySnapshot.exists()) {
        setData(querySnapshot.data());
      }
    };
    getData();
  }, [id]);
  if (!data) {
    return <p>Loading</p>;
  }
  return (
    <div>
      <h3>
        <Link to="/">back to home</Link>
      </h3>
      <h1>This is product with id: {id}</h1>
      <h2>{data.title}</h2>
    </div>
  );
};

export default ProductPage;
