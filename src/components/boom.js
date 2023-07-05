// import { count } from "console";
import { useEffect, useState } from "react";

function Boom(){
    return(
        <div className="boomwrap">
            <div className="boom">
                <h2>✨쉿! {}초 후에 닫혀요✨</h2>
                <div>회원님에게만 드리는</div>
                <span>비밀쿠폰</span>
                <button>쿠폰받기</button>
            </div>
        </div>
    )
}

export default Boom;