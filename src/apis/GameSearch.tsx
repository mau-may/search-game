import { searchAxios } from '../utils';

export const GameSearch = async (params: any) => {
	params.key = process.env.REACT_APP_API_KEY;
	params.cx = process.env.REACT_APP_SEARCH_CX;

	try {
		const res = await searchAxios.get(
			'/customsearch/v1',
			{params}
		);
		
		return res.data.items;
	} catch (e:any) {
		if (e instanceof Error) {
			throw new Error('AuthLogin Error', e);
		}
	}
};