/* eslint-disable */
import React, { useState } from 'react';
// import logo from './logo.svg';
import './App.css';

//리액트의 장점: 데이터 바인딩 쉽게 해준다. 

function App() {
  let posts = '강남 고기 맛집';
  function workSearch() {
    return 100
  }
  let styleRecord = { color: 'blue', fontSize: '30px' };




  let [title2, titleChange2] = useState(['남자 코드 추천', '강남 우동 맛집', '피곤하다 집가면 자야지', 'modal 추가']);//문자, 숫자, array, object 다 가능
  console.log('title2>>> ', title2);//state 데이터
  console.log('titleChange2>>>> ', titleChange2);//state 데이터 변경 함수


  let [따봉, 따봉변경] = useState(0);//초기값은 0
  console.log(따봉);//0
  console.log(따봉변경);//함수

  function 제목바꾸기() {
    var newArray = [...title2];
    newArray[0] = '여자코드 추천';
    newArray.sort();
    titleChange2(newArray);
  }

  let [modal, modal변경] = useState(false);

  return (
    <div className="App">
      <div className="black-nav">
        <div>개발 Blog</div>
      </div>

      <button onClick={제목바꾸기}>버튼</button>


      <div className="list">
        <h3>{title2[0]}<span onClick={() => { 따봉변경(따봉 + 1) }}>👍</span>{따봉}</h3>
        <p>따봉변경 함수를 쓸 수 있다</p>
        <hr />
      </div>


      <div className="list">
        <h3>{title2[1]}<span onClick={() => { 따봉변경(따봉 + 1) }}>👍</span>{따봉}</h3>
        <p>2월 17일 발행</p>
        <hr />
      </div>

      <div className="list">
        <h3>{title2[2]}<span onClick={() => { 따봉변경(따봉 + 1) }}>👍</span>{따봉}</h3>
        <p>2월 17일 발행</p>
        <hr />
      </div>

      <div className="list">
        <h3 onClick={()=>{modal변경(!modal)}}>{title2[3]}</h3>
        <p>2월 17일 발행</p>
        <hr />
      </div>

      { modal === true ? <Modal/> : null }

    </div>
  );
}

function Modal(){
  return(
    <div className='modal'>
      <h2>제목</h2>
      <p>날짜</p>
    </div>
  )
}

export default App;
