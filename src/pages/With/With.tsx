import React from 'react';
import { Link } from 'react-router-dom';
import { GameTypeSubject, GameTypeDoing } from '../../components/Gametype';
import kimchi from '../../assets/images/icon/kimchi.png';
import stopwatch from '../../assets/images/icon/stopwatch.png';
import writingKimchi from '../../assets/images/handwriting/kimchi.png';
import writingStopwatch from '../../assets/images/handwriting/stopwatch.png';
import { useTranslation } from "react-i18next";

const With = () => {
	const { t } = useTranslation();
	return (
		<div className='game-type-wrap'>
			<GameTypeSubject type="with" />
			<ul className="type-link">
				<li>
					<Link to="/kimchi">
						<div className="icon">
							<img src={kimchi} alt={t(`common.kimchi`)} />
						</div>
						<div className="text-box">
							<img src={writingKimchi} alt={t(`common.kimchi`)} />
							<span>{t(`game-desc.kimchi`)}</span>
						</div>
					</Link>
				</li>
				<li>
					<Link to="/stopwatch">
						<div className="icon">
							<img src={stopwatch} alt={t(`common.stopwatch`)} />
						</div>
						<div className="text-box">
							<img src={writingStopwatch} alt={t(`common.stopwatch`)} />
							<span>{t(`game-desc.stopwatch`)}</span>
						</div>
					</Link>
				</li>
			</ul>
			<GameTypeDoing />
		</div>
	);
};

export default With;
