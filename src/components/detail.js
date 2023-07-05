import Data from "../data/data.json";
import { useEffect, useState } from "react";

function Detail(props) {
  const [shoes] = useState(Data);
  const [alert, setAlert] = useState(true);
  const [count, setCount] = useState(0);
  //detail 처음 장착됐을때,업데이트될때 실행
  useEffect(() => {
    setTimeout(() => {
      setAlert(false);
    }, 2000);
  }, [count]);
  console.log(props.id);

  return (
    <div>
      {alert === true ? <div className="boom">2초이내 구매시 할인</div> : null}
      <div className="detail-wrap">
        <div className="detail-img">
          <img src={shoes.data[props.id].img} />
        </div>
        <div className="right">
          <p>{shoes.data[props.id].source}</p>
          <h4>{shoes.data[props.id].title}</h4>
          <p>{shoes.data[props.id].content}</p>
          <h1>{shoes.data[props.id].price}원</h1>
          <button className="button">주문하기</button>
        </div>
      </div>
    </div>
  );
}

export default Detail;
