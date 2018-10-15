const initalState = {
	isMapOn: false,
	homes: {
		homesList: []
	},
	filteredHomes: {
		homesList: []
	},
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
		
	default:
		return state
	}
}

export default reducer