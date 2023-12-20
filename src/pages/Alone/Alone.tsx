import React from 'react';
import { Link } from 'react-router-dom';
import { GameTypeSubject, GameTypeDoing } from '../../components/Gametype';

const Alone = () => {
	return (
		<div className='game-type-wrap'>
			<GameTypeSubject type="alone" />
			<GameTypeDoing />
		</div>
	);
};

export default Alone;
