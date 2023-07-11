import { useDispatch, useSelector } from "react-redux";

function Cart() {
  const cartItem=localStorage.getItem("cartItem")
  const newCartItem=JSON.parse(cartItem)
  console.log(newCartItem)
  //리덕스 스토어 가져와주는
  const cartlist = useSelector((state) => {
    return state.cartlist;
  });
  //스토어에서 만든 reducers안에있는거 사용할때
  let dispatch = useDispatch();
  return (
    <div>
          {newCartItem.map((list, index) => (
             <div className="cartlistwrap">
              <div className="cartlist">
                <div className="cartimgbox">
                  <img src={list.img} className="cartimg"></img>
                </div>
                <div>
                  <div>{index+=1}</div>
                  <div>{list.title}</div>
                  <div>{list.content}</div>
                </div>
                <div>
                  <button>-</button>
                  {list.count}
                  <button>+</button>
                </div>
                <div>{list.price}</div>
                <div>삭제버튼</div>
              </div>
           </div>
          ))}
    </div>
  );
}

export default Cart;
