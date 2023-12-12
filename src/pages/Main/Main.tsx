import React from 'react';
import { Link } from 'react-router-dom';
import soberGif from '../../assets/images/main/main.gif';
import aloneImg from '../../assets/images/main/phone_alone.png';
import aloneText from '../../assets/images/common/text_alone.png';
import withImg from '../../assets/images/main/phone_with.png';
import withText from '../../assets/images/common/text_with.png';
import { useTranslation } from "react-i18next";
import i18n from "../../locales/i18n";

const Main = () => {
	const { t } = useTranslation();

	return (
		<div className='main-wrap'>
			<img src={soberGif} alt="SOBER SISTERS" />
			<ul className="main-btn-wrap">
				<li>
					<Link to="/with">
						<img src={withText} alt={t(`main.summary-with`)} />
						<img src={withImg} className="viewImg" alt={t(`main.summary-with`)} />
						<span>{t(`main.summary-with`)}</span>
					</Link>
				</li>
				<li>
					<Link to="/alone">
						<img src={aloneText} alt={t(`main.summary-alone`)} />
						<img src={aloneImg} className="viewImg" alt={t(`main.summary-alone`)} />
						<span>{t(`main.summary-alone`)}</span>
					</Link>
				</li>
			</ul>
		</div>
	);
};

export default Main;
