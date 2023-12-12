import React from 'react';
import { SearchBar, SearchKeyword } from '../../components/Kimchi';
import { useTranslation } from "react-i18next";


const Search = () => {
	const { t } = useTranslation();
	
	return (
		<div className='kimchi-wrap'>
			<h3>김치가 될만한 과일, 채소를 입력하세요</h3>
			<SearchBar />
			<SearchKeyword />
		</div>
	);
};

export default Search;
