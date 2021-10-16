import React from "react";
import { Link } from "react-router-dom";
import "./ProductPopup.css";

const Oformit = () => {
  return (
    <div className="oformit_root">
      <Link to="/credit" className="popup_button">
        <button className="popup_button">купить</button>
      </Link>
    </div>
  );
};

export default Oformit;
