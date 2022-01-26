const data = require('../data/zoo_data');

const obj = {};
const count = (entrants) => {
  obj.child = entrants.filter((elem) => elem.age < 18).length;
  obj.adult = entrants.filter((elem) => elem.age >= 18 && elem.age < 50).length;
  obj.senior = entrants.filter((elem) => elem.age >= 50).length;
  return obj;
};
function countEntrants(entrants) {
  if (entrants === undefined) {
    return 0;
  }
  if (entrants.length === undefined) {
    return 0;
  }
  return count(entrants);
}
console.log(countEntrants({}));
function calculateEntry(entrants) {
  let total = 0;
  const objKey = Object.keys(countEntrants(entrants));
  const value = Object.values(countEntrants(entrants));
  objKey.map((elem) => {
    if (elem === 'child') {
      total += value[0] * 20.99;
    } else if (elem === 'adult') {
      total += value[1] * 49.99;
    } else if (elem === 'senior') {
      total += value[2] * 24.99;
    }
    return total;
  });
  return total;
}
module.exports = { calculateEntry, countEntrants };
