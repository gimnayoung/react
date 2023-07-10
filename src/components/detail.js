import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

import { BiHomeAlt } from "react-icons/bi";
import { PiBasketLight } from "react-icons/pi";
import { FiHeart } from "react-icons/fi";

function Detail(props) {
  const [alert, setAlert] = useState(true);
  const [tap, setTap] = useState(0);
  const [color, setColor] = useState("");

  const clolrHandling = (e) => {
    setColor(() => {
      return e.target.value;
    });
  };
  // useEffect(()=>{
  //   setColor('click')
  // },[tap])
  // const [count, setCount] = useState(0);
  let { id } = useParams();
  // detail 처음 장착됐을때,업데이트될때 실행
  // useEffect(() => {
  //   setTimeout(() => {
  //     setAlert(false);
  //   }, 2000);
  // }, [count]);
  // console.log(props.id);

  return (
    <div>
      {alert === true ? <div className="boom">2초이내 구매시 할인</div> : null}
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
          <input placeholder="컬러를 선택하세요"></input>
          <input placeholder="사이즈를 선택하세요"></input>
          <div className="buttonBox">
            <a className="button-submitA">
              <button className="button-submit">주문하기</button>
            </a>
            <a>
              <button className="button-장바">
                <PiBasketLight size={23} />
              </button>
            </a>
            <a>
              <button className="button-찜">
                <FiHeart size={23} />
              </button>
            </a>
          </div>
        </div>
      </div>
      <div className="detail-tap">
        <div>
          <div className="detailbutton">
            <button
              value={0}
              type="button"
              onClick={() => {
                setTap(0);
              }}
            >
              상품정보
            </button>
          </div>
          <div className="detailbutton">
            <button
              value={1}
              type="button"
              onClick={() => {
                setTap(1);
              }}
            >
              <label for="menu-2">
                {" "}
                리뷰
                <input type="radio" id="menu-2" name="tap" />
              </label>
            </button>
          </div>
          <div className="detailbutton">
            <button
              value={2}
              type="button"
              onClick={() => {
                setTap(2);
              }}
            >
              <label for="menu-3">
                Q&A
                <input type="radio" id="menu-3" name="tap" />
              </label>
            </button>
          </div>
          <div className="detailbutton">
            <button
              value={3}
              type="button"
              onClick={() => {
                setTap(3);
              }}
            >
              <label for="menu-4">
                주문정보
                <input type="radio" id="menu-4" name="tap" />
              </label>
            </button>
          </div>
          <div className="tapbox">
            <TapCont tap={tap}></TapCont>
          </div>
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
