import { SET_DOGS } from '../actions';

const initialState = {
  dogList: [],
  selectedDog: [],
};

const dogReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_DOGS:
    return { dogList: action.type.payload }

    default:
    return state;
  }
};

export default dogReducer;
