export const mapToggle = data => ({
	type: 'MAP_TOGGLE',
	data
})

export const GetHomes = apiInfo => ({
	type: 'GET_HOMES',
	api: {
		endpoint: apiInfo.endpoint,
		method: apiInfo.method,
		body: apiInfo.body,
		headers: apiInfo.headers
	}
})