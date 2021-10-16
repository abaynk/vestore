import React, { useState } from "react";
import "./OformitPage.css";
import InputMask from "react-input-mask";
const OformitPage = () => {
  const [value, setValue] = useState("");

  return (
    <div className="credit_root">
      <h1>Shas oformim</h1>
      <form>
        <InputMask
          value={value}
          onChange={(e) => setValue(e.target.value)}
          mask="+7\(999) 999 99 99"
          maskChar="_"
          placeholder="+7(___) ___ __ __"
          className="phone_input"
        />
      </form>
    </div>
  );
};

export default OformitPage;
