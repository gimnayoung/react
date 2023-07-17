import Main from "../img/main.png";
import Main1 from "../img/main1.jpg";
import Main2 from "../img/main2.jpg";
import Main3 from "../img/main3.jpg";
import Main4 from "../img/main4.jpg";

import {GrFormNext} from "react-icons/gr"
import {GrFormPrevious} from "react-icons/gr"
function MainBG() {
  return (
    <div>
      <div className="BGimge-slider" id="BGimge-slider1">
        <div className="BGsliderbody">
          <div className="imglist">
            <img className="BGimg" src={Main}></img> 
            <img className="BGimg" src={Main1}></img>
            <img className="BGimg" src={Main2}></img>
            <img className="BGimg" src={Main3}></img>
            <img className="BGimg" src={Main4}></img>
          </div>
          <ul className="BGindex-nav">
            <li><a href="#" alt="1"></a>1</li>
            <li><a href="#" alt="2"></a>2</li>
            <li><a href="#" alt="3"></a>3</li>
            <li><a href="#" alt="4"></a>4</li>
            <li><a href="#" alt="5"></a>5</li>
          </ul>
      </div>
     </div>
      <div className="BG-slider-btn-pre">
        <div><GrFormPrevious/></div>
      </div>
      <div className="BG-slider-btn-next">
        <div><GrFormNext/></div>
      </div>
    </div>
  );
}

export default MainBG;
