import React from "react";
// import { faTrash } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDispatch } from "react-redux";
import { cartActions } from "../action/cartAction";
import { currencyFormat } from "../utils/number";
import "../style/cartProductCard.style.css"
import { useEffect } from "react";


const CartProductCard = ({ item }) => {
    useEffect(()=>{
console.log(item,'ime')
    },[])
    const dispatch = useDispatch();
    const handleQtyChange = (id, value) => {
        dispatch(cartActions.updateQty(id, value));
    };
    const deleteCart = (id) => {
        dispatch(cartActions.deleteCartItem(id));
    };
    return (
        <>
            <div className="wrap">
                <div className="cartWrap">
                    <div className="cartimgbox">
                        <img src={item.productId.image} className="cartimg"></img>
                    </div>
                        <div className="carttitlebox">
                            <h4 className="carttitle">{item.productId.name}</h4>
                            <div className="carttitle">{item.productId.description}</div>
                        </div>
                        <div>
                            <div className="cartprice">
                                <strong>₩ {currencyFormat(item.productId.price)}</strong>
                            </div>
                            <button className="cartsubmit">주문하기</button>
                        </div>
                        <div>Size: {item.size}</div>
                        <div>Total: ₩ {currencyFormat(item.productId.price * item.qty)}</div>
                        {/* <div>
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
                        </div> */}
                        <button onClick={() => deleteCart(item._id)} className="cartdelbut">
                            삭제
                        </button>
                    </div>
                </div>
        </>
    );
};

export default CartProductCard;
