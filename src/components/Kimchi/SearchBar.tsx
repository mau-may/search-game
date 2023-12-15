import { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Modal } from '../common/Modal';
import { GameSearch } from '../../apis/GameSearch';
import searchThinking from '../../assets/images/kimchi/thinking.png';
import searchTextBox from '../../assets/images/kimchi/search_textbox.png';
import searchImg from '../../assets/images/kimchi/search_img.png';
import noSearch from '../../assets/images/kimchi/no_search.png';
import { useTranslation } from "react-i18next";

const SearchBar = ({searchList, setSearchList, inputList, setInputList }:{searchList:any, setSearchList:any, inputList:any, setInputList:any}) => {
	const { t } = useTranslation();
	const navigate = useNavigate();
	const location:any = useLocation();

	const KIMCHI_KEYWROD:string = "김치";
	const [orgKw, setKw]:any = useState('');
	const [againFlag, setAgainFlag]:any = useState(false);
	const [modalOpen, setModalOpen]:any = useState(false);
	const [modalKeyword, setModalKeyword]:any = useState("");
	const resultType:string = location?.state?.state?.type;
	const pathData:any = location?.state?.state?.data;

	// 초기 실행
	useEffect(() => {
		if(resultType== "again" && pathData && !againFlag){
			console.log(pathData);
			setAgainFlag(true);
			pathData && pathData.map((item:any) => {
				setInputList(item.keyword_list); //검색했던 리스트 저장
			});
		}
	});

	const Keyword = (event:any) => {
		setKw(event.target.value.replace(/ /g,""));
		setModalKeyword(event.target.value.replace(/ /g,"") + KIMCHI_KEYWROD);
	};

	const fnGetList = async (event:any) => {
		event.preventDefault();
	
		if(!validation()){
			return false;
		}

		await resultValidation();

		let params:any = {};
		params.q = orgKw + KIMCHI_KEYWROD;
		
		setSearchList(await GameSearch(params));

		//Todo 여기서 모달 띄우면 됨
		setModalOpen(true);
	}


	function validation(){
		let flag:boolean = true;
	
		if(orgKw == ''){
			alert('키워드를 입력하세요');
			flag = false;
		}
		
		if(orgKw.includes(KIMCHI_KEYWROD)){
			setKw(orgKw.replace(KIMCHI_KEYWROD,""));
		}

		return flag;
	}

	// 키워드 검색 결과 validation
	const resultValidation = async () => {
		let flag:boolean = true;
		let state:any = {};
		let resultObj:any = {};

		if(inputList.includes(orgKw)){
			resultObj.vegetable = orgKw;
			resultObj.keyword = orgKw + " " + KIMCHI_KEYWROD;
			resultObj.keyword_list = inputList.filter((e:any) => e);

			state.type = "keyword";
			state.data = [resultObj];
			flag = false;
			goToResult({state})
		}
	}

	// Search list가 변경 시 실행
	useEffect(() => {
		if(searchResult()){
			addKeyword();
		}
	},[searchList]);


	const searchResult = () => {
		let state:any = {};
		let keyword:any = orgKw + KIMCHI_KEYWROD;
		let resultObj:any = {};
		let flag = true;

		const listItems = searchList && searchList.map((item:any) => {
			if(item.title.replace(/ /g,"").includes(keyword) && Object.keys(state).length == 0){
				resultObj.id = item.cacheId;
				resultObj.vegetable = orgKw;
				resultObj.keyword = orgKw + " " + KIMCHI_KEYWROD;
				resultObj.title = item.title;
				resultObj.link = item.link;
				resultObj.image = item?.pagemap.cse_image[0].src;

				const newKeywordArray:any = [];
				inputList && inputList.map((item:any) => {
					if(item && !newKeywordArray.includes(item)) newKeywordArray.push(item);
				});
				newKeywordArray.push(orgKw);
				console.log(newKeywordArray);
				resultObj.keyword_list = newKeywordArray;
	
				state.type = "result";
				state.data = [resultObj];
				flag = false;
				goToResult({state});
			}
		});

		return flag;
	}

	const addKeyword = () => {
		//Todo : Modal 떠야함
		if(orgKw) setInputList([...inputList, orgKw]);
		setKw(""); //input 초기화
	}

	const goToResult = (state: any) => {
		setAgainFlag(false);
		navigate("/kimchi/result", {state});
	}

	const noSearchContent = () => {
		return(
			<>
				<div className="br">
					<span className="highlighter">{modalKeyword}</span> {t(`kimchi.result-no`)}
				</div>
				<div className="br font-gray notice">
					{t(`kimchi.need-study`)}
				</div>
			</>
		)
	}

	return (
		<div className="search-bar-wrap">
			<form>
				<div className="search-bar">
					<div className="text-bg"><img src={searchTextBox} /></div>
					<input type="text" value={orgKw} 
						onChange={Keyword} placeholder={t(`kimchi.input-placeholder`)} maxLength={10} />
				</div>
				<div className="text-thinking"><img src={searchThinking} /></div>
				<div className="search-img"><img src={searchImg} /></div>
				
				<button type="submit" className="btn primary" onClick={fnGetList}>{t(`common.search`)}</button>
				{/* <SearchResult 	data={searchList} keyword={orgKw}  /> */}
			</form>
			<Modal isOpen={modalOpen} img={noSearch} content={noSearchContent} btnType={"confirm"} />
		</div>
	);
};


export default SearchBar;