import { useEffect, useState } from 'react';
import phoneWith from '../../assets/images/main/phone_with.png';
import { useTranslation } from "react-i18next";


const GameTypeDoing = () => {
	const { t } = useTranslation();

	
	return (
		<div className="game-doing-develop">
			<img src={phoneWith} alt="개발중.." />
			<div className="doing-text">{t(`etc.doing`)}</div>
		</div>
	);
};


export default GameTypeDoing;