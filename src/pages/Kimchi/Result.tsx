import React from 'react';
import { GameSubject } from '../../components/Gamesubject';
import { useLocation, useNavigate } from 'react-router-dom';
import { SearchBar, SearchKeyword, SearchResult } from '../../components/Kimchi';
import { useTranslation } from "react-i18next";


const Result = () => {
	const { t } = useTranslation();
	const navigate = useNavigate();
	const location:any = useLocation();
	const resultType:string = location.state.state.type;
	const resultData:any = location.state.state.data;


	console.log(resultData);


	return (
		<div className="kimchi-wrap">
			<GameSubject type="kimchi" />
			{resultType}
			{resultData.map((item:any) => {
				return (
					<div key={item.id}>
						<h2>{item.keyword} 는 있습니다요</h2>
						<h2>{item.title} </h2>
						<h2>link: {item.link}</h2>
						<h2>image: {item.image}</h2>
					</div>
				);
			})}

			여긴 결과화면이에용
			{/* <SearchBar /> */}
		</div>
	);
};

export default Result;
