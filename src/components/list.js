import { useState } from "react";
import { Route, Routes, Link, useNavigate, Outlet } from "react-router-dom";
import axios from "axios";

import Data from "../data/data.json";

function List(props) {
  const navigate = useNavigate();
  const [shoes,setShoes] = useState(Data);
  const [serverdata,setServerdata]=useState([])
  const [count,setCount]=useState(1);
  // console.log(props); //{id:1}

  console.log(serverdata);
  return (
    <div className="wrap">
      <div className="listWrap">
        {shoes.map((list) => (
          <div className="list">
            <a onClick={() => navigate(`/detail/${list.id}`)}>
              <div className="imgBox">
                <img className="img" src={list.img} />
                <a className="icon">❤</a>
              </div>
              <div className="productBox">
                <p className="shopname">{list.source}</p>
                <h4>{list.title}</h4>
                <p>{list.content}</p>
                <h3>{list.price}원</h3>
              </div>
            </a>
          </div>
        ))}
      </div>
      <button onClick={()=>{
        //url로 get요청하는방법
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
      }}>버튼</button>
    </div>
  );
}

export default List;
