import axios from '@/utils/axios';

export function topDetail(data) {
	return axios({
		url: '/song/detail?ids=347230',
		method: 'get',
		params: data
	});
}

export function songUrl(data) {
	return axios({
		url: '/song/url?id=346089',
		method: 'get',
		params: data
	});
}
