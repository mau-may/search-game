import { useEffect, useState } from 'react';

const SearchKeyword = ({data}:{data: string[]}) => {
	// console.log(data);
	
	return (
		<ul className="keyword-wrap">
			{data && data.map((item, idx) => (
				<li key={idx} className="keyword">{item}</li>
			))}
		</ul>
	);
};


export default SearchKeyword;