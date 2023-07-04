
import { useState } from 'react';
import { Route,Routes,Link } from 'react-router-dom'
import './App.css';

import Nav from './components/nav'
import Data from'./data/data.json'
import List from './components/list';
import MainBG from './components/mainBG';

function App() {
  // console.log(shoes);
  return (
    <div>
      <Routes>
        <Route path='/mypage' element={<div>마이페이지</div>}></Route>
        <Route path='/login' element={<div>로그인페이지</div>}></Route>
      </Routes>
      <div>
        <Nav/>
      </div>
      <MainBG/>
      <h2>오늘은 이 상품 어때요 ?</h2>
      <div >
        <List/>
      </div>
    </div>
  );
}

export default App;
