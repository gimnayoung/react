import React, { useEffect, useState } from "react";
import { BiSearch } from "react-icons/bi";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { userActions } from "../action/userAction";
import Mainlogo from "../img/logo.png";
import { BsCart } from "react-icons/bs";

const Navbar=({user})=>{
  const dispatch = useDispatch();
  const { cartItemQty } = useSelector((state) => state.cart) || {};
  const isMobile = window.navigator.userAgent.indexOf("Mobile") !== -1;
  const [showSearchBox, setShowSearchBox] = useState(false);
  let [width, setWidth] = useState(0);
  let navigate = useNavigate();
useEffect(()=>{
  console.log(user,'usersdfs')
},[])
  const onCheckEnter = (event) => {
    if (event.key === "Enter") {
      if (event.target.value === "") {
        return navigate("/");
      }
      navigate(`?name=${event.target.value}`);
    }
  };
  const logout = () => {
    dispatch(userActions.logout());
  };
    return(
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
              <button className="headerbut" >
              <BiSearch size={30} />
             </button> 
             </div>
          )}
        </div>
      {showSearchBox && (
        <div className="display-space-between mobile-search-box w-100">
          <div className="search display-space-between w-100">
            <div>
              <input
                type="text"
                placeholder="제품검색"
                onKeyPress={onCheckEnter}
              />
            </div>
            <button
              className="closebtn"
              onClick={() => setShowSearchBox(false)}
            >
              &times;
            </button>
          </div>
        </div>
      )}
      <div className="side-menu" style={{ width: width }}>
        {/* <button className="closebtn" onClick={() => setWidth(0)}>
          &times;
        </button> */}
      </div>
      {user && user.level === "admin" && (
        <Link to="/admin/product?page=1" className="link-area">
          Admin page
        </Link>
      )}
      <div className="nav-header">
        <div className="burger-menu hide">
        </div>
        <div>
          <div className="display-flex">
            {user ? (
              <div onClick={logout} className="nav-icon">
                {!isMobile && (
                  <span style={{ cursor: "pointer" }}>로그아웃</span>
                )}
              </div>
            ) : (
              <div onClick={() => navigate("/login")} className="nav-icon">
                {!isMobile && <span style={{ cursor: "pointer" }}>로그인</span>}
              </div>
            )}
             {!user || !isMobile && (
              <>
              <div onClick={() => navigate("/mypage")} className="nav-icon">
                  <span style={{ cursor: "pointer" }}>{`(${
                    cartItemQty || 0
                  })`}</span>
                <div>
                <BsCart size={30} />
              </div>
              </div>
            </>
            )}
            <div
              onClick={() => navigate("/account/purchase")}
              className="nav-icon"
            >
              {/* <FontAwesomeIcon icon={faBox} /> */}
              { user===null || !isMobile && <span style={{ cursor: "pointer" }}>내 주문</span>}
            </div>
            {isMobile && (
              <div className="nav-icon" onClick={() => setShowSearchBox(true)}>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="nav-logo">
        <Link to="/">
          {/* <img width={100} src="/image/hm-logo.png" alt="hm-logo.png" /> */}
        </Link>
      </div>
      </div>
    </div>
    )
}
export default Navbar