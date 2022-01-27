const data = require('../data/zoo_data');

const funcName = (obj) => {
  const objs = {};
  const person = data.employees
    .find((func) => func.firstName === obj.name
    || func.lastName === obj.name);
  objs.id = person.id;
  objs.fullName = `${person.firstName} ${person.lastName}`;
  objs.species = (person.responsibleFor.map((animal2) => data.species
    .find((res2) => res2.id === animal2)))
    .map((spec) => spec.name);
  objs.locations = (person.responsibleFor
    .map((animal) => data.species
      .find((res) => res.id === animal)))
    .map((Anlocal) => Anlocal.location);
  return objs;
};

const funcId = (obj) => {
  const objs = {};
  const person = data.employees
    .find((func) => func.id === obj.id);
  objs.id = person.id;
  objs.fullName = `${person.firstName} ${person.lastName}`;
  objs.species = (person.responsibleFor.map((animal2) => data.species
    .find((res2) => res2.id === animal2)))
    .map((spec) => spec.name);
  objs.locations = (person.responsibleFor
    .map((animal) => data.species
      .find((res) => res.id === animal)))
    .map((Anlocal) => Anlocal.location);
  return objs;
};

const generic = () => {
  let objs2 = {};
  return (data.employees
    .map((func) => {
      objs2 = {};
      objs2.id = func.id;
      objs2.fullName = `${func.firstName} ${func.lastName}`;
      objs2.species = (func.responsibleFor
        .map((animal2) => data.species
          .find((res2) => res2.id === animal2)))
        .map((spec) => spec.name);
      objs2.locations = (func.responsibleFor
        .map((animal) => data.species
          .find((res) => res.id === animal)))
        .map((Anlocal) => Anlocal.location);
      return objs2;
    }));
};

// const erro = (obj) => {
//   const verify = data.employees
//     .some((elem) => elem.firstName === obj || elem.lastName === obj || elem.id === obj);
//   return verify;
// };
// console.log(erro('Sharonda'));

function getEmployeesCoverage(obj) {
  try {
    if (!obj) {
      return generic();
    }
    if (Object.keys(obj)[0] === 'name') {
      return funcName(obj);
    }
    if (Object.keys(obj)[0] === 'id') {
      return funcId(obj);
    }
  } catch (e) {
    throw new Error('Informações inválidas');
  }
}
module.exports = getEmployeesCoverage;
