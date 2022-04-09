import { useState } from "react";
import down from "../../assets/down.svg";
// import nig from "../../assets/nig.svg";
// import cad from "../../assets/cad.svg";
import { findFlagUrlByCountryName } from "country-flags-svg";
// import { countries } from "country-flags-svg";
import currencyCode from "currency-codes";
import "./style.scss";
// import getAllISOCodes from "iso-country-currency";
const CurrencyDrop = ({ defaultCurrency, handleCurrency }) => {
  const [show, setShow] = useState(false);
  const handleShow = () => {
    setShow(!show);
  };
  console.log(currencyCode);
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
        <img className="smallFlag" src={currency.flag} alt="" />
        <p className="name">{currency.code}</p>
        <img src={down} alt="down" />
      </div>
      <div className={`currencyList ${show ? "show" : ""}`}>
        {currencyCode &&
          currencyCode.data.map((item) => {
            return (
              <div
                key={item.id}
                onClick={() => {
                  setCurrency({
                    flag: findFlagUrlByCountryName(item.countries[0]),
                    code: item.code,
                  });
                  setRealCurrency("SFD");
                }}
                className="eachCurrency"
              >
                {console.log(findFlagUrlByCountryName(item.countries[0]))}
                {console.log(findFlagUrlByCountryName("Nigeria"))}
                <img
                  src={findFlagUrlByCountryName(item.countries[0])}
                  alt=""
                  className="smallFlag"
                />
                <p className="name">{item.code}</p>
              </div>
            );
          })}
        {/* <div
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
        </div> */}
      </div>
    </div>
  );
};

export default CurrencyDrop;
