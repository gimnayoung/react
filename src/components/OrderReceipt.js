import React from "react";
// import { Button } from "react-bootstrap";
import { useNavigate } from "react-router";
import { useLocation } from "react-router-dom";
import { currencyFormat } from "../utils/number";
import '../style/cart.style.css'

const OrderReceipt = ({ cartList, totalPrice }) => {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <div className="orderReceiptWrap">
      <h3 className="receipt-title">주문 내역</h3>
      <ul className="receipt-list">
        {cartList.length > 0 &&
          cartList.map((item) => (
            <li key={item._id}>
              <div className="display-flex space-between">
                <div>{item.productId.name}</div>

                <div>₩ {currencyFormat(item.productId.price * item.qty)}</div>
              </div>
            </li>
          ))}
      </ul>
      <div className="display-flex space-between receipt-title">
        <div>
          <strong>Total:</strong>
        </div>
        <div>
          <strong>₩ {currencyFormat(totalPrice)}</strong>
        </div>
      </div>
      {location.pathname.includes("/mypage") && cartList.length > 0 && (
        <button
          variant="dark"
          className="button"
          onClick={() => navigate("/payment")}
        >
          결제 계속하기
        </button>
      )}
      <div>
        교환,환불은 이용약관을 확인해주세요.
      </div>
    </div>
  );
};

export default OrderReceipt;