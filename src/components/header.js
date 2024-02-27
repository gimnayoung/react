import { BiSearch } from "react-icons/bi";
import { BsPerson } from "react-icons/bs";
import { BsCart } from "react-icons/bs";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";
// import { userActions } from "../action/userAction";
import Mainlogo from "../img/logo.png";


function Header() {
  let navigate = useNavigate();
  const onCheckEnter = (event) => {
    if (event.key === "Enter") {
      if (event.target.value === "") {
        return navigate("/");
      }
      navigate(`?name=${event.target.value}`);
    }
  };
  const onCheckClick=(event)=>{
    if (event.target.value === "") {
      return navigate("/");
    }
    navigate(`?name=${event.target.value}`);
  }
  const isMobile = window.navigator.userAgent.indexOf("Mobile") !== -1;
  return (
    <div className="headerWrap">
      <div className="header">
        <a
          onClick={() => {
            navigate("/");
          }}
        >
          <div className="mainlogoimgbox">
            <img className="mainlogoimg" src={Mainlogo}></img>
          </div>
        </a>
        <div>
          {!isMobile && ( // admin페이지에서 같은 search-box스타일을 쓰고있음 그래서 여기서 서치박스 안보이는것 처리를 해줌
            <div className="headerinputbox">
            <div>
              {/* <FontAwesomeIcon icon={faSearch} /> */}
              <input
              className="headerinput"
                type="text"
                placeholder="제품검색"
                onKeyPress={onCheckEnter}
              />
              </div>
              <button className="headerbut" onClick={onCheckClick}>
              <BiSearch size={30} />
             </button> 
             </div>
          )}
        </div>
        <div className="headericonbox">
          <a
            onClick={() => {
              navigate("/mypage");
            }}
          >
            <div>
              <BsCart size={30} />
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}
export default Header;
