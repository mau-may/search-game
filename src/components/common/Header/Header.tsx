import React from 'react';
import LogoUrl from '../../../assets/images/common/logo.png';
import Nav from './Nav';
import qr from '../../../assets/images/icon/qr.png';
import { useTranslation } from "react-i18next";
import i18n from "../../../locales/i18n";



const Header = () => {
	const { t } = useTranslation();
	
	return (
		<header className="header-wrap">
			<Nav />
			<a href="/" className="logo">
				<img src={LogoUrl} alt="술뽀" />
			</a>
			<a href="" className='qr-code'><img src={qr} alt="QR Code" />{t(`header.qr`)}</a>
		</header>
	);
};

export default Header;
