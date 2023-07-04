
import { useState } from 'react';
import './App.css';

import Nav from './components/nav'
import Data from'./data/data.json'
import List from './components/list';

function App() {
  let [shoes]=useState(Data);
  // console.log(shoes);

  return (
    <div className='wrap'>
      <div>
        <Nav/>
      </div>
      <div className='main-bg'>
      </div>
      <div id='listWrap'>
        <List/>
      </div>
    </div>
  );
}

export default App;
