import React, { useState } from "react";

import CardAspireLogo from "../../assets/images/card-aspire-logo.svg";
import CardVisaLogo from "../../assets/images/card-visa-logo.svg";
import EyeIcon from "../../assets/images/eye.svg";

import "./Card.scss";

function Card(props) {
  const [showCardNumber, setShowCardNumber] = useState(false);
  const { name, cardNumber, expiryDate, freeze, isMobileView } = props;

  const renderCardNumber = () => {
    let cardNo = cardNumber;

    // if card number is hidden, mask the first 12 chars.
    if (!showCardNumber) {
      let lastFourDigits = cardNo.slice(-4);
      cardNo = lastFourDigits.padStart(16, "●");
    }

    let cardSections = [];

    // break into 4 sections
    for (let i = 0; i < 16; i += 4) {
      cardSections.push(cardNo.slice(i, i + 4));
    }

    return (
      <ul className="card-number-container">
        {cardSections.map((section, index) => (
          <li
            key={index}
            className={`card-number-section ${
              !showCardNumber && index < 3 ? "card-number-dots" : ""
            }`}
          >
            {section.split("").map((number) => (
              <span> {number} </span>
            ))}
          </li>
        ))}
      </ul>
    );
  };

  const getCardExpriy = () => {
    const expiry = new Date(expiryDate);
    const expiryMonth = String(expiry.getMonth() + 1);
    const expiryYear = String(expiry.getFullYear());

    return `${expiryMonth.padStart(2, 0)}/${expiryYear.slice(2)}`;
  };

  return (
    <section className={`card-container ${isMobileView ? "mobile-view" : ""}`}>
      {/* we need to style show number differently in mobile view */}

      <div
        className="show-card-number-container"
        onClick={() => setShowCardNumber((showCard) => !showCard)}
      >
        <img
          src={EyeIcon}
          alt={showCardNumber ? "Hide card number" : "Show card number"}
        />
        <span>{showCardNumber ? "Hide card number" : "Show card number"} </span>
      </div>

      {/* adding this for showing white color in mobile view.  */}
      {/* TODO: see if there is any better way */}
      <div className="white-bg-container">
        <div className={`card-component ${freeze ? "card-frozen" : ""} `}>
          <img
            src={CardAspireLogo}
            className="card-aspire-logo"
            alt="Aspire card"
          />

          <p className="card-name"> {name} </p>

          {renderCardNumber()}

          <div className="cvv-container">
            <span> {`Thru: ${getCardExpriy()}`} </span>

            <p className="d-flex align-items-center">
              <span>CVV: </span> <span className="mask-cvv"> *** </span>
            </p>
          </div>

          <img
            src={CardVisaLogo}
            className="card-visa-logo"
            alt="Aspire card"
          />
        </div>
      </div>
    </section>
  );
}

export default Card;
