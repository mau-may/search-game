import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
	return (
		<div className="navi">
			<button>토글</button>
			<ul>
				<Link to="/">main1</Link>
				<Link to="/kimchi">김치게임</Link>
			</ul>
		</div>
	);
};

export default Nav;
