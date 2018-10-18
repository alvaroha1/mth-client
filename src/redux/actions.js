import { RSAA } from 'redux-api-middleware'

export const mapToggle = data => ({
	type: 'MAP_TOGGLE',
	bool: data,
})

export const getFilterHomes = () => ({
	[RSAA]: {
		endpoint: 'http://192.168.1.163:3001/homes?estimatedPricePercentageDifference=-10&price%5B0%5D=0&price%5B1%5D=1000000&size%5B0%5D=0&size%5B1%5D=200&country=it&city=&estimatedPrice%5B0%5D=0&estimatedPrice%5B1%5D=2000000&page=200&centerLongitude=8.849993&centerLatitude=44.427967&radius=1000',
		method: 'GET',
		types: [ 'FILTERED_HOMES_REQUEST', 'FILTERED_HOMES_SUCCESS', 'FILTERED_HOMES_FAILURE' ]
	},
})

export const filterHomes = apiInfo => ({
	type: 'FILTER_HOMES',
	api: {
		endpoint: apiInfo.endpoint,
		method: apiInfo.method,
		body: apiInfo.body,
		headers: apiInfo.headers,
	}
})

export const queryParameters = data => ({
	type: 'UPDATE_QUERY_PARAMETERS',
	qp: data,
})
