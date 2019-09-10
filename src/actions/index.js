import { fetchDogs } from '../adapters/dogsAdapter';

export const initSetDogs = () => {
  console.log(fetchDogs())
  return (dispatch) => {
    return fetchDogs()
      .then(dogList => {
        return dispatch(setDogs(dogList));
      });
  };
};


export const setDogs = (dogList) => {
  return {
    type: 'SET_DOGS',
    payload: {
      dogList
    }
  }
};
