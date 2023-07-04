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
                                <img className='img' src={list.img}/>
                                <p className="shopname">{list.source}</p>
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