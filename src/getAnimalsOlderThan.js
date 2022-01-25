const data = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  return (data.species.find((elem) => elem.name === animal))
    .residents.every((elem) => elem.age >= age);
}
console.log(getAnimalsOlderThan('penguins', 10));
module.exports = getAnimalsOlderThan;
