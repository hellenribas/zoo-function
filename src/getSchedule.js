const data = require('../data/zoo_data');

const exibe = (day) => {
  const animais = (data.species.filter((elem) => elem.availability.includes(day)));
  return animais.map((elem2) => elem2.name);
};

const days2 = Object.keys(data.hours);
const obj = {};
const objeGeral = () => (days2.map((day, index) => {
  const dayEx = exibe(days2[index]);
  const hour = Object.values(Object.values(data.hours)[index]);
  if (day !== 'Monday') {
    obj[day] = ({ officeHour: `Open from ${hour[0]}am until ${hour[1]}pm`, exhibition: dayEx });
  } else {
    obj.Monday = { officeHour: 'CLOSED', exhibition: 'The zoo will be closed!' };
  }
  return obj;
}))[0];

const weekFilter = (week) => {
  const objs = {};
  const zoo = data.species.filter((elem) => elem.availability.includes(week));
  const animal = zoo.map((animal2) => animal2.name);
  const weekHour = Object.values(data.hours[week]);
  if (week !== 'Monday') {
    objs[week] = { officeHour:
      `Open from ${weekHour[0]}am until ${weekHour[1]}pm`,
    exhibition: animal };
  } else {
    objs.Monday = { officeHour: 'CLOSED', exhibition: 'The zoo will be closed!' };
  }
  return objs;
};

const animalParam = (nome) => {
  const animalSelec = data.species.filter((elem) => elem.name === nome);
  return (animalSelec.map((elem) => elem.availability))[0];
};

function getSchedule(scheduleTarget) {
  const days3 = Object.keys(data.hours);
  const animalZoo = data.species.map((elem) => elem.name);
  let retorno = '';
  if (days3.includes(scheduleTarget) === false && animalZoo.includes(scheduleTarget) === false) {
    retorno = objeGeral();
  } else if (days3.includes(scheduleTarget)) {
    retorno = weekFilter(scheduleTarget);
  } else {
    retorno = animalParam(scheduleTarget);
  }
  return retorno;
}
console.log(getSchedule());
module.exports = getSchedule;
