import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

import { addItem } from "../store/store";
import Cart from "./cart";

//아이콘
import { BiHomeAlt } from "react-icons/bi";
import { PiBasketLight } from "react-icons/pi";
import { FiHeart } from "react-icons/fi";
import { BsHeart } from "react-icons/bs";

function Detail(props) {
  //최근 본 상품
  useEffect(() => {
    watchedUser();
  }, []);
  const watchedUser = function () {
    var myArr = localStorage.getItem("watchedUser");
    if (myArr === null) {
      myArr = [];
    } else {
      myArr = JSON.parse(myArr);
    }
    myArr.push({
      source: 찾은상품.source,
      id: 찾은상품.id,
      title: 찾은상품.title,
      img: 찾은상품.img,
      price: 찾은상품.price,
    });
    //중복방지 코드
    // myArr=new Set(myArr);
    // myArr = [...myArr];
    const filteredArr = myArr.reduce((acc, current) => {
      const x = acc.find((item) => item.id === current.id);
      if (!x) {
        return acc.concat([current]);
      } else {
        return acc;
      }
    }, []);
    localStorage.setItem("watchedUser", JSON.stringify(filteredArr));
    // console.log(myArr);
  };

  const cartItem = function () {
    var userArr = localStorage.getItem("cartItem");
    if (userArr === null) {
      userArr = [];
    } else {
      userArr = JSON.parse(userArr);
    }
    userArr.push({
      source: 찾은상품.source,
      id: 찾은상품.id,
      title: 찾은상품.title,
      img: 찾은상품.img,
      count: 1,
      price: 찾은상품.price,
      content: 찾은상품.content,
    });
    const filteredArr = userArr.reduce((acc, current) => {
      const x = acc.find((item) => item.id === current.id);
      if (!x) {
        return acc.concat([current]);
      } else {
        return acc;
      }
    }, []);
    localStorage.setItem("cartItem", JSON.stringify(filteredArr));
  };
  // window.localStorage.setItem("title", JSON.stringify([uselocalStorage]));
  // useEffect(()=>{
  //   let 꺼낸거 = localStorage.getItem("id")
  //   꺼낸거=JSON.parse(꺼낸거)
  //   꺼낸거.push((props.shoes[id].id))

  //   꺼낸거=new Set(꺼낸거)
  //   꺼낸거=Array.from(꺼낸거)
  //   localStorage.setItem("id",JSON.stringify(꺼낸거))
  //   console.log(꺼낸거)
  // })
  // useEffect(()=>{
  //   let 꺼내= localStorage.getItem("title")
  //   setLocalStorage([...uselocalStorage,꺼내])
  //   console.log(uselocalStorage) //['빈티지']
  //   localStorage.setItem('title',JSON.stringify(uselocalStorage))
  //   let 다시꺼내 = localStorage.getItem("title")
  //   console.log(다시꺼내)

  // },[])
  //최근본 상품
  // useEffect(()=>{
  //   let 꺼냄 = localStorage.getItem('title')
  //   꺼냄=JSON.stringify(꺼냄)
  //   꺼냄.push(찾은상품.title)
  //   localStorage.setItem('title',JSON.stringify(꺼냄))
  // })
  // const localHandling = function () {
  // let 꺼내= sessionStorage.getItem("title")
  // setLocalStorage([...uselocalStorage,props.shoes[id].title])
  // console.log(uselocalStorage) //['빈티지']
  // sessionStorage.setItem('title',JSON.stringify(uselocalStorage))
  // let 다시꺼내 = sessionStorage.getItem("title")
  // console.log(다시꺼내)
  // dispatch(addItem( { id:props.shoes[id].id,title:props.shoes[id].title,img:"",count:1,price:props.shoes[id].price}))
  // let 꺼냄 = localStorage.getItem("title", JSON.stringify([찾은상품.title])); //안녕
  // 꺼냄 = JSON.stringify(꺼냄);
  // console.log(꺼냄);
  // setLocalStorage([...uselocalStorage, 꺼냄]);
  // console.log(uselocalStorage);
  // setLocalStorage([...uselocalStorage,...꺼냄])
  // 꺼냄.push(찾은상품.title);
  // localStorage.setItem("title", JSON.stringify(꺼냄));
  // console.log(uselocalStorage);
  // };
  const [alert, setAlert] = useState(true);
  const [tap, setTap] = useState(0);
  const [color, setColor] = useState("");
  const [uselocalStorage, setLocalStorage] = useState([]);
  const [heart, setHeart] = useState(0);

  let dispatch = useDispatch();
  let navigate = useNavigate();

  const alertHandling = () => alert("안녕");
  // useEffect(()=>{
  //   setColor('click')
  // },[tap])
  // const [count, setCount] = useState(0);
  let { id } = useParams();
  let 찾은상품 = props.shoes.find((x) => x.id == id);
  // detail 처음 장착됐을때,업데이트될때 실행
  // useEffect(() => {
  //   setTimeout(() => {
  //     setAlert(false);
  //   }, 2000);
  // }, [count]);
  // console.log(props.id);

  return (
    <div>
      {/* {alert === true ? <div className="boom">2초이내 구매시 할인</div> : null} */}
      <div className="detail-wrap">
        <div className="detail-img">
          <img src={props.shoes[id].img} />
        </div>
        <div className="right">
          <div className="sourceBox">
            <BiHomeAlt size={24} />
            <p>{props.shoes[id].source}</p>
          </div>
          <div className="titleBox">
            <h4>{props.shoes[id].title}</h4>
            <p>{props.shoes[id].content}</p>
          </div>
          <h1 className="detailPrice">{props.shoes[id].price}원</h1>
          <div className="selectBox">
            <select>
              <option className="detailoption" value="" selected>
                [색상]를 선택하세요.
              </option>
              <option className="detailoption" value="ibori">
                아이보리
              </option>
              <option className="detailoption" value="black">
                블랙
              </option>
              <option className="detailoption" value="white">
                화이트
              </option>
            </select>
          </div>
          <select className="selectBox">
            <option value="" selected>
              [사이즈]를 선택하세요.
            </option>
            <option value="s">S</option>
            <option value="m">M</option>
            <option value="l">L</option>
          </select>
          <div className="detailfinalamount">
            <div className="final">총 상품 금액 </div>
            <div className="amount"> {props.shoes[id].price} 원</div>
          </div>
          <div className="buttonBox">
            <a
              className="button-submitA"
              // localHandling();
              // localStoragse.setItem("title",JSON.stringify([props.shoes[id].title]))
            >
              <button className="button-submit">주문하기</button>
            </a>
            <a
              onClick={() => {
                cartItem();
                navigate("/mypage");
              }}
            >
              <button className="button-장바">
                <PiBasketLight size={28} />
              </button>
            </a>
            <a>
              <button
                onClick={() => {
                  setHeart(heart + 1);
                }}
                className="button-찜"
              >
                {heart % 2 == 1 ? (
                  <div>
                    <FiHeart size={28} color="red" />
                  </div>
                ) : (
                  <FiHeart size={28} />
                )}
              </button>
            </a>
          </div>
        </div>
      </div>
      <div className="detail-tap">
        <div className="detailbutton">
          <a
            className="detailA"
            value={0}
            type="button"
            onClick={() => {
              setTap(0);
            }}
          >
            상품정보
          </a>
        </div>
        <div className="detailbutton">
          <a
            className="detailA"
            value={1}
            type="button"
            onClick={() => {
              setTap(1);
            }}
          >
            리뷰
          </a>
        </div>
        <div className="detailbutton">
          <a
            className="detailA"
            value={2}
            type="button"
            onClick={() => {
              setTap(2);
            }}
          >
            Q&A
          </a>
        </div>
        <div className="detailbutton">
          <a
            className="detailA"
            value={3}
            type="button"
            onClick={() => {
              setTap(3);
            }}
          >
            주문정보
          </a>
        </div>
        <div className="tapbox">
          <TapCont tap={tap}></TapCont>
        </div>
      </div>
    </div>
  );
}

function TapCont({ tap }) {
  return [
    <div>상품정보 입니다</div>,
    <div>리뷰 입니다</div>,
    <div>문의 입니다</div>,
    <div>주문정보 입니다</div>,
  ][tap];
}
export default Detail;
