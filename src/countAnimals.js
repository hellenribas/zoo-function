const data = require('../data/zoo_data');

const spec = (animal) => {
  if (Object.keys(animal).length === 2) {
    return ((data.species.filter((elem) =>
      elem.name === (Object.values(animal))[0]))
      .map((elem) => elem.residents.filter((gen) => gen.sex === (Object.values(animal))[1])))
      .reduce((acc, elem) => acc + elem.length, 0);
  }
  return data.species.filter((elem) =>
    elem.name === (Object.values(animal))[0])
    .reduce((acc, elem2) => acc + ((elem2.residents).length), 0);
};
function countAnimals(animal) {
  const obj = {};
  if (animal === undefined) {
    data.species.forEach((elem) => {
      obj[elem.name] = (elem.residents).length;
    });
    return obj;
  }
  return spec(animal);
}

module.exports = countAnimals;
