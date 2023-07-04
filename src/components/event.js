import { Route,Routes,Link,useNavigate,Outlet } from 'react-router-dom'

function Event(){
    return(
        <>
        <h3>
            오늘의 이벤트
        </h3>
        <Outlet></Outlet>
        </>
    )
}
export default Event;