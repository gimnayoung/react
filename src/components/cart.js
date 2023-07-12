import { useDispatch, useSelector } from "react-redux";

import {AiOutlinePlus} from "react-icons/ai"
import {AiOutlineMinus} from "react-icons/ai"
import { useState } from "react";
function Cart() {
  //안에 요소 삭제해줌
  localStorage.removeItem("name");
  const cartItem=localStorage.getItem("cartItem")
  const newCartItem=JSON.parse(cartItem)
  const [count,setCount]=useState(newCartItem[0].count)
  console.log(newCartItem)
  console.log(localStorage.length)
  // console.log(count) 1
  //리덕스 스토어 가져와주는
  const cartlist = useSelector((state) => {
    return state.cartlist;
  });
  //스토어에서 만든 reducers안에있는거 사용할때
  let dispatch = useDispatch();
  return (
    <div className="cartwrap">
      <h2>장바구니</h2>
          {newCartItem.map((list, index) => (
             <div className="cartlistwrap">
              <div className="cartlist">
                <div className="cartimgbox">
                  <img src={list.img} className="cartimg"></img>
                </div>
                <div className="carttext">
                  <div className="carttitlebox">
                    <div className="cartsource">{list.source}</div>
                    <h4 className="carttitle">{list.title}</h4>
                    <div className="cartcontent">{list.content}</div>
                  </div>
                  <div>
                    <button onClick={(e)=>{
                      
                    }} className="updownbut"><AiOutlineMinus size={15}/></button>{count}
                     <button className="updownbut"><AiOutlinePlus size={15}/></button>
                  </div>
                  <div>
                   <div className="cartprice">{list.price}원</div>
                   <button className="cartsubmit">주문하기</button>
                  </div>
                  <button onClick={()=>{}} className="cartdelbut">삭제</button>
                </div>
              </div>
           </div>
          ))}
    </div>
  );
}

export default Cart;
