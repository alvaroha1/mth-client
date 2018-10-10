const initalState = {
	isMapOn: false,
	homes: {}
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
		
	default:
		return state
	}
}

export default reducer