import { useEffect, useState } from 'react';
import { GameSubject } from '../../components/Gamesubject';
import { useLocation, useNavigate } from 'react-router-dom';
import { SearchBar, SearchKeyword, SearchResult } from '../../components/Kimchi';
import { useTranslation } from "react-i18next";
import resultBadge from '../../assets/images/kimchi/result_badge.png';


const Result = () => {
	const { t } = useTranslation();
	const navigate = useNavigate();
	const location:any = useLocation();
	const resultType:string = location.state.state.type;
	const resultData:any = location.state.state.data;
	// const [keyword, setKeyword]:any = useState();
	const [thumb, setThumb]:any = useState("");

	useEffect(() => {
		

	});


	return (
		<div className="kimchi-wrap">
			{resultType === "result" 
				&& resultData && resultData.map((item:any) => {
				return (
					<div className="result-wrap" key={item.id}>	
						<div className="result-subject br">
							<span>{item.keyword}</span>{t(`kimchi.result-have`)}
						</div>
						<div className="thumb">
							{/* 썸네일 이미지 엑박 해결  */}
							<img src={item.image} alt={item.title} />
							<img src={resultBadge} alt="걸렸다" className="result-badge" />
						</div>
						<q>{item.title} </q>
							<h2>link: {item.link}</h2>
							<h2>image: {item.image}</h2>
					</div>
				);
			})}

			여긴 결과화면이에용
		</div>
	);
};

export default Result;
