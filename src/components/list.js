import { useState } from "react";
import { Route, Routes, Link, useNavigate, Outlet } from "react-router-dom";

import Data from "../data/data.json";

function List(props) {
  const navigate = useNavigate();
  const [shoes] = useState(Data);
  const [heart,setHeart]=useState(false)
  console.log(props); //{id:1}
  return (
    <div className="wrap">
      <div className="listWrap">
        {shoes.data.map((list) => (
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
    </div>
  );
}

export default List;
