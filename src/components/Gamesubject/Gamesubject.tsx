import { useEffect, useState } from 'react';
import textKimchi from '../../assets/images/handwriting/kimchi.png';
import textStopWatch from '../../assets/images/handwriting/stopwatch.png';
import { useTranslation } from "react-i18next";


const GameSubject = ({type}:{type:string}) => {
	const { t } = useTranslation();

	const [textImg, setTextImg]:any = useState(textKimchi);
	const [desc, setDesc]:any = useState(t(`game-desc.kimchi`));

	//한번만 실행
	useEffect(() => {
		if(type === "kimchi"){
			setTextImg(textKimchi);
			setDesc(t(`game-desc.kimchi`));
		} else if(type === "stopwatch") {
			setTextImg(textStopWatch);
			setDesc(t(`game-desc.stopwatch`));
		}
	});
	
	return (
		<div className="game-subject">
			<nav>
				<h1 className="title-img"><img src={textImg} /></h1>
				<div className="desc">{desc}</div>
			</nav>
		</div>
	);
};


export default GameSubject;