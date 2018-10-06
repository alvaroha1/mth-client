const initalState = {
  houses: [],
};

const reducer = (state = initalState, action) => {
  switch (action.type) {

  case 'GETHOUSES_SUCCESS':
    return {
      ...state,
      houses: action.data
    };

  default:
    return state;
  }
};

export default reducer;
