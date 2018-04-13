const loadPets = require('./pets.js');
const printToDom = require('./dom.js');

function successFunction () {
  const datums = JSON.parse(this.responseText).pets;
  printToDom(datums);
};

function errorFunction () {
  console.log('SHIT!');
};

const initializer = () => {
  loadPets(successFunction, errorFunction);
};

module.exports = initializer;
