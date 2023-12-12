import React from 'react';
import { Link } from 'react-router-dom';
import soberGif from '../../assets/images/common/main.gif';
import { GameTypeSubject } from '../../components/Gametype';

const With = () => {
	return (
		<div className='game-type-wrap'>
			<GameTypeSubject type="with" />
			with!
		</div>
	);
};

export default With;
