function Recently(){
    const watchedUser=localStorage.getItem("watchedUser")
    const newWatchedUser=JSON.parse(watchedUser)
 return(
    <div className="recentlywrap">
        <h2>장바구니</h2>
        <h2>최근 본 상품</h2>
        <div className="recently">
            {newWatchedUser.slice(0).reverse().map((list,index)=>(
                <div className="recentlylistwrap">
                    <div className="recentlyImgBox">
                        <a>
                        <img src={list.img} className="recentlyImg"></img>
                        </a>
                    </div>
                    <div className="recentlycontent">
                        <div className="recentlytitle">{list.title}</div>
                        <div className="recentlyprice">{list.price}원</div>
                    </div>
                </div>
            ))}
            <a></a>
        </div>
    </div>
 )
}
export default Recently;