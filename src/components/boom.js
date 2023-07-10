import { useEffect, useState } from "react";
import Coupon from "../img/coupon.jpg";
function Boom() {
  const [toggle, setToggle] = useState(true);
  const [count, setCount] = useState(10);
  const [state, setState] = useState(0);

  // useEffect(()=>{
  //     setTimeout(()=>{
  //         setToggle(false)
  //     },10000)
  // },[])
  // useEffect(()=>{
  //     // setTimeout(()=>{
  //     //     setCount(count-1)
  //     // },1000),
  //     setTimeout(()=>{
  //         setToggle(false)
  //     },2000)
  // },)

  //true
  // useEffect(()=>{
  //     return()=>{
  //         setTimeout(()=>{
  //             setToggle(false)
  //         },2000)
  //     }
  // },)
  return (
    <>
      {toggle == true ? (
        <div className="boomwrap">
          <div className="boom">
            <div>
              <h2>✨쉿! {count}초 후에 닫혀요✨</h2>
              <h4>오직 회원님에게만 드리는</h4>
              <div className="coupon"></div>
              <span>비밀쿠폰 받으러가기</span>
              <a>
                <button>쿠폰받기</button>
              </a>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}

export default Boom;
