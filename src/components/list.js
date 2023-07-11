import { useState } from "react";
import {
  Route,
  Routes,
  Link,
  useNavigate,
  Outlet,
  useParams,
} from "react-router-dom";

function List(props) {
  const navigate = useNavigate();
  const [count, setCount] = useState(1);
  // let { i } = useParams();
  // console.log(serverdata);
  return (
    <div className="wrap">
      <div className="listWrap">
        {props.shoes.map((list, i) => (
          <div className="list">
            <a onClick={() => navigate(`/detail/${i}`)}>
              <div className="imgBox">
                <img className="img" src={list.img} />
                <a className="icon">❤</a>
              </div>
              <div className="productBox">
                <p className="shopname">{list.source}</p>
                <h4>{list.title}</h4>
                <p className="listcontent">{list.content}</p>
                <h3>{list.price}원</h3>
              </div>
            </a>
          </div>
        ))}
      </div>
      {/* <button onClick={()=>{
        //url로 get요청
        axios.get(`https://gimnayoung.github.io/shop-server/shop${count}.json`)
        //성공했을때
        .then((response)=>{
          console.log(response.data)
          //복사본 만들기
          let copy=[...shoes,...response.data];
          setShoes(copy);
          setCount(count+1)
          console.log(count)
          console.log(copy) //합쳐진 arr
        })
        //실패했을때
        .catch(()=>{
          console.log('err');
          alert('err');
        })
      }}>버튼</button> */}
    </div>
  );
}

export default List;
