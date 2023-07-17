import {BiSearch} from 'react-icons/bi'
import {BsPerson} from 'react-icons/bs'
import {BsCart} from 'react-icons/bs'

import Mainlogo from '../img/logo.png'
import { useNavigate } from 'react-router-dom';
function Header(){
let navigate=useNavigate();
return(
    <div className="headerWrap">
        <div className="header">
            <a onClick={()=>{navigate('/')}}>
                <div className='mainlogoimgbox'>
                 <img className='mainlogoimg' src={Mainlogo}></img>
                </div>
            </a>
            <div className='headerinputbox'>
                <input className='headerinput'></input>
                <button className='headerbut'><BiSearch size={30}/></button>
            </div>
            <div className='headericonbox'>
                <a onClick={()=>{navigate('/mypage')}}>
                    <div><BsCart size={30}/></div>
                </a>
                <a onClick={()=>{navigate('/login')}}>
                    <div><BsPerson size={31}/></div>
                </a>
            </div>
        </div>
    </div>
)
}
export default Header;