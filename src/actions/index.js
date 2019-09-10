import { fetchDogs } from '../adapters/dogsAdapter';

export const initSetDogs = () => {
  return (dispatch) => {
    return fetchDogs()
      .then(dogs => {
        console.log(dogs)
        return dispatch(SET_DOGS(dogs));
      });
  };
};


export const SET_DOGS = (dogs) => {
  return {
    type: 'SET_DOGS',
    payload: {
      dogs
    }
  }
};
