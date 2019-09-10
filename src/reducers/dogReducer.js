import { DOG_LIST } from '../actions/types';

const initialState = {
  dogList: [],
  selectedDog: [],
};

const dogReducer = (state = initialState, action) => {
  switch (action.type) {
    case DOG_LIST
    return {dogList: [...dogList, dogList]}

    default:
    return state;
  }
};

export default dogReducer;
