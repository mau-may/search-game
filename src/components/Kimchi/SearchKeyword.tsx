import { useEffect, useState } from 'react';

const SearchKeyword = ({data}:{data: string[]}) => {
	// console.log(data);
	
	return (
		<div className='search-keyword-wrap'>
			
			{data && data.map((item, idx) => (
					<div key={idx}>{item}</div>
				)
			)}
		</div>
	);
};


export default SearchKeyword;