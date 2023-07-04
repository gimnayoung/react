
import { useState } from 'react';
import { Route,Routes,Link,useNavigate,Outlet } from 'react-router-dom'
import './App.css';

import Nav from './components/nav'
import Data from'./data/data.json'
import List from './components/list';
import MainBG from './components/mainBG';
import Detail from './components/detail';
import Event from './components/event';

function App() {
  // console.log(shoes);
  let navigate=useNavigate();
  const [shoes]=useState(Data);

  return (
    <div>
      <Routes>
        <Route path='/' element={
          <>
            <div>
              <Nav/>
            </div>
            <MainBG/>
            <h2>오늘은 이 상품 어때요 ?</h2>
            <div>
              <List />
            </div>
        </>
        }>
        </Route>
        <Route path="/detail" >
          <Route path='0' element={<Detail id={0}/>}></Route>
          <Route path='1' element={<Detail id={1} />}></Route>
          <Route path='2' element={<Detail id={2} />}></Route>
        </Route>
        <Route path='/login' element={<div>로그인페이지</div>}></Route>
        <Route path='*' element={<div>에러페이지</div>}></Route>
        <Route path='/event'  element={<Event/>}>
          <Route path='one' element={<div>첫 주문시 양배추즙 서비스</div>}></Route>
          <Route path='two' element={<div>생일기념 쿠폰받기</div>}></Route>
        </Route>
      </Routes>
      {/* <div>
        <Nav/>
      </div>
      <MainBG/>
      <h2>오늘은 이 상품 어때요 ?</h2>
      <div >
        <List/>
      </div> */}
    </div>
  );
}

export default App;
