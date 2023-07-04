import { Route,Routes,Link } from 'react-router-dom'

function Nav(){
    return(
    <div className="wrap">
        <div>
            <ul className="main-ul">
                <Link to='/'><li>홈</li></Link>
                <a><li>카테고리</li></a>
                <a><li>하루배송</li></a>
                <a><li>혜택존</li></a>
                <a><li>베스트</li></a>
                <a><li>신상</li></a>
                <Link to='/mypage'><li>마이페이지</li></Link>
                <Link to='/login'><li>로그인</li></Link>
            </ul>
        </div>
    </div>
    )
    }
export default Nav;