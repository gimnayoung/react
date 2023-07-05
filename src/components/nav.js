import { Route,Routes,Link,useNavigate } from 'react-router-dom'

function Nav(){
    let navigate=useNavigate();
    return(
    <div className="wrap">
        <div>
            <ul className="main-ul">
                <a onClick={()=>{navigate('/')}} ><li>홈</li></a>
                <a><li>하루배송</li></a>
                <a><li>혜택존</li></a>
                <a><li>베스트</li></a>
                <a><li>신상</li></a>
                <a onClick={()=>{navigate('/mypage')}}><li>마이페이지</li></a>
                <a onClick={()=>{navigate('/login')}}><li>로그인</li></a>
            </ul>
        </div>
    </div>
    )
    }
export default Nav;