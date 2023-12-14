import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { GameSearch } from '../../apis/GameSearch';
import SearchResult from './SearchResult';
import SearchKeyword from './SearchKeyword';

const SearchBar = ({searchList, setSearchList, inputList, setInputList }:{searchList:any, setSearchList:any, inputList:any, setInputList:any}) => {
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
		<div>
			<form>
				<div className="search-bar">
					<input type="text" value={orgKw} onChange={Keyword} />
				</div>
				
				<button type="submit" className="btn primary" onClick={fnGetList}>검색</button>
				{/* <SearchResult 	data={searchList} keyword={orgKw}  /> */}
			</form>
			
		</div>
	);
};


export default SearchBar;