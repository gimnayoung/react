import React, { useState } from "react";
// import { Container, Row, Col, Form, Button } from "react-bootstrap";
import OrderReceipt from "../components/OrderReceipt";
import PaymentForm from "../components/PaymentForm";
// import "../style/paymentPage.style.css";
import { useSelector, useDispatch } from "react-redux";
import { orderActions } from  "../action/orderAction"
import { useEffect } from "react";
import { useNavigate } from "react-router";
import { commonUiActions } from "../action/commonUiAction";
import { cc_expires_format } from "../utils/number";
import { INITIALIZE_ORDER_ERROR } from "../constants/order.constants";
const PaymentPage = () => {
  const dispatch = useDispatch();
  const { cartList, totalPrice } = useSelector((state) => state.cart);
  const { orderNum, error } = useSelector((state) => state.order);
  // const orderState = useSelector((state) => state.order); // order 상태 전체 가져오기
  // const orderNum = orderState && orderState.orderNum; // orderNum이 정의되어 있는지 확인
  // const error = orderState && orderState.error; // error가 정의되어 있는지 확인
  const [cardValue, setCardValue] = useState({
    cvc: "",
    expiry: "",
    focus: "",
    name: "",
    number: "",
  });
  const navigate = useNavigate();
  const [firstLoading, setFirstLoading] = useState(true);
  const [shipInfo, setShipInfo] = useState({
    firstName: "",
    lastName: "",
    contact: "",
    address: "",
    city: "",
    zip: "",
  });

  // useEffect(() => {
  //   if (firstLoading) {
  //     setFirstLoading(false);
  //   } else {
  //     if (orderNum && orderNum !== "") { // orderNum이 정의되어 있고 빈 문자열이 아닌 경우에만 처리
  //       navigate("/payment/success");
  //     }
  //   }
  // }, [orderNum,navigate]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const { firstName, lastName, contact, address, city, zip } = shipInfo;

    const data={
        totalPrice,
        shipTo: { address, city, zip },
        contact: { contact, lastName, firstName },
        orderList: cartList.map((item) => {
          return {
            productId: item.productId._id,
            price: item.productId.price,
            qty: item.qty,
            size: item.size,
          };
        })
    }
    dispatch(orderActions.createOrder(data,navigate));
  };

  const handleFormChange = (event) => {
    const { name, value } = event.target;
    setShipInfo({ ...shipInfo, [name]: value });
  };

  const handlePaymentInfoChange = (event) => {
    const { name, value } = event.target;
    if (name === "expiry") {
      let newValue = cc_expires_format(value);

      setCardValue({ ...cardValue, [name]: newValue });
      return;
    }
    setCardValue({ ...cardValue, [name]: value });
  };

  const handleInputFocus = (e) => {
    setCardValue({ ...cardValue, focus: e.target.name });
  };
  if (cartList?.length === 0) {
    navigate("/cart"); //todo
  }
  return (
    <div>
  <div>
    <h2 className="mb-2">배송 주소</h2>
    <div>
      <form onSubmit={handleSubmit}>
        <div className="mb-3 row">
          <div className="col">
            <label htmlFor="lastName" className="form-label">성</label>
            <input
              type="text"
              className="form-control"
              onChange={handleFormChange}
              required
              name="lastName"
            />
          </div>
          <div className="col">
            <label htmlFor="firstName" className="form-label">이름</label>
            <input
              type="text"
              className="form-control"
              onChange={handleFormChange}
              required
              name="firstName"
            />
          </div>
        </div>

        <div className="mb-3">
          <label htmlFor="contact" className="form-label">연락처</label>
          <input
            type="text"
            className="form-control"
            placeholder="010-xxx-xxxxx"
            onChange={handleFormChange}
            required
            name="contact"
          />
        </div>

        <div className="mb-3">
          <label htmlFor="address" className="form-label">주소</label>
          <input
            type="text"
            className="form-control"
            placeholder="Apartment, studio, or floor"
            onChange={handleFormChange}
            required
            name="address"
          />
        </div>

        <div className="mb-3 row">
          <div className="col">
            <label htmlFor="city" className="form-label">City</label>
            <input
              type="text"
              className="form-control"
              onChange={handleFormChange}
              required
              name="city"
            />
          </div>
          <div className="col">
            <label htmlFor="zip" className="form-label">Zip</label>
            <input
              type="text"
              className="form-control"
              onChange={handleFormChange}
              required
              name="zip"
            />
          </div>
        </div>
        <div className="mobile-receipt-area">
          <OrderReceipt cartList={cartList} totalPrice={totalPrice} />
        </div>
        <div>
          <h2 className="payment-title">결제 정보</h2>
          <PaymentForm
            cardValue={cardValue}
            handlePaymentInfoChange={handlePaymentInfoChange}
            handleInputFocus={handleInputFocus}
          />
        </div>

        <button
          className="btn btn-dark payment-button pay-button"
          type="submit"
        >
          결제하기
        </button>
      </form>
    </div>
  </div>
</div>
  );
};

export default PaymentPage;