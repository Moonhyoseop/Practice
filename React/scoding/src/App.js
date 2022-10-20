import logo from './logo.svg';
import './App.css';
import Box from "./Box" 
import { useState, useEffect } from 'react';
import axios from 'axios';
import Comment from './Comment';

function App() {

  let [글제목, 글제목변경] = useState(['하이', '바이', '가이', '자이','보이','토이'])
  let [modal, setModal] = useState(false);
  let [입력값, 입력값변경] = useState('');
  let [좋아요, 좋아요변경] = useState([0,0,0,0,0,0]);
  let [찜, 찜변경] = useState([0,0,0,0,0,0]);
  let [alert, setAlert] = useState(true);
  let [랜덤숫자, 랜덤숫자변경] = useState([1,2,3,4,5,6,7,8,9]);


  useEffect(()=>{
    setTimeout(()=>{ setAlert(false) },2000)
  }, [])

  const randomNum = function(length){
    return Number(Math.floor(Math.random() * length + 1))
  }


 
  return(



    <div>

      <div>
        { randomNum(랜덤숫자.length)} 곱하기 {randomNum(랜덤숫자.length)} 은? 
        <input type="number" />
      
      </div>

      <button onClick={ ()=> {
        setModal(!modal)
      }}>모달창열기</button>
      {
        modal === true
        ? <모달 글제목변경={글제목변경} 글제목={글제목}/>
        : null
      }
      <input onChange={(e)=>{
        입력값변경(e.target.value);
        console.log(입력값)
      }} />

      {
        [1,2,3].map(function(){
          return(
            <div>
              <button onClick={ ()=> {
              let 수정 = [...글제목]
              수정[0] = '바뀌엇3'
              글제목변경(수정);
              }}>글수정</button>
              </div>
          )
        })
      }

      {
        alert == true 
        ? <div>
          2초 정도의 광고입니다.
        </div>
        :null
      }
      

      {
        글제목.map(function(a, i){
          return (
            <div>
              <h4>{글제목[i]}
              <span onClick={ ()=> {
                let copy = [...좋아요];
                copy[i] = copy[i] + 1
                좋아요변경(copy)
              }}>👍</span>{좋아요[i]}
              <span onClick = {()=>{
                let copy2 = [...찜];
                copy2[i] = copy2[i] + 1
                찜변경(copy2)
              }}> ❤️ </span> {찜[i]} </h4>
              <p>2월 17일 발행</p>
            </div>
          )
        })
      }

      <button onClick={() => {
        let copy3 = [...글제목]
        copy3 = copy3.sort();
        글제목변경(copy3);
      }}>정렬</button>



    </div>
  )
}


function 모달(props){
  return(
    <div className="modal">
      <div>
        <p>아이디</p>
        <input type="text"/>
      </div>

      <div>
        <p>{props.글제목[0]}</p>
        <input type="text"/>
      </div>

      <div>
        <p>이메일 주소</p>
        <input type="text"/>
      </div>

      <div>
        <p>비밀번호</p>
        <input type="password"/>
      </div>

      <div>
        <button onClick={ ()=>{
          let 키키 = [props.글제목변경];
          키키[0] = '터졋다'
          props.글제목변경(키키);
        }}>글수정</button>
      </div>

      <div>
        <input type="submit" className="submit"/>
      </div>


      <Comment />
    </div>



  )
}

export default App;

