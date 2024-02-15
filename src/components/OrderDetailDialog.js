import React, { useState } from "react";
// import { Form, Modal, Button, Col, Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";

// import "../style/adminOrder.style.css";
import { ORDER_STATUS } from "../constants/order.constants";
import { orderActions } from "../action/orderAction";
import { currencyFormat } from "../utils/number";

const OrderDetailDialog = ({ open, handleClose }) => {
  const selectedOrder = useSelector((state) => state.order.selectedOrder);
  const [orderStatus, setOrderStatus] = useState(selectedOrder.status);
  const dispatch = useDispatch();

  const handleStatusChange = (event) => {
    setOrderStatus(event.target.value);
  };
  const submitStatus = () => {
    dispatch(orderActions.updateOrder(selectedOrder._id, orderStatus));
    handleClose();
  };

  if (!selectedOrder) {
    return <></>;
  }
  return (
    <div show={open} onHide={handleClose}>
      <header closeButton>
        <title>Order Detail</title>
      </header>
      <body>
        <p>예약번호: {selectedOrder.orderNum}</p>
        <p>주문날짜: {selectedOrder.createdAt.slice(0, 10)}</p>
        <p>이메일: {selectedOrder.userId.email}</p>
        <p>
          주소:{selectedOrder.shipTo.address + " " + selectedOrder.shipTo.city}
        </p>
        <p>
          연락처:
          {`${
            selectedOrder.contact.firstName + selectedOrder.contact.lastName
          } ${selectedOrder.contact.contact}`}
        </p>
        <p>주문내역</p>
        <div className="overflow-x">
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Unit Price</th>
                <th>Qty</th>
                <th>Price</th>
              </tr>
            </thead>
            <tbody>
              {selectedOrder.items.length > 0 &&
                selectedOrder.items.map((item) => (
                  <tr key={item._id}>
                    <td>{item._id}</td>
                    <td>{item.productId.name}</td>
                    <td>{currencyFormat(item.price)}</td>
                    <td>{item.qty}</td>
                    <td>{currencyFormat(item.price * item.qty)}</td>
                  </tr>
                ))}
              <tr>
                <td colSpan={4}>총계:</td>
                <td>{currencyFormat(selectedOrder.totalPrice)}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <form onSubmit={submitStatus}>
          <div controlId="status">
            <div>Status</div>
            <form value={orderStatus} onChange={handleStatusChange}>
              {ORDER_STATUS.map((item, idx) => (
                <option key={idx} value={item.toLowerCase()}>
                  {item}
                </option>
              ))}
            </form>
          </div>
          <div className="order-button-area">
            <button
              variant="light"
              onClick={handleClose}
              className="order-button"
            >
              닫기
            </button>
            <button type="submit">저장</button>
          </div>
        </form>
      </body>
    </div>
  );
};

export default OrderDetailDialog;