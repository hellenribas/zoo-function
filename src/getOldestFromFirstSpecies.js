const data = require('../data/zoo_data');

function getOldestFromFirstSpecies(id) {
  //  data.species.find((elem) => elem.id === );
  const responsavelPor = ((data.employees
    .filter((elem2) => elem2.id === id)).map((elem) => elem.responsibleFor)[0])[0];
  const procuraId = data.species.find((elem3) => elem3.id === responsavelPor);
  const animalOLd = procuraId.residents.reduce((acc, obj) => {
    if (acc.age > obj.age) {
      return acc;
    }
    return obj;
  });
  return Object.values(animalOLd);
}

console.log(getOldestFromFirstSpecies('9e7d4524-363c-416a-8759-8aa7e50c0992'));

module.exports = getOldestFromFirstSpecies;
