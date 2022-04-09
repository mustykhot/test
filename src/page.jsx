import moon from "./assets/moon.svg";
import sun from "./assets/sun.svg";
import greenArr from "./assets/greenArrow.svg";
import redArr from "./assets/redArrow.svg";
// import convert from "./assets/convert.svg";
import { useState } from "react";

import ReactFlagsSelect from "react-flags-select";
import "react-languages-select/scss/react-languages-select.scss";
const Page = () => {
  const [toggle, setToggle] = useState(true);
  const [selected, setSelected] = useState("");
  const handleToggle = () => {
    setToggle(!toggle);
  };
  return (
    <div className="pd_page">
      <header className="App-header">
        <nav>
          <p>
            <span>Personal</span>
            <span className="dot">|</span>
            <span>Business</span>
          </p>
          <ul className="navList">
            <li>How it works</li>
            <li>Markets</li>
            <li>Forex Trading</li>
          </ul>
          <div className="selectLang">
            {/* <ReactLanguageSelect
              defaultLanguage="en"
              showSelectedLabel={true}
              showOptionLabel={true}
              selectedSize={14}
              optionsSize={14}
            /> */}
            <ReactFlagsSelect
              selected={selected}
              countries={["GB", "FR", "DE", "IT", "CN", "ES", "SA"]}
              customLabels={{
                GB: "ENGLISH",
                FR: "FRENCH",
                DE: "GERMAN",
                IT: "ITALIAN",
                CN: "CHINESE",
                ES: "SPANISH",
                SA: "ARABIC",
              }}
              onSelect={(code) => setSelected(code)}
              placeholder="Pick Language"
            />
          </div>
          <div className="btnDiv">
            <button className="login">Login</button>
            <button className="signup">Sign Up</button>
          </div>
          <div className="toggleSide">
            <img src={sun} alt="sun" />
            <div className="togDiv">
              <label className="switch">
                <input
                  checked={toggle}
                  onClick={handleToggle}
                  type="checkbox"
                />
                <span className="slider round"></span>
              </label>
            </div>
            <img src={moon} alt="moon" />
          </div>
        </nav>
      </header>
      <div className="listConversion">
        {[
          1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
        ].map((item) => {
          return (
            <div className="eachConversion">
              <p className="name">USD</p>
              {item % 2 === 0 ? (
                <img src={greenArr} alt="green arrow" />
              ) : (
                <img src={redArr} alt="red arrow" />
              )}

              <p className={`percent ${item % 2 === 0 ? "green" : "red"}`}>
                14.2%
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Page;
