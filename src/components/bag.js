import { useState } from "react";
import {
  Route,
  Routes,
  Link,
  useNavigate,
  Outlet,
  useParams,
} from "react-router-dom";

import {BsHeart} from "react-icons/bs"

function Catebag(props){
    const [heart,setHeart]=useState(1);
    const navigate = useNavigate();
    let { id } = useParams();
  let 찾은상품 = props.shoes.find((x) => x.id == id);
    return(
        <>
        <div className="listWrap">
        {
        props.shoes
        .filter((list)=>list.type==="bag")
        .map((list, i) => (
          <div className="list">
            <a onClick={() => navigate(`/detail/${id}`)}>
              <div className="imgBox">
                <img className="img" src={list.img} />
                <a onClick={()=>{
                  setHeart(true)
                }} className="icon">
                  { 
                    heart%2==1 ? <div><BsHeart color="rgb(255, 31, 31)"/></div> : null
                  }
                </a>
              </div>
              <div className="productBox">
                <p className="shopname">{list.source}</p>
                <h4>{list.title}</h4>
                <p className="listcontent">{list.content}</p>
                <h3 className="listprice">{list.price}<span className="원">원</span></h3>
              </div>
            </a>
          </div>
        ))}
        
      </div>
        </>
    )
}

export default Catebag;