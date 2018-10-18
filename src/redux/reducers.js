const initalState = {
	isMapOn: false,
	filteredHomes: {
		homesList: []
	},
	queryParameters: {
		estimatedPricePercentageDifference: null,
		price: null,
		size: null,
		country: null,
		city: null,
		centerLatitude: null,
		centerLongitude: null,
		radius: null,
		page: null,
	},
	totalPages: null,
	totalResults: null,
}

const reducer = (state = initalState, action) => {
	switch (action.type) {

	case 'MAP_TOGGLE':
		return {
			...state,
			isMapOn: action.bool
		}

	case 'GET_HOMES_SUCCESS':
		return {
			...state,
			homes: action.data
		}

	case 'FILTER_HOMES_SUCCESS':
		return {
			...state,
			filteredHomes: action.data
		}

	case 'UPDATE_QUERY_PARAMETERS':
		return {
			...state,
			queryParameters: action.qp
		}		
		
	default:
		return state
	}
}

export default reducer