import { useEffect, useState } from 'react';
import { GameSearch } from '../../apis/GameSearch';
import SearchResult from './SearchResult';

const SearchBar = () => {
	const [orgKw, setKw]:any = useState('');
	const [searchList, setSearchList]:any = useState([]);

	const Keyword = (event:any) => {
	
		setKw(event.target.value);
	};

	const FnGetList = async (event:any) => {

		let params:any = {};
		params.q = orgKw.trim() + '김치';
	
		if(!validation()){
			return false;
		}

	
		setSearchList(await GameSearch(params));
		// if(searchList) SearchResult(searchList);
		//searchList 로 확인해야하는구나...
	}

	function validation(){
		let flag = true;
	
		if(orgKw == ''){
			alert('키워드를 입력하세요');
			flag = false;
		}
	
		// if(!orgKw.trim().includes('김치') && !orgKw.trim().includes('깍두기')){
		// 	alert('김치 / 깍두기 등을 입력해주세요.');
		// 	flag = false;
		// }

		return flag;
	
	}
	
	return (
		<div>
			<form>
				<input type='text' className='search-bar' value={orgKw} onChange={Keyword} />
				<button type='submit' className='search-button' onClick={e => {
								e.preventDefault();
								FnGetList(e);
							}}>검색</button>
				<SearchResult 
					data={searchList} keyword={orgKw}  />
			</form>
			
		</div>
	);
};


export default SearchBar;