import { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useTranslation } from "react-i18next";
import resultBadge from '../../assets/images/kimchi/result_badge.png';
import alreadyImg from '../../assets/images/kimchi/already_img.png';


const Result = () => {
	const { t } = useTranslation();
	const navigate = useNavigate();
	const location:any = useLocation();
	const resultType:string = location.state.state.type;
	const resultData:any = location.state.state.data;
	const [orgKw, setKw]:any = useState(''); //키워드 저장
	const [inputList, setInputList]:any = useState(''); //키워드 저장

	useEffect(() => {
		// console.log(resultData);
		if(resultData.length > 0){
			setData();
		}
	},resultData);

	const setData = () => {
		let newKeywordArray:any = [];
		resultData && resultData.map((item:any) => {
			setKw(item.vegetable); //키워드 저장
			item.keyword_list.map((data:any) => {
				if(data && !newKeywordArray.includes(data)) newKeywordArray.push(data);
			});
			setInputList(newKeywordArray); //검색했던 리스트 저장
		})
	}


	const resetGame = () => {
		let state:any = {};
		goToGame({state});
	}

	const keepGame = () => {
		let state:any = {};
		let resultObj:any = {};

		resultObj.keyword_list = inputList;

		state.type = "again";
		state.data = [resultObj];

		goToGame({state});

	}

	const goToGame = (state: any) => {
		navigate("/kimchi", {state});
	}


	return (
		<div className="kimchi-wrap">
			<div className="result-wrap">
				{resultType === "result" ? 
					resultData && resultData.map((item:any) => {
						//검색 결과 존재
						return (
							<div key={item.id}>	
								<div className="result-subject br">
									<span className="highlighter">{item.keyword}</span>{t(`kimchi.result-have`)}
								</div>
								<div className="thumb-wrap">
									<div className="thumb">
										<img src={item.image} alt={item.title} referrerPolicy="no-referrer"/>
									</div>
									<img src={resultBadge} alt="걸렸다" className="result-badge" />
								</div>
								<Link to={item.link} target="_blank" className="source font-gray">
									[{t(`common.source`)}: <q>{item.title}</q>]
								</Link>
							</div>
						);
					})
					: 
					resultData && resultData.map((item:any, idx:any) => { 
						//keyword 중복
						return (
							<div key={idx}>	
								<div className="result-subject br">
									<span className="highlighter">{item.keyword}</span>{t(`kimchi.result-already`)}
								</div>
								<div className="thumb-wrap">
									<img src={alreadyImg} alt="이미있지롱" />
								</div>
							</div>
						)
					})
				}
				<div className="btn-wrap">
					<button type="button" className="btn primary" onClick={resetGame}>{t(`common.reset`)}</button>
					<div className="worng">{t(`kimchi.if-search-worng`)}</div>
					<button type="button" className="btn defualt" onClick={keepGame}>{t(`common.keep-going`)}</button>
				</div>
			</div>
		</div>
	);
};

export default Result;
