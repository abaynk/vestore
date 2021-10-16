import React, { useState } from "react";
import "./OformitPage.css";
import InputMask from "react-input-mask";
const OformitPage = () => {
  const [phone, setPhone] = useState("");
  const [iin, setIin] = useState();
  return (
    <div className="credit_root">
      <form>
        <lable className="label">телефон</lable>
        <InputMask
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          mask="+7\(999) 999 99 99"
          maskChar="_"
          placeholder="+7(___) ___ __ __"
          className="phone_input"
        />
        <lable className="label">ИИН</lable>
        <input
          type="number"
          placeholder="900101123456"
          value={iin}
          onChange={(e) => setIin(e.target.value)}
          className="phone_input"
        />
      </form>
    </div>
  );
};

export default OformitPage;
