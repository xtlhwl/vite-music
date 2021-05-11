import axios from '@/utils/axios';

export function topList(data) {
	return axios({
		url: '/toplist/detail',
		method: 'get',
		params: data
	});
}

export function playlistDetail(data) {
	return axios({
		url: '/playlist/detail',
		method: 'get',
		params: data
	});
}
