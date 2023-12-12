import React from 'react';
import { Link } from 'react-router-dom';
import notFoundImg from '../../assets/images/notfound/main.png';
import { useTranslation } from "react-i18next";
import i18n from "../../locales/i18n";

const NotFound = () => {
	const { t } = useTranslation();

	return (
		<div className='not-found-wrap'>
			<h1 className="title">{t(`notfound.title`)}</h1>
			<div className="summary">{t(`notfound.summary`)}</div>
			<img src={notFoundImg} />
			<Link to="/" className="btn">홈으로 이동</Link>
		</div>
	);
};

export default NotFound;
