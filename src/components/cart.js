import { useDispatch, useSelector } from "react-redux";

function Cart() {
  //리덕스 스토어 가져와주는
  const cartlist = useSelector((state) => {
    return state.cartlist;
  });
  //스토어에서 만든 reducers안에있는거 사용할때
  let dispatch = useDispatch();
  console.log(cartlist);
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>체크란</th>
            <th>상품정보</th>
            <th>옵션</th>
            <th>상품금액</th>
          </tr>
        </thead>
        <tbody>
          {cartlist.map((list, index) => (
            <tr>
              <th>{cartlist[index].id}</th>
              <th>{cartlist[index].name}</th>
              <th>
                <button>+</button>
                <button>-</button>
              </th>
              <th>{cartlist[index].id}</th>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Cart;
