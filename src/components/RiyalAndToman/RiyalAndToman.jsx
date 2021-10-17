import React, { useState } from "react";
import { numberToWords, addCommas } from "@persian-tools/persian-tools";
import "./styles.css";

const RiyalAndToman = () => {
  const [price, setPrice] = useState("");
  const [beToman, setBeToman] = useState({});
  const [beRiyal, setBeRiyal] = useState({});
  const [isRiyalBeToman, setIsRiyalBeToman] = useState(false);
  const [showData, setShowData] = useState(false);

  const onConvertToRiyal = () => {
    const tempRiyal = price + 0;
    const temp = numberToWords(tempRiyal);
    const tempNum = addCommas(tempRiyal);
    setBeRiyal({ words: temp, number: tempNum });
  };

  const onConvertToToman = () => {
    const tempToman = price.substring(0, price.length - 1);
    const temp = numberToWords(tempToman);
    const tempNum = addCommas(tempToman);
    setBeToman({ words: temp, number: tempNum });
  };
  return (
    <div className="main-div">
      <div className="choose-div">
        <p>کدوم حالت رو میخوای ؟</p>
        <div>
        <button
          onClick={() => {
            setShowData(true);
            setIsRiyalBeToman(true);
          }}
          className="choose-btn-toman"
        >
          ریال به تومان
        </button>
        <button
          onClick={() => {
            setShowData(true);
            setIsRiyalBeToman(false);
          }}
          className="choose-btn-riyal"
        >
          تومان به ریال
        </button>
        <button
          onClick={() => {
            setPrice("")
            setBeRiyal({})
            setBeToman({})
          }}
          className="refresh-btn"
        >
          بازنشانی
        </button>
        </div>
      </div>
      {!isRiyalBeToman && showData && (
        <div className="be-tooman-riyal-div">
            <p>قیمت رو به تومان وارد کن تا به ریال تبدیل بشه</p>
          <div className="convert-input">
            <input
              type="number"
              placeholder="تومان"
              value={price}
              onChange={(e) => {setPrice(e.target.value)}}
              className="price-input"
            />
          <button className="convert-btn" onClick={onConvertToRiyal} disabled={price === "" || price <= 0}>تبدیل کن</button>
          </div>
          <div className="result-div">
          <p > {beRiyal.number !== undefined ? ` ${beRiyal.number} ریال` : ""} </p>
          <p > {beRiyal.words !== undefined ? ` ${beRiyal.words} ریال` : ""} </p>
          </div>
        </div>
      )}
      {isRiyalBeToman && showData && (
        <div className="be-tooman-riyal-div">
          <p>قیمت رو به ریال وارد کن تا به تومان تبدیل بشه</p>
          <div className="convert-input">
          <input
            type="number"
            placeholder="ریال"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            className="price-input"
          />
          <button className="convert-btn" onClick={onConvertToToman} disabled={price === "" || price <= 9}>تبدیل کن</button>
          </div>
          <div className="result-div">
          <p> {beToman.number !== undefined ? ` ${beToman.number} تومان` : ""} </p>
          <p> {beToman.words !== undefined ? ` ${beToman.words} تومان` : ""} </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default RiyalAndToman;
