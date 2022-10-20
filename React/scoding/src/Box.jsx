import React from 'react';
import {useState} from 'react';

function Box(props){
    let clickMe = () => {
        alert('클릭햇다이기')
    }
    let [love, setLove] = useState(0)

    return(
        <div className="Box">
        Box {props.num}
        {props.name} 
        <button onClick={clickMe}>버튼</button> 
        ❤️<span onClick = { ()=> {
            setLove(love+1)
        }}>{love}</span>
      </div>
    )
}

export default Box