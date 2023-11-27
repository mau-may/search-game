// import { useEffect, useState } from 'react';

const SearchResult = ({data, keyword}:{data:any, keyword:string}) => {
	
	// const dataList:JsxElement = data ? data : [];
	// console.log(dataList);
	keyword = keyword + '김치';

	console.log(keyword)
	console.log(data);
	let filterList:any = [];

	if(data.length>0){
		filterList = data?.filter(
			(item:any) => item.title.trim().includes(keyword.trim()),[]
		)
	}
	console.log(data);
	console.log(filterList);
	// let dataList: JSX.Element = data;

	function ReturnHtml():any {
		return (
			filterList && filterList.map((item:any) => 
			<li>
			${item.title}
			</li>
			<span dangerouslySetInnerHTML={{__html: data.period}}></span>
			<li><img src="${item.pagemap.cse_image[0].src}" /><li>
			<li>${item.link}<li>
			)
		)
	}


	return (
		<div className='search-result-wrap'>
			<ul>
				<ReturnHtml />
			</ul>
		</div>
	)
};


export default SearchResult;