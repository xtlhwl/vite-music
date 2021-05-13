import axios from '@/utils/axios';

export function hotDetail(data) {
	return axios({
		url: '/search/hot/detail',
		method: 'get',
		params: data
	});
}
// 搜索

export function cloudsearch(data) {
	return axios({
		url: '/cloudsearch',
		method: 'get',
		params: data
	});
}
