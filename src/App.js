import React, { useState } from 'react';
import './App.css';

function App() {

	let [글제목, 글제목변경] = useState(['남자 코트 추천', '강남 우동 맛집', '리액트를 해보자']);
	let [따봉, 따봉변경] = useState([0, 0, 0]);

	let [modal, modal변경] = useState(false);

	let [누른제목, 누른제목변경] = useState(0);

	let [입력값, 입력값변경] = useState('');

	// function 반복된UI() {
		
	// 	var 어레이 = [];

	// 	for(var i = 0; i < 3; i++){
	// 		어레이.push(<div>안녕</div>);
	// 	}

	// 	return 어레이;
	// }

	// var 어레이 = [ 2, 3, 4 ];
	// var 뉴어레이 = 어레이.map( (a)=> {
	// 	return a * 2;
	// });
	// console.log(뉴어레이); //4, 6, 8

	// function 제목바꾸기() {
	// 	var newArray = [...글제목];
	// 	newArray[0] = '여자 코트 추천';
	// 	글제목변경(newArray.sort());
	// }
	function 글작성() {
		var newArray = [...글제목];
		newArray.unshift(입력값);
		글제목변경(newArray);
	}
	function 따봉누르기(index) {
		var newArray = [...따봉];
		newArray[index] = newArray[index] + 1;
		console.log(newArray[index]);
		따봉변경(newArray);
	}

	function modal켜기끄기(index) {
		if(누른제목 === index && modal === true){
			modal변경(false);
		}else{
			modal변경(true);
		}
	}


	return (
		<div className="App">
			<div className="black-nav">
				<div>개발 blog</div>
			</div>
			{/* <button onClick={제목바꾸기}>버튼</button> */}
			{/* { 반복된UI() } */}
			{ 
				글제목.map((글, index)=>{
					return	(
						<div className="list" key={index}>
							<h3><a onClick={ ()=>{ 누른제목변경(index); modal켜기끄기(index) }}>{글}</a><span onClick={ ()=> { 따봉누르기(index) } }>👍</span>{따봉[index]}</h3>
							<p>2월 19일 발행</p>
							<hr />
						</div>
					)
				})
			}

			{/* {입력값}
			<input onChange={ (e)=>{ 입력값변경(e.target.value) } } /> */}
			<div className="publish">
				<input onChange={ (e)=>{ 입력값변경(e.target.value) } } />
				<button onClick={ 글작성 }>저장</button>				
			</div>

			<Profile></Profile>

			{
				modal === true
				? <Modal 글제목={글제목} 누른제목={누른제목} modal={modal}/>
				: null
			}
		</div>
	)
}

function Modal(props) {

	return (
		<div className="modal">
			<h2>{props.글제목[props.누른제목]}</h2>
			<p>날짜</p>
			<p>상세내용</p>
		</div>
	)
}

class Profile extends React.Component {
	constructor(){
	  super();
	  this.state = { name : 'Kim', age : 30 }
	}

	changeName = () => {
	  this.setState( {name : 'Park'} )
	}
  
	render(){
	  return (
		<div>
		  <h3> 저는 { this.state.name } 입니다 </h3>
        	<button onClick={ this.changeName }> 버튼 </button>
		</div>
	  )
	}
  }

export default App;
