import React from 'react';
import LogoUrl from '../../../assets/images/logo.png';
import Nav from './Nav';



const Header = () => {
	return (
		<header>
			<img className="logo" src={LogoUrl} alt="" />
			<Nav />
		</header>
	);
};

export default Header;
