import React from "react";
// import { faTrash } from "@fortawesome/free-solid-svg-icons";
// import { Row, Col, Form } from "react-bootstrap";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDispatch } from "react-redux";
import { cartActions } from "../action/cartAction";
import { currencyFormat } from "../utils/number";

const CartProductCard = ({ item }) => {
    const dispatch = useDispatch();
    const handleQtyChange = (id, value) => {
        dispatch(cartActions.updateQty(id, value));
    };
    const deleteCart = (id) => {
        dispatch(cartActions.deleteCartItem(id));
    };
    return (
        <>
            <div className="cartlistwrap">
                <div className="cartlist">
                    <div className="cartimgbox">
                        <img src={item.productId.image} className="cartimg"></img>
                    </div>
                    <div className="carttext">
                        <div className="carttitlebox">
                            <div className="cartsource">{item.source}</div>
                            <h4 className="carttitle">{item.productId.name}</h4>
                            <div className="cartcontent">{item.content}</div>
                        </div>
                        <div>
                            <button onClick={() => { }} className="updownbut">
                                {/* <AiOutlineMinus size={15} /> */}
                            </button>
                            {/* {count} */}
                            <button className="updownbut" onClick={() => { }}>
                                {/* <AiOutlinePlus size={15} /> */}
                            </button>
                        </div>
                        <div>
                            <div className="cartprice">
                                <strong>₩ {currencyFormat(item.productId.price)}</strong>
                            </div>
                            <button className="cartsubmit">주문하기</button>
                        </div>
                        <div>Size: {item.size}</div>
                        <div>Total: ₩ {currencyFormat(item.productId.price * item.qty)}</div>
                        <div>
                            Quantity:
                            <select
                                onChange={(event) => handleQtyChange(item._id, event.target.value)}
                                defaultValue={item.qty}
                                className="qty-dropdown"
                            >
                                {[...Array(10)].map((_, index) => (
                                    <option key={index + 1} value={index + 1}>
                                        {index + 1}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <button onClick={() => deleteCart(item._id)} className="cartdelbut">
                            삭제
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default CartProductCard;
