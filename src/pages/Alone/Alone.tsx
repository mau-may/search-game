import React from 'react';
import { Link } from 'react-router-dom';
import { GameTypeSubject } from '../../components/Gametype';

const Alone = () => {
	return (
		<div className='game-type-wrap'>
			<GameTypeSubject type="alone" />
			Alone
		</div>
	);
};

export default Alone;
