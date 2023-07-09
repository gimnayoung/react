import { useEffect, useState } from "react";
import { Route, Routes, Link, useNavigate, Outlet } from "react-router-dom";
import "./App.css";
import axios from "axios";

import Nav from "./components/nav";
import Data from "./data/data.json";
import List from "./components/list";
import MainBG from "./components/mainBG";
import Detail from "./components/detail";
import Event from "./components/event";
import Footer from "./components/footer";
import Boom from "./components/boom";

function App() {
  // console.log(shoes);
  let navigate = useNavigate();
  const [shoes, setShoes] = useState(Data);
  const [count, setCount] = useState(1);

  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={
            <>
              {/* <Boom/> */}
              <div>
                <Nav />
              </div>
              <MainBG />
              <h1>오늘은 이 상품 어때요?</h1>
              <div>
                <List shoes={shoes} />
              </div>
              <button
                onClick={() => {
                  //url로 get요청
                  axios
                    .get(
                      `https://gimnayoung.github.io/shop-server/shop${count}.json`
                    )
                    //성공했을때
                    .then((response) => {
                      console.log(response.data);
                      //복사본 만들기
                      let copy = [...shoes, ...response.data];
                      setShoes(copy);
                      setCount(count + 1);
                      console.log(count);
                      console.log(copy); //합쳐진 arr
                    })
                    //실패했을때
                    .catch(() => {
                      console.log("err");
                      alert("err");
                    });
                }}
              >
                버튼
              </button>
            </>
          }
        ></Route>
        <Route path="/detail/:id" element={<Detail shoes={shoes} />}>
          {/* <Route path="1" element={<Detail id={1} />}></Route>
          <Route path="2" element={<Detail id={2} />}></Route> */}
        </Route>
        <Route path="/login" element={<div>로그인페이지</div>}></Route>
        <Route path="*" element={<div>에러페이지</div>}></Route>
        <Route path="/event" element={<Event />}>
          <Route
            path="one"
            element={<div>첫 주문시 양배추즙 서비스t</div>}
          ></Route>
          <Route path="two" element={<div>생일기념 쿠폰받기</div>}></Route>
        </Route>
        {/* //test */}
        <Route path="/test" element={<Boom />}></Route>
      </Routes>
      {/* <Footer/> */}
    </div>
  );
}

export default App;
