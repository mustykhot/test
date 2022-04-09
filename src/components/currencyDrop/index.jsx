import { useState } from "react";
import down from "../../assets/down.svg";
import nig from "../../assets/nig.svg";
import cad from "../../assets/cad.svg";
// import { findFlagUrlByNationality } from "country-flags-svg";
// import { countries } from "country-flags-svg";
import "./style.scss";
// import getAllISOCodes from "iso-country-currency";
const CurrencyDrop = ({ defaultCurrency, handleCurrency }) => {
  const [show, setShow] = useState(false);
  const handleShow = () => {
    setShow(!show);
  };
  const [currency, setCurrency] = useState(
    defaultCurrency ? defaultCurrency : {}
  );
  const setRealCurrency = (val) => {
    handleCurrency(val);
  };

  //   const iso = getAllISOCodes();

  //   console.log(iso);
  return (
    <div className="custom_select">
      <div onClick={handleShow} className="showCurrency">
        <img src={currency.flag} alt="nig" />
        <p className="name">{currency.code}</p>
        <img src={down} alt="down" />
      </div>
      <div className={`currencyList ${show ? "show" : ""}`}>
        <div
          onClick={() => {
            setCurrency({
              flag: nig,
              code: "SFD",
            });
            setRealCurrency("SFD");
          }}
          className="eachCurrency"
        >
          <img src={nig} alt="nig" />
          <p className="name">SFD</p>
        </div>
        <div
          onClick={() => {
            setCurrency({
              flag: cad,
              code: "RFS",
            });
            setRealCurrency("RFS");
          }}
          className="eachCurrency"
        >
          <img src={cad} alt="nig" />
          <p className="name">RFS</p>
        </div>
      </div>
    </div>
  );
};

export default CurrencyDrop;
