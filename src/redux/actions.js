export const mapToggle = data => ({
	type: 'MAP_TOGGLE',
	bool: data,
})

export const getHomes = apiInfo => ({
	type: 'GET_HOMES',
	api: {
		endpoint: apiInfo.endpoint,
		method: apiInfo.method,
		body: apiInfo.body,
		headers: apiInfo.headers,
	}
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