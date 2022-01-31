const data = require('../data/zoo_data');

const array = ['NE', 'NW', 'SE', 'SW'];
const general = () => {
  const obj = {};
  return (array.map((elem) => {
    obj[elem] = (data.species
      .filter((animal) => animal.location === elem)
      .map((animais) => animais.name));
    return obj;
  }))[0];
};

const filterName = (objAnimal) => {
  const obj2 = {};
  return (array.map((elem) => {
    obj2[elem] = (data.species
      .filter((animal) => animal.location === elem).map((res) => {
        const objRes = {};
        if (objAnimal.sorted !== undefined && objAnimal.sorted === true) {
          objRes[res.name] = (res.residents
            .map((animalRes) => animalRes.name)).sort();
          return objRes;
        }
        objRes[res.name] = res.residents.map((animalRes) => animalRes.name);
        return objRes;
      }));
    return obj2;
  }))[0];
};
const sexDoAnimal = (objAnimal2) => {
  const { sex } = objAnimal2;
  const obj2 = {};
  return (array.map((elem) => {
    obj2[elem] = (data.species
      .filter((animal) => animal.location === elem).map((res) => {
        const objRes = {};
        if (objAnimal2.sorted === true) {
          objRes[res.name] = (res.residents.filter((zooRes) => zooRes.sex === sex)
            .map((animalRes) => animalRes.name)).sort();
          return objRes;
        }
        objRes[res.name] = (res.residents.filter((zooRes) => zooRes.sex === sex)
          .map((animalRes) => animalRes.name));
        return objRes;
      }));
    return obj2;
  }))[0];
};
function getAnimalMap(options) {
  let func = 0;
  if (!options || !options.includeNames) {
    func = general();
  } else if (options.sex) {
    func = sexDoAnimal(options);
  } else {
    func = filterName(options);
  }
  return func;
}
console.log(getAnimalMap({ includeNames: true, sex: 'male', sorted: true }));

module.exports = getAnimalMap;
