const initalState = {
	isMapOn: false,
	homes: {}
}

const reducer = (state = initalState, action) => {
	switch (action.type) {

	case 'MAP_TOGGLE_SUCCESS':
		return {
			...state,
			isMapOn: !state.isMapOn
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