import { fetchDogs } from '../adapters/dogsAdapter';

export const initSetDogs = () => {
  return (dispatch) => {
    return fetchDogs()
      .then(dogs => {
        console.log(dogs)
        return dispatch(setDogs(dogs));
      });
  };
};


export const setDogs = (dogs) => {
  return {
    type: 'SET_DOGS',
    payload: {
      dogs
    }
  }
};
