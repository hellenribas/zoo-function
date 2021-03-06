const data = require('../data/zoo_data');

function isManager(id) {
  return data.employees.some((elem) => elem.managers.find((manag) => manag === id));
}

function getRelatedEmployees(managerId) {
  if (isManager(managerId) === true) {
    const colabMan = (data.employees.filter((elem) =>
      elem.managers.some((elemMan) =>
        elemMan === managerId)));
    return colabMan.map((elem2) => `${elem2.firstName} ${elem2.lastName}`);
  }
  throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
}

module.exports = { isManager, getRelatedEmployees };
