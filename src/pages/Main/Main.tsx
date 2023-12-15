import React from 'react';
import { Link } from 'react-router-dom';
import { Footer } from '../../components/common/Footer';
import soberGif from '../../assets/images/main/main.gif';
import aloneImg from '../../assets/images/main/phone_alone.png';
import aloneDevImg from '../../assets/images/main/alone_dev.png';
import aloneText from '../../assets/images/common/text_alone.png';
import withImg from '../../assets/images/main/phone_with.png';
import withText from '../../assets/images/common/text_with.png';
import { useTranslation } from "react-i18next";
import i18n from "../../locales/i18n";

const Main = () => {
	const { t } = useTranslation();

	return (
		<>
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
				<li className="develop">
					<img src={aloneText} alt={t(`main.summary-alone`)} />
					<div className="viewImg">
						<span className="badge">{t(`common.dev`)}</span>
						<img src={aloneDevImg} className="viewImg" alt={t(`main.summary-alone`)} />
					</div>
					<span>{t(`main.summary-alone`)}</span>
				</li>
			</ul>
		</div>
		<Footer />
		</>
	);
};

export default Main;
