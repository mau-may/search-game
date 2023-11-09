import { searchAxios } from '../utils';
import { useState, useEffect } from 'react';

export const GameSearch = async (params: any) => {
	params.key = process.env.REACT_APP_API_KEY;
	params.cx = process.env.REACT_APP_SEARCH_CX;
	console.log(params);

	// const [data, setData] = useState(null);
	// const [loading, setLoading] = useState(false);
	// const [error, setError] = useState(null);

	try {
		// setError(null);
		// setData(null);
		// setLoading(true);

		const res = await searchAxios.get(
			'/customsearch/v1',
			{params}
		);
		
		// setData(res.data);
		console.log(res)
	} catch (e:any) {
		// setError(e);
		if (e instanceof Error) {
			throw new Error('AuthLogin Error', e);
		}
	}
    // setLoading(false);

	// useEffect(() => {
	// 	const fetchUsers = async () => {
	// 	  try {
	// 		// 요청이 시작 할 때에는 error 와 users 를 초기화하고
	// 		setError(null);
	// 		setUsers(null);
	// 		// loading 상태를 true 로 바꿉니다.
	// 		setLoading(true);
	// 		const response = await axios.get(
	// 		  'https://jsonplaceholder.typicode.com/users'
	// 		);
	// 		setUsers(response.data); // 데이터는 response.data 안에 들어있습니다.
	// 	  } catch (e) {
	// 		setError(e);
	// 	  }
	// 	  setLoading(false);
	// 	};
	
	// 	fetchUsers();
	//   }, []);
	
	//   if (loading) return <div>로딩중..</div>;
	//   if (error) return <div>에러가 발생했습니다</div>;
	//   if (!users) return null;
};