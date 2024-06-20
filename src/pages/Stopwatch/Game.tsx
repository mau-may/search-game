import React from 'react';
import { GameSubject } from '../../components/Gamesubject';
import { StopSetting } from '../../components/Stopwatch';
import { useTranslation } from "react-i18next";


const StopwatchGame = () => {
	const { t } = useTranslation();
	//state 가져올것.

	return (
		<div className="game-wrap stopwatch-wrap">
			<GameSubject type="stopwatch" />

			<StopSetting />
			<div className="notice">{t(`stopwatch.notice`)}</div>
		</div>
	);
};

export default StopwatchGame;