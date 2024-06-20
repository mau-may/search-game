import React from 'react';
import { GameSubject } from '../../components/Gamesubject';
import { Link } from 'react-router-dom';
import { useTranslation } from "react-i18next";


const KimchiMain = () => {
	const { t } = useTranslation();

	return (
		<div className="game-wrap kimchi-wrap">
			<GameSubject type="kimchi" />
			<Link to="/kimchi/start" className="btn w100">{t(`common.start`)}</Link>
			<div className="notice">{t(`kimchi.notice`)}</div>
		</div>
	);
};

export default KimchiMain;
