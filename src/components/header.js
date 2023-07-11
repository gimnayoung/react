import {BiSearch} from 'react-icons/bi'
import {BsPerson} from 'react-icons/bs'
import {BsCart} from 'react-icons/bs'

function Header(){
return(
    <div className="headerWrap">
        <div className="header">
            <div>
                <input></input>
                <button><BiSearch/></button>
            </div>
            <a>
                <div><BsCart/></div>
                <div><BsPerson/></div>
            </a>
        </div>
    </div>
)
}
export default Header;