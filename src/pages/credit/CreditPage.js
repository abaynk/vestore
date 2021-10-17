import React, { useContext, useEffect, useState } from "react";
import Button from "../../components/buttons/Button";
import { ProductContext } from "../../context/ProductContext";
import "./CreditPage.css";

const creditMonths = ["12 мес", "24 мес", "36 мес", "48 мес", "60 мес"];
const rassrochkaMonths = [
  "3 мес",
  "4 мес",
  "6 мес",
  "9 мес",
  "12 мес",
  "18 мес",
  "24 мес",
  "36 мес",
];

const CreditPage = () => {
  const [active, setActive] = useState(0);
  const { price } = useContext(ProductContext);
  const initialPayment = parseInt(price.replace(" ", "")) * 0.1;
  const [vznos, setVznos] = useState(initialPayment);
  const [activeMonth, setActiveMonth] = useState(!active ? 0 : 3);
  const [creditResults, setCreditResults] = useState({
    monthlyPayment: "",
    totalPayment: "",
    monthsCount: "",
    initialPayment: "",
    price: "",
  });
  const [rassrochkaResults, setRassrochkaResults] = useState({
    monthlyPayment: "",
    monthsCount: "",
    price: "",
  });
  const calculateCredit = () => {
    const interest = 20 / (100 * 12);
    const monthsCount = (activeMonth + 1) * 12;
    const x = Math.pow(1 + interest, -monthsCount);
    const monthly =
      (parseInt(price.replace(" ", "")) - vznos) * (interest / (1 - x));

    if (isFinite(monthly)) {
      const monthlyPayment = monthly.toFixed(2);
      const totalPayment = (monthly * monthsCount).toFixed(2);
      setCreditResults({
        monthlyPayment: Number(monthlyPayment),
        totalPayment: Number(totalPayment),
        monthsCount,
        vznos,
        price: Number(price.replace(" ", "")),
      });
    }
    if (monthly < 0) {
      setCreditResults({
        monthlyPayment: 0,
      });
    }
  };

  const calculateRassrochka = () => {
    const monthly = parseInt(price.replace(" ", "")) / activeMonth;
    if (isFinite(monthly)) {
      const monthlyPayment = monthly.toFixed(2);
      setRassrochkaResults({
        monthlyPayment: Number(monthlyPayment),
        monthsCount: activeMonth,
        price: Number(price.replace(" ", "")),
      });
    }
  };
  useEffect(() => {
    active === 0 ? calculateCredit() : calculateRassrochka();
  }, [activeMonth, vznos]);

  const submitForm = (e) => {
    e.preventDefault();

    active === 0
      ? console.log({ creditResults })
      : console.log({ rassrochkaResults });
  };
  return (
    <div className="credit_root">
      <div className="credit_slider">
        <span
          className={active === 0 ? "span active" : "span"}
          onClick={() => setActive(0)}
        >
          Кредит
        </span>
        <span
          className={active === 1 ? "span active" : "span"}
          onClick={() => setActive(1)}
        >
          Рассрочка
        </span>
      </div>
      <div className="credit_div mt16">
        <p className="credit_label">сумма</p>
        <p id="credit_price">{price} тг</p>
      </div>
      <div className="credit_div  mt16">
        <p className="credit_label">
          срок {active === 0 ? "кредита" : "рассрочки"}
        </p>
        <div className="buttons_container">
          {active === 0
            ? creditMonths.map((month, idx) => (
                <button
                  className={
                    idx === activeMonth
                      ? " active credit_button"
                      : "credit_button"
                  }
                  onClick={() => setActiveMonth(idx)}
                  key={idx}
                >
                  {month}
                </button>
              ))
            : rassrochkaMonths.map((month, idx) => (
                <button
                  className={
                    parseInt(month.replace(" мес", "")) === activeMonth
                      ? " active credit_button"
                      : "credit_button"
                  }
                  onClick={() =>
                    setActiveMonth(parseInt(month.replace(" мес", "")))
                  }
                  key={idx}
                >
                  {month}
                </button>
              ))}
        </div>
      </div>
      <div className="background_secondary  mt16">
        <p className="credit_label">ежемесячный платеж</p>
        <p className="initialPayment">
          {active === 0
            ? creditResults.monthlyPayment
            : rassrochkaResults.monthlyPayment}{" "}
          тг
        </p>
      </div>
      {active === 0 && (
        <div className="credit_div  mt16">
          <p className="credit_label">первоначальный взнос</p>
          <input
            type="number"
            value={vznos}
            onChange={(e) => setVznos(e.target.value)}
            id="credit_input"
            min={initialPayment}
          />
          {vznos < initialPayment && (
            <p id="price_error">минимальная сумма {initialPayment} </p>
          )}
        </div>
      )}
      <div className="credit_oformit">
        <Button
          link={"/idScan"}
          text={`оформить ${active === 0 ? "кредит" : "рассрочку"}`}
        />
      </div>
    </div>
  );
};

export default CreditPage;
