import React, { useEffect } from "react";
// import ProductCard from "../component/ProductCard";
import { useSearchParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { commonUiActions } from "../action/commonUiAction";
import axios from "axios";
import List from "../components/list"
import { productActions } from "../action/productAction";
import "../style/productAll.style.css";

const ProductAll = ({ mainall, shoes, setCount, setShoes, count }) => {
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.product.productList)
  const [query, setQuery] = useSearchParams();
  const name = query.get('name');

  useEffect(() => {
    console.log(productList, "productList")
    dispatch(productActions.getProductList({
      name,
    }))
  }, [query])
  return (
    <div>
      <h1>오늘은 이 상품 어때요?</h1>
      <div className="productAllWrap">
      <div className="content">
        {
          productList.length > 0 ? (
            productList.map((item) => (
              <div key={item._id}>
                <List item={item} />
              </div>
            ))
          ) : null
        }
      </div>
      </div>
      {/* <div className="mainlistbutbox">
        <button
          className="mainlistbut"
          onClick={() => {
            //url로 get요청
            axios
              .get(
                `https://gimnayoung.github.io/shop-server/shop${count}.json`
              )
              //성공했을때
              .then((response) => {
                console.log(response.data);
                //복사본 만들기
                let copy = [...shoes, ...response.data];
                setShoes(copy);
                setCount(count + 1);
                console.log(count);
                console.log(copy); //합쳐진 arr
              })
              //실패했을때
              .catch(() => {
                console.log("err");
                alert("더이상 상품이 없습니다.");
              });
          }}
        >
          상품 더보기
        </button>
      </div> */}
    </div>
  )
}
export default ProductAll;
