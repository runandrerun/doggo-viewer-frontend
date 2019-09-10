// import jsonData from '../dataset/dogsCSV.json';

// const loadData = () => JSON.parse(JSON.stringify(jsonData));
export const fetchDogs = () => {
  // const data = require('../dataset/destinationsCSV.json')
  const URL = 'https://dog.ceo/api/breeds/list/all';
  return fetch(URL)
    .then(res => res.json())
    .then(data => data);
    // return JSON.parse(JSON.stringify(jsonData));
};
