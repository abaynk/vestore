import React from "react";
import { Link } from "react-router-dom";
import "./Button.css";

const Button = ({ link, text, disabled }) => {
  return (
    <div>
      <Link
        to={link}
        className={disabled ? "disabled button_root" : "button_root"}
      >
        <button
          className={disabled ? "disabled button_root" : "button_root"}
          disabled={disabled}
        >
          {text}
        </button>
      </Link>
    </div>
  );
};

export default Button;
