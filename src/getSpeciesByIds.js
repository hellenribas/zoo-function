const data = require('../data/zoo_data');

function getSpeciesByIds(...ids) {
  return ids.map((idElem) => data.species.find((elem) => elem.id === idElem));
}
console.log(getSpeciesByIds('01422318-ca2d-46b8-b66c-3e9e188244ed'));
module.exports = getSpeciesByIds;
