const printToThis = document.getElementById('pet-container');

const printToDom = (pets) => {
  printToThis.innerHTML = domString(pets);
};

const domString = (petsArray) => {
  let stringToPrint = '';
  petsArray.forEach((pet, index) => {
    stringToPrint += `<div class='${pet.type} col-md-4 pet-card'>`;
    stringToPrint += `<div class='pet-card2'>`;
    stringToPrint +=  `<h2>${pet.name}</h2>`;
    stringToPrint +=  `<img src='${pet.imageUrl}'>`;
    stringToPrint +=  `<h3>${pet.color}</h3>`;
    stringToPrint +=  `<h4>${pet.specialSkill}</h4>`;
    if (pet.type.toUpperCase() === 'CAT') {
      stringToPrint +=  `<div class='col-md-12 btn-success text-center type'><div class='col-md-2 col-md-offset-5 type-cat'><h4>${pet.type.toUpperCase()}</h4></div></div>`;
    } else if (pet.type.toUpperCase() === 'DOG') {
      stringToPrint +=  `<div class='col-md-12 btn-warning text-center type'><div class='type col-md-2 col-md-offset-5 type-dog'><h4>${pet.type.toUpperCase()}</h4></div></div>`;
    } else {
      stringToPrint +=  `<div class='col-md-12 btn-danger text-center type'><div class='type col-md-2 col-md-offset-5 type-dino'><h4>${pet.type.toUpperCase()}</h4></div></div>`;
    }
    stringToPrint += `</div>`;
    stringToPrint += `</div>`;
  });
  return stringToPrint;
};

module.exports = printToDom;
