import React from 'react';
import { Link } from 'react-router-dom';



const Main = () => {
	return (
		<div className='main-wrap'>
			<h1>김치 게임</h1>
			<Link to='/hello'>시작하기</Link>
		</div>
	);
};

export default Main;
