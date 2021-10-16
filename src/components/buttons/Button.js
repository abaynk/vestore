import React from "react";
import { Link } from "react-router-dom";
import "./Button.css";

const Button = ({ link, text }) => {
  return (
    <div>
      <Link to={link} className="button_root">
        <button className="button_root">{text}</button>
      </Link>
    </div>
  );
};

export default Button;
