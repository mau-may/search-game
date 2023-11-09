import { useEffect, useState } from 'react';
import { GameSearch } from '../../apis/GameSearch';

const SearchBar = () => {
	const [orgKw, setKw] = useState('');
	const Keyword = (event:any) => {
		console.log('입력');
		console.log(event.target.value);
	
		setKw(event.target.value);
		// console.log(event.target.value);
	};

	const FnGetList = (event:any) => {
		console.log('검색 클릭');
		console.log(orgKw);

		let params:any = {};
		params.q = orgKw;
	
		if(!validation()){
			return false;
		}
		GameSearch(params);

	
		// GameSearch(params);
	}

	function validation(){
		let flag = true;
	
		if(orgKw == ''){
			alert('키워드를 입력하세요');
			flag = false;
		}
	
		if(!orgKw.trim().includes('김치') && !orgKw.trim().includes('깍두기')){
			alert('김치 / 깍두기 등을 입력해주세요.');
			flag = false;
		}

		return flag;
	
	}
	
	return (
		<form>
			<input type='text' className='search-bar' value={orgKw} onChange={Keyword} />
			<button type='submit' className='search-button' onClick={e => {
							e.preventDefault();
							FnGetList(e);
						}}>검색</button>
		</form>
	);
};


export default SearchBar;