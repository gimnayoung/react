import Data from '../data/data.json'
import { useState } from 'react';

function Detail(props){
    const [shoes] = useState(Data);
    console.log(props.id);

    return(
        <div className='detail-wrap'>
            <img src={shoes.data[props.id].img} />
            <div className='right'>
                <p>{shoes.data[props.id].source}</p>
                <h4>{shoes.data[props.id].title}</h4>
                <p>{shoes.data[props.id].content}</p>
                <p>{shoes.data[props.id].price}원</p>
                <button>주문하기</button>
            </div>
        </div>
    )
}

export default Detail;