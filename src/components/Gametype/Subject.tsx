import { useEffect, useState } from 'react';
import phoneWithText from '../../assets/images/gametype/text_with.png';
import phoneAloneText from '../../assets/images/gametype/text_alone.png';
import leftIcon from '../../assets/images/icon/arrow_left.svg';
import rightIcon from '../../assets/images/icon/arrow_right.svg';
import { useTranslation } from "react-i18next";
import i18n from "../../locales/i18n";
import { Link } from 'react-router-dom';


const GameTypeSubject = ({type}:{type:string}) => {
	const { t } = useTranslation();

	const [textImg, setTextImg]:any = useState(phoneWithText);
	const [desc, setDesc]:any = useState(t(`main.summary-with`));

	//한번만 실행
	useEffect(() => {
		if(type === "with"){
			setTextImg(phoneWithText);
			setDesc(t(`main.summary-with`));
		} else {
			setTextImg(phoneAloneText);
			setDesc(t(`main.summary-alone`));
		}
	});
	
	return (
		<div className="type-subject">
			<nav>
				{
				type === "with"
					? (<Link to="/alone" className="nav-btn left"><img src={leftIcon} alt="Left" /></Link>)
					: ("")
				}
				<h1 className="title-img"><img src={textImg} /></h1>
				{
				type === "alone"
					? (<Link to="/with" className="nav-btn right"><img src={rightIcon} alt="Right" /></Link>)
					: ("")
				}
			</nav>
			<div className="desc">{desc}</div>
		</div>
	);
};


export default GameTypeSubject;