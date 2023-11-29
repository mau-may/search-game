import React from 'react';
import LogoUrl from '../../../assets/images/common/logo.png';
import Nav from './Nav';



const Header = () => {
	return (
		<header className="header-wrap">
			<Nav />
			<a href="/">
				<img className="logo" src={LogoUrl} alt="술뽀" />
			</a>
			<a href="">QR코드</a>
		</header>
	);
};

export default Header;
