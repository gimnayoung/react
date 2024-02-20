import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch,useSelector } from "react-redux";

import { addItem } from "../store/store";
import Cart from "./cart";
import { productActions } from "../action/productAction";
import { currencyFormat } from "../utils/number";

//아이콘
import { BiHomeAlt } from "react-icons/bi";
import { PiBasketLight } from "react-icons/pi";
import { FiHeart } from "react-icons/fi";
import { BsHeart } from "react-icons/bs";

// function Detail(props) {
//   const selectedProduct = useSelector((state) => state.product.selectedProduct);
//   const loading = useSelector((state) => state.product.loading);
//   const error = useSelector((state) => state.product.error);
//   const [size, setSize] = useState("");
//   const { id } = useParams();
//   //최근 본 상품
//   useEffect(() => {
//     watchedUser();
//   }, []);

//   useEffect(() => {
//     dispatch(productActions.getProductDetail(id));
//   }, [id]);
//   const watchedUser = function () {
//     var myArr = localStorage.getItem("watchedUser");
//     if (myArr === null) {
//       myArr = [];
//     } else {
//       myArr = JSON.parse(myArr);
//     }
//     myArr.push({
//       source: 찾은상품.source,
//       id: 찾은상품.id,
//       title: 찾은상품.title,
//       img: 찾은상품.img,
//       price: 찾은상품.price,
//     });
//     const filteredArr = myArr.reduce((acc, current) => {
//       const x = acc.find((item) => item.id === current.id);
//       if (!x) {
//         return acc.concat([current]);
//       } else {
//         return acc;
//       }
//     }, []);
//     localStorage.setItem("watchedUser", JSON.stringify(filteredArr));
//     // console.log(myArr);
//   };

//   const cartItem = function () {
//     var userArr = localStorage.getItem("cartItem");
//     if (userArr === null) {
//       userArr = [];
//     } else {
//       userArr = JSON.parse(userArr);
//     }
//     userArr.push({
//       source: 찾은상품.source,
//       id: 찾은상품.id,
//       title: 찾은상품.title,
//       img: 찾은상품.img,
//       count: 1,
//       price: 찾은상품.price,
//       content: 찾은상품.content,
//     });
//     const filteredArr = userArr.reduce((acc, current) => {
//       const x = acc.find((item) => item.id === current.id);
//       if (!x) {
//         return acc.concat([current]);
//       } else {
//         return acc;
//       }
//     }, []);
//     localStorage.setItem("cartItem", JSON.stringify(filteredArr));
//   };
//   const [alert, setAlert] = useState(true);
//   const [tap, setTap] = useState(0);
//   const [color, setColor] = useState("");
//   const [uselocalStorage, setLocalStorage] = useState([]);
//   const [heart, setHeart] = useState(0);

//   let dispatch = useDispatch();
//   let navigate = useNavigate();

//   let 찾은상품 = props.shoes.find((x) => x.id == id);
//   if (loading || !selectedProduct)
//   return (
//     <div>
//       {/* {alert === true ? <div className="boom">2초이내 구매시 할인</div> : null} */}
//       <div className="detail-wrap">
//         <div className="detail-img">
//           <img src={props.shoes[id].img} />
//         </div>
//         <div className="right">
//           <div className="sourceBox">
//             <BiHomeAlt size={24} />
//             <p>{props.shoes[id].source}</p>
//           </div>
//           <div className="titleBox">
//             <h4>{props.shoes[id].title}</h4>
//             <p>{props.shoes[id].content}</p>
//           </div>
//           <h1 className="detailPrice">{props.shoes[id].price}원</h1>
//           <div className="selectBox">
//             <select>
//               <option className="detailoption" value="" selected>
//                 [색상]를 선택하세요.
//               </option>
//               <option className="detailoption" value="ibori">
//                 아이보리
//               </option>
//               <option className="detailoption" value="black">
//                 블랙
//               </option>
//               <option className="detailoption" value="white">
//                 화이트
//               </option>
//             </select>
//           </div>
//           <select className="selectBox">
//             <option value="" selected>
//               [사이즈]를 선택하세요.
//             </option>
//             <option value="s">S</option>
//             <option value="m">M</option>
//             <option value="l">L</option>
//           </select>
//           <div className="detailfinalamount">
//             <div className="final">총 상품 금액 </div>
//             <div className="amount"> {props.shoes[id].price} 원</div>
//           </div>
//           <div className="buttonBox">
//             <a
//               className="button-submitA"
//               // localHandling();
//               // localStoragse.setItem("title",JSON.stringify([props.shoes[id].title]))
//             >
//               <button className="button-submit">주문하기</button>
//             </a>
//             <a
//               onClick={() => {
//                 cartItem();
//                 navigate("/mypage");
//               }}
//             >
//               <button className="button-장바">
//                 <PiBasketLight size={28} />
//               </button>
//             </a>
//             <a>
//               <button
//                 onClick={() => {
//                   setHeart(heart + 1);
//                 }}
//                 className="button-찜"
//               >
//                 {heart % 2 == 1 ? (
//                   <div>
//                     <FiHeart size={28} color="red" />
//                   </div>
//                 ) : (
//                   <FiHeart size={28} />
//                 )}
//               </button>
//             </a>
//           </div>
//         </div>
//       </div>
//       <div className="detail-tap">
//         <div className="detailbutton">
//           <a
//             className="detailA"
//             value={0}
//             type="button"
//             onClick={() => {
//               setTap(0);
//             }}
//           >
//             상품정보
//           </a>
//         </div>
//         <div className="detailbutton">
//           <a
//             className="detailA"
//             value={1}
//             type="button"
//             onClick={() => {
//               setTap(1);
//             }}
//           >
//             리뷰
//           </a>
//         </div>
//         <div className="detailbutton">
//           <a
//             className="detailA"
//             value={2}
//             type="button"
//             onClick={() => {
//               setTap(2);
//             }}
//           >
//             Q&A
//           </a>
//         </div>
//         <div className="detailbutton">
//           <a
//             className="detailA"
//             value={3}
//             type="button"
//             onClick={() => {
//               setTap(3);
//             }}
//           >
//             주문정보
//           </a>
//         </div>
//         <div className="tapbox">
//           <TapCont tap={tap}></TapCont>
//         </div>
//       </div>
//     </div>
//   );
// }

// function TapCont({ tap }) {
//   return [
//     <div>상품정보 입니다</div>,
//     <div>리뷰 입니다</div>,
//     <div>문의 입니다</div>,
//     <div>주문정보 입니다</div>,
//   ][tap];
// }
// export default Detail;


const Detail = () => {
  const dispatch = useDispatch();
  const selectedProduct = useSelector((state) => state.product.selectedProduct);
  const loading = useSelector((state) => state.product.loading);
  const error = useSelector((state) => state.product.error);
  const [size, setSize] = useState("");
  const { id } = useParams();
  const navigate = useNavigate();

  

  useEffect(() => {
    dispatch(productActions.getProductDetail(id));
  }, [id]);

  // if (loading || !selectedProduct)
  //   return (
  //     <ColorRing
  //       visible={true}
  //       height="80"
  //       width="80"
  //       ariaLabel="blocks-loading"
  //       wrapperStyle={{}}
  //       wrapperClass="blocks-wrapper"
  //       colors={["#e15b64", "#f47e60", "#f8b26a", "#abbd81", "#849b87"]}
  //     />
  //   );
  return (
    <div className="detail-wrap">
      {selectedProduct ? (
        <div>
          <div className="detail-img">
            <img src={selectedProduct.image} className="w-100" alt="image" />
          </div>
          <div className="product-info-area" sm={6}>
            <div className="product-info">{selectedProduct.name}</div>
            <div className="product-info">
              ₩ {currencyFormat(selectedProduct.price)}
            </div>
            <div className="product-info">{selectedProduct.description}</div>
  
            <select className="size-drop-down" onChange={(e) => setSize(e.target.value)}>
              {Object.keys(selectedProduct.stock).length > 0 &&
                Object.keys(selectedProduct.stock).map((item) => (
                  <option key={item} value={item} disabled={selectedProduct.stock[item] <= 0}>
                    {item.toUpperCase()}
                  </option>
                ))}
            </select>
  
            <button variant="dark" className="add-button" onClick={() => {}}>
              추가
            </button>
          </div>
        </div>
      ) : (
        <div>선택된 제품이 없습니다.</div>
      )}
    </div>
  );
};

export default Detail