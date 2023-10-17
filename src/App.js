import { useEffect, useState } from "react";
import {
  Route,
  Routes,
  Link,
  useNavigate,
  Outlet,
  BrowserRouter,
  HashRouter,
} from "react-router-dom";
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
import Cart from "./components/cart";
import PPL1 from "./components/ppl1";
import PPL2 from "./components/ppl2";
import Recently from "./components/recently";
import Header from "./components/header";
import Login from "./components/login";
import Catetop from "./components/top";
import Catebot from "./components/bot";
import Onepiece from "./components/onepiece";
import Cateshoe from "./components/shoe";
import Catebag from "./components/bag";
import Catefashion from "./components/fashion";

import Outer from "../src/img/outer.png";
import Piece from "../src/img/onepice.png";
import Top from "../src/img/top.png";
import Bot from "../src/img/bot.png";
import Bag from "../src/img/bag.png";
import Shoe from "../src/img/shoes.png";
import Fashion from "../src/img/fa.png";
import All from "../src/img/all.png";
import Cateouter from "./components/outer";

function App(props) {
  // console.log(shoes);
  let navigate = useNavigate();
  const [shoes, setShoes] = useState(Data);
  const [count, setCount] = useState(1);
  const [listtap, setListtap] = useState(0);
  const [mainall, setMainall] = useState(false);

  // useEffect(()=>{
  //   axios
  //                     .get(
  //                       `https://gimnayoung.github.io/shop-server/shop${count}.json`
  //                     )
  //                     //성공했을때
  //                     .then((response) => {
  //                       console.log(response.data);
  //                       //복사본 만들기
  //                       let copy = [...shoes, ...response.data];
  //                       setShoes(copy);
  //                       setCount(count + 1);
  //                       console.log(count);
  //                       console.log(copy); //합쳐진 arr
  //                     })
  //                     //실패했을때
  //                     .catch(() => {
  //                       console.log("err");
  //                       // alert("err");
  //                     });
  // },[])

  return (
    <div>
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <h1>오늘은 이 상품 어때요?</h1>
              <div className="smallcatagoriwrap">
                <div className="smallcatagori">
                  <a
                    onClick={() => {
                      setMainall(false);
                      setListtap(null);
                    }}
                  >
                    <img src={All}></img>
                    <div>전체</div>
                  </a>
                  <a
                    onClick={() => {
                      setListtap(0);
                      setMainall(true);
                    }}
                  >
                    <img src={Outer}></img>
                    <div>아우터</div>
                  </a>
                  <a
                    onClick={() => {
                      setListtap(1);
                      setMainall(true);
                    }}
                  >
                    <img src={Piece}></img>
                    <div>원피스/세트</div>
                  </a>
                  <a
                    onClick={() => {
                      setListtap(2);
                      setMainall(true);
                    }}
                  >
                    <img src={Top}></img>
                    <div>상의</div>
                  </a>
                  <a
                    onClick={() => {
                      setListtap(3);
                      setMainall(true);
                    }}
                  >
                    <img src={Bot}></img>
                    <div>하의</div>
                  </a>
                  <a
                    onClick={() => {
                      setListtap(4);
                      setMainall(true);
                    }}
                  >
                    <img src={Bag}></img>
                    <div>가방</div>
                  </a>
                  <a
                    onClick={() => {
                      setListtap(5);
                      setMainall(true);
                    }}
                  >
                    <img src={Shoe}></img>
                    <div>신발</div>
                  </a>
                  <a
                    onClick={() => {
                      setListtap(6);
                      setMainall(true);
                    }}
                  >
                    <img src={Fashion}></img>
                    <div>패션소품</div>
                  </a>
                </div>
              </div>
              <div>
                <ListtapCont
                  listtap={listtap}
                  Cateouter={Cateouter}
                  Onepiece={Onepiece}
                  Catetop={Catetop}
                  Catebot={Catebot}
                  Catebag={Catebag}
                  Cateshoe={Cateshoe}
                  Catefashion={Catefashion}
                  shoes={shoes}
                ></ListtapCont>
                {mainall === false ? <List shoes={shoes} /> : null}
              </div>
              <div className="mainlistbutbox">
                <button
                  className="mainlistbut"
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
                        alert("더이상 상품이 없습니다.");
                      });
                  }}
                >
                  상품 더보기
                </button>
              </div>
              <h1>지금 뜨고 있는 혜택</h1>
              <div className="pplbox">
                <div className="ppl1box">
                  <PPL1 />
                </div>
                <div className="ppl1box">
                  <PPL2 />
                </div>
              </div>
            </>
          }
        ></Route>
        <Route path="/detail/:id" element={<Detail shoes={shoes} />}>
          {/* <Route path="1" element={<Detail id={1} />}></Route>
          <Route path="2" element={<Detail id={2} />}></Route> */}
        </Route>
        <Route
          path="/login"
          element={
            <div>
              <Login />
            </div>
          }
        ></Route>
        <Route path="*" element={<div>에러페이지</div>}></Route>
        <Route
          path="/mypage"
          element={
            <>
              <Cart />
              <Recently />
            </>
          }
        ></Route>
        {/* //test */}
        <Route
          path="/test"
          element={
            <>
              <Boom />
              <Cart />
            </>
          }
        ></Route>
      </Routes>
      <Footer />
    </div>
  );
}

function ListtapCont({
  listtap,
  Cateouter,
  Onepiece,
  Catetop,
  Catebot,
  Catebag,
  Cateshoe,
  Catefashion,
  shoes,
}) {
  return [
    <div>
      <Cateouter shoes={shoes} />
    </div>,
    <div>
      <Onepiece shoes={shoes} />
    </div>,
    <div>
      <Catetop shoes={shoes} />
    </div>,
    <div>
      <Catebot shoes={shoes} />
    </div>,
    <div>
      <Catebag shoes={shoes} />
    </div>,
    <div>
      <Cateshoe shoes={shoes} />
    </div>,
    <div>
      <Catefashion shoes={shoes} />
    </div>,
  ][listtap];
}
export default App;
