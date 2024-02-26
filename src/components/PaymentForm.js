import React from "react";
// import { Col, Form, Row } from "react-bootstrap";
import Cards from "react-credit-cards";
import "react-credit-cards/es/styles-compiled.css";

const PaymentForm = ({
  handleInputFocus,
  cardValue,
  handlePaymentInfoChange,
}) => {
    return (
        <div className="row display-flex">
          <div className="col-md-6 col-xs-12">
            <Cards
              cvc={cardValue.cvc}
              expiry={cardValue.expiry}
              focused={cardValue.focus}
              name={cardValue.name}
              number={cardValue.number}
            />
          </div>
          <div className="col-md-6 col-xs-12">
            <div className="form-area">
              <input
                type="tel"
                name="number"
                placeholder="Card Number"
                onChange={handlePaymentInfoChange}
                onFocus={handleInputFocus}
                required
                maxLength={16}
                minLength={16}
                value={cardValue.number}
              />
    
              <input
                type="text"
                name="name"
                placeholder="Name"
                onChange={handlePaymentInfoChange}
                onFocus={handleInputFocus}
                required
                value={cardValue.name}
              />
              <div className="row">
                <div className="col">
                  <input
                    type="text"
                    name="expiry"
                    placeholder="MM/DD"
                    onChange={handlePaymentInfoChange}
                    onFocus={handleInputFocus}
                    required
                    value={cardValue.expiry}
                    maxLength={7}
                  />
                </div>
                <div className="col">
                  <input
                    type="text"
                    name="cvc"
                    placeholder="CVC"
                    onChange={handlePaymentInfoChange}
                    onFocus={handleInputFocus}
                    required
                    maxLength={3}
                    value={cardValue.cvc}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      );
};

export default PaymentForm;