import axios from 'axios';

//Google Custom Search API
export const searchAxios = axios.create({
	baseURL: process.env.REACT_APP_CUSTOM_SEARCH_URL,
});


export const Axios = axios.create({
	baseURL: process.env.REACT_APP_CUSTOM_SEARCH_URL,
});
