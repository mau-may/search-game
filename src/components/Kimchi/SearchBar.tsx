import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { GameSearch } from '../../apis/GameSearch';
import searchThinking from '../../assets/images/kimchi/thinking.png';
import searchTextBox from '../../assets/images/kimchi/search_textbox.png';
import searchImg from '../../assets/images/kimchi/search_img.png';
import SearchResult from './SearchResult';
import SearchKeyword from './SearchKeyword';
import { useTranslation } from "react-i18next";

const SearchBar = ({searchList, setSearchList, inputList, setInputList }:{searchList:any, setSearchList:any, inputList:any, setInputList:any}) => {
	const { t } = useTranslation();

	const KIMCHI_KEYWROD:string = "김치";
	const [orgKw, setKw]:any = useState('');
	const navigate = useNavigate();


	const Keyword = (event:any) => {
		setKw(event.target.value.replace(/ /g,""));
	};

	const fnGetList = async (event:any) => {
		event.preventDefault();
	
		if(!validation()){
			return false;
		}

		await resultValidation();

		let params:any = {};
		params.q = orgKw + KIMCHI_KEYWROD;
		
		setSearchList(await GameSearch(params))
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

		if(inputList.includes(orgKw)){
			state.type = "keyword";
			state.data = [orgKw];
			flag = false;
			goToResult({state})
		}
	}

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
				resultObj.keyword = orgKw + " " + KIMCHI_KEYWROD;
				resultObj.title = item.title;
				resultObj.link = item.link;
				resultObj.image = item.pagemap.cse_image[0].src;
	
				state.type = "result";
				state.data = [resultObj];
				flag = false;
				goToResult({state})
			}
		});

		return flag;
	}

	const addKeyword = () => {
		//Todo : Modal 떠야함
		setInputList([...inputList, orgKw]);
	}

	const goToResult = (state: any) => {
		navigate("/kimchi/result", {state});
	}

	
	return (
		<div className="search-bar-wrap">
			<form>
				<div className="search-bar">
					<div className="text-bg"><img src={searchTextBox} /></div>
					<input type="text" value={orgKw} onChange={Keyword} placeholder={t(`kimchi.input-placeholder`)} maxLength={10} />
					<div className="text-thinking"><img src={searchThinking} /></div>
				</div>
				<div className="search-img"><img src={searchImg} /></div>
				
				<button type="submit" className="btn primary" onClick={fnGetList}>{t(`common.search`)}</button>
				{/* <SearchResult 	data={searchList} keyword={orgKw}  /> */}
			</form>
			
		</div>
	);
};


export default SearchBar;