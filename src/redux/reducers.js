const initalState = {
	isMapOn: false,
}

const reducer = (state = initalState, action) => {
	switch (action.type) {

	case 'MAP_TOGGLE_SUCCESS':
		return {
			...state,
			isMapOn: action.data
		}
		
	default:
		return state
	}
}

export default reducer