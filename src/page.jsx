import moon from "./assets/moon.svg";
import sun from "./assets/sun.svg";
import greenArr from "./assets/greenArrow.svg";
import redArr from "./assets/redArrow.svg";
import pro from "./assets/pro.svg";
import ech from "./assets/ech.svg";
import arr from "./assets/arr.svg";
import union from "./assets/Union.svg";
// import convert from "./assets/convert.svg";
import { useState } from "react";
// import ReactCountryFlagsCurrencySelect from "react-country-flag-currency-picker";
import ReactFlagsSelect from "react-flags-select";
import "react-languages-select/scss/react-languages-select.scss";
import usa from "./assets/usa.svg";
import arrow from "./assets/arrow.svg";
import nig from "./assets/nig.svg";
import cad from "./assets/cad.svg";
const Page = () => {
  const [toggle, setToggle] = useState(true);
  const [selected, setSelected] = useState("");
  //   const onSelectFlag = (country) => {
  //     console.log(country);
  //   };
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

      <div className="hero">
        <p className="header_text">
          Make Money from <br /> the Money Transfer <br /> Market
        </p>
        <div className="convBox">
          <p className="title">Send Money</p>
          <div className="changeBox">
            <div className="top hard">
              <div className="left">
                <p className="changeText">Tender</p>
                <p className="number">20</p>
              </div>
              <div className="right">
                {/* <ReactCountryFlagsCurrencySelect
                  onSelect={onSelectFlag}
                  defaultCountry="US"
                /> */}
              </div>
            </div>
            <div className="top">
              <div className="left">
                <p className="changeText">Tender</p>
                <p className="number">20</p>
              </div>
              <div className="right"></div>
            </div>
          </div>
          <div className="pro">
            <div className="eachPro">
              <div className="left">
                <img src={pro} alt="pro" />
                <p>Processing Fee</p>
              </div>
              <div className="right">
                <p>$20</p>
              </div>
            </div>
            <div className="eachPro">
              <div className="left">
                <img src={ech} alt="pro" />
                <p>Exchange Rate</p>
              </div>
              <div className="right">
                <img src={union} alt="union" />
                <p>$20</p>
              </div>
            </div>
            <div className="eachPro">
              <div className="left">
                <img src={arr} alt="pro" />
                <p>Arrival time</p>
              </div>
              <div className="right">
                <p className="blue">20min</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footNote">
        <p className="title">Market Highlights</p>
        <p className="sub-title">
          Get insight on how world currencies are performing
        </p>

        <div className="viewFlex">
          <div className="btnDiv">
            <button className="yellow">Top Risers</button>
            <button>Top Fallers</button>
            <button>Volume Leaders</button>
          </div>
          <a href="/">View More</a>
        </div>
        <div className="boxShow">
          <div className="eachBox">
            <div className="flag">
              <img src={usa} alt="usa" />
              <p>USD. Dollar Backed Security</p>
            </div>
            <div className="rate">
              <span className="cur">USD</span>
              <span className="money">219.90</span>
            </div>
            <div className="arrow">
              <img src={greenArr} alt="arrow" />
              <p className="green">1.4%</p>
            </div>
            <div className="track">
              <p>Lasted updated January 9</p>
              <a href="/">
                {" "}
                Track <img src={arrow} alt="arrow" />{" "}
              </a>
            </div>
          </div>
          <div className="eachBox">
            <div className="flag">
              <img src={nig} alt="usa" />
              <p>NGN. Naira Backed Security</p>
            </div>
            <div className="rate">
              <span className="cur">NGN</span>
              <span className="money">219.90</span>
            </div>
            <div className="arrow">
              <img src={redArr} alt="arrow" />
              <p className="red">1.4%</p>
            </div>
            <div className="track">
              <p>Lasted updated January 9</p>
              <a href="/">
                {" "}
                Track <img src={arrow} alt="arrow" />{" "}
              </a>
            </div>
          </div>
          <div className="eachBox">
            <div className="flag">
              <img src={cad} alt="usa" />
              <p>CAD. Dollar Backed Security</p>
            </div>
            <div className="rate">
              <span className="cur">CAD</span>
              <span className="money">219.90</span>
            </div>
            <div className="arrow">
              <img src={greenArr} alt="arrow" />
              <p className="green">1.4%</p>
            </div>
            <div className="track">
              <p>Lasted updated January 9</p>
              <a href="/">
                {" "}
                Track <img src={arrow} alt="arrow" />{" "}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
