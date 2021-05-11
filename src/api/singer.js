import axios from '@/utils/axios';

export function getArtist(data) {
	return axios({
		url: '/toplist/artist',
		method: 'get',
		params: data
	});
}
