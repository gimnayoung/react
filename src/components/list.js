import { useState } from "react"
import Data from '../data/data.json'

function List(){
    const [shoes] = useState(Data);
    return(
        <div className='wrap'>
            <div className="listWrap">
                {
                    shoes.data.map((list)=>(
                        <div className="list">
                            <a>
                                <img className='img' src='https://gifteabox.com/web/product/tiny/202301/4face0851a38f6564d109d58c74070d5.jpg'></img>
                                <h4>{list.title}</h4>
                                <p>{list.content}</p>
                            </a>    
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default List;