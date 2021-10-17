import React, { useState } from "react";
import ReactCodeInput from "react-verification-code-input";
import Button from "../../components/buttons/Button";
import "./SmsPage.css";
const SmsPage = () => {
  const [verified, setVerified] = useState(false);
  return (
    <div className="sms_root">
      <div className="sms_container">
        <h2>Введите код из СМС</h2>
        <p>отправленного на телефон +7 (707) 223 77 83 </p>

        <div className="code_area">
          <ReactCodeInput
            type="number"
            fields={4}
            onComplete={() => setVerified(true)}
          />
        </div>
      </div>
      <div className="sms_button">
        <Button text="подтвердить" link="/confirmation" disabled={!verified} />
      </div>
    </div>
  );
};

export default SmsPage;
