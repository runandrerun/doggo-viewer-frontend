const initialState = {
  dogList: [],
  selectedDog: [],
};

const dogReducer = (state = initialState, action) => {
  console.log("FIRES")
  switch (action.type) {
    case 'SET_DOGS':
    return {
      ...state,
      dogList: [ ...state.dogList, action.payload.dogList ]
    }

    default:
    return state;
  }
};

export default dogReducer;
