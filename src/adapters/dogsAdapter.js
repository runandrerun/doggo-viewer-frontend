

export const fetchDogs = () => {
  let dogs = []
  console.log('Inside fetch');
  const URL = 'https://dog.ceo/api/breeds/list/all';
  return fetch(URL)
    .then(res => res.json())
    .then(data => {
      for (var property in data.message) {
        if (data.message.hasOwnProperty(property)) {
          dogs.push(property);
        }
      }
      return dogs;
      console.log(dogs)
    });

};
