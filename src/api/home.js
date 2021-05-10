import axios from '@/utils/axios';

export function getBanner(data) {
	return axios({
		url: '/banner',
		method: 'get',
		params: data
	});
}
// 获取精选

export function getPlaylist(data) {
	return axios({
		url: '/personalized',
		method: 'get',
		params: data
	});
}
