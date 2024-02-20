import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch,useSelector } from "react-redux";

import { addItem } from "../store/store";
import { cartActions } from "../action/cartAction";
import Cart from "./cart";
import { productActions } from "../action/productAction";
import { currencyFormat } from "../utils/number";

//아이콘
import { BiHomeAlt } from "react-icons/bi";
import { PiBasketLight } from "react-icons/pi";
import { FiHeart } from "react-icons/fi";
import { BsHeart } from "react-icons/bs";

const Detail = () => {
  const dispatch = useDispatch();
  const selectedProduct = useSelector((state) => state.product.selectedProduct);
  const loading = useSelector((state) => state.product.loading);
  const error = useSelector((state) => state.product.error);

  const [size, setSize] = useState("");
  const { id } = useParams();
  const [sizeError, setSizeError] = useState(false);
  const user = useSelector((state) => state.user.user);
  const navigate = useNavigate();

  const addItemToCart = () => {
    if (size === "") {
      setSizeError(true);
      return;
    }
    setSizeError(false);
    if (!user) {
      navigate("/login");
    }
    dispatch(cartActions.addToCart({ id, size }));
  };
  const selectSize = (value) => {
    if (sizeError) setSizeError(false);
    setSize(value);
  };

  useEffect(() => {
    dispatch(productActions.getProductDetail(id));
    console.log("selectedProduct",selectedProduct)
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
      {selectedProduct && ( // selectedProduct가 null이 아닌 경우에만 렌더링
        <div className="product-detail-card">
        <div className="row">
          <div className="detail-img">
            <img src={selectedProduct.image} className="w-100" alt="image" />
          </div>
          <div className="right">
          <div className="product-info-area col-sm-6">
            <div className="titleBox">{selectedProduct.name}</div>
            <div className="product-info">
              ₩ {currencyFormat(selectedProduct.price)}
            </div>
            <div className="product-info">{selectedProduct.description}</div>
    
            <div className="size-drop-down">
              <select className="dropdown-toggle" onChange={(e) => selectSize(e.target.value)}>
                <option disabled={size === ""}>{size === "" ? "사이즈 선택" : size.toUpperCase()}</option>
                {Object.keys(selectedProduct.stock).map((item) => (
                  <option key={item} value={item} disabled={selectedProduct.stock[item] <= 0}>
                    {item.toUpperCase()}
                  </option>
                ))}
              </select>
            </div>
    
            <div className="warning-message">
              {sizeError && "사이즈를 선택해주세요."}
            </div>
    
            <button className="add-button" onClick={addItemToCart}>
              추가
            </button>
          </div>
          </div>
        </div>
      </div>
      )}
      {!selectedProduct && ( // selectedProduct가 null인 경우에 대한 처리
        <div>선택된 제품이 없습니다.</div>
      )}
    </div>
  );
};

export default Detail