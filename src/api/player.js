import axios from '@/utils/axios';

export function topDetail(data) {
	return axios({
		url: '/song/detail?ids=347230',
		method: 'get',
		params: data
	});
}
