const loadPets = require('./pets.js');
const printToDom = require('./dom.js');
const addEvents = require('./events.js');

function successFunction () {
  const datums = JSON.parse(this.responseText).pets;
  printToDom(datums);
  addEvents();
};

function errorFunction () {
  console.log('SHIT!');
};

const initializer = () => {
  loadPets(successFunction, errorFunction);
};

module.exports = initializer;
