
import { useState } from 'react';
import './App.css';

import Nav from './components/nav'
import Data from'./data/data.json'
import List from './components/list';

function App() {
  let [shoes]=useState(Data);
  // console.log(shoes);

  return (
    <div>
      <div>
        <Nav/>
      </div>
      <div className='main-bg'>
      </div>
      <h2>오늘은 이 상품 어때요 ?</h2>
      <div >
        <List/>
      </div>
    </div>
  );
}

export default App;
