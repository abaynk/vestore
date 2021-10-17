import React, { useState } from "react";
import "./OformitPage.css";
import InputMask from "react-input-mask";
import Button from "../../components/buttons/Button";

const OformitPage = () => {
  const [phone, setPhone] = useState("");
  const [iin, setIin] = useState("9412231300023");
  const [name, setName] = useState("Муратов Кайрат Сакенович");
  const [email, setEmail] = useState();

  return (
    <div className="oformitpage_root">
      <div className="oformitpage_container">
        <form>
          <label className="label">ФИО</label>
          <input
            type="text"
            value={name}
            className="phone_input"
            contentEditable="false"
            onChange={(e) => setName(e.target.value)}
          />
          <label className="label">ИИН</label>
          <input
            type="number"
            value={iin}
            className="phone_input"
            contentEditable="false"
            onChange={(e) => setIin(e.target.value)}
          />
          <label className="label">телефон</label>
          <InputMask
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            mask="+7\(999) 999 99 99"
            maskChar="_"
            placeholder="+7(___) ___ __ __"
            className="phone_input"
          />
          <label className="label">email</label>
          <input
            type="email"
            value={email}
            className="phone_input"
            onChange={(e) => setEmail(e.target.value)}
          />
        </form>
      </div>
      <div className="oformit_button">
        <Button
          text="отправить заявку"
          link={"/confirmSms"}
          disabled={!email || !phone}
        />
      </div>
    </div>
  );
};

export default OformitPage;
