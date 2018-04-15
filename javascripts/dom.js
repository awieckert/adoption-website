const printToThis = document.getElementById('pet-container');

const printToDom = (pets) => {
  printToThis.innerHTML = domString(pets);
};

const domString = (petsArray) => {
  let stringToPrint = '';
  petsArray.forEach((pet, index) => {
    stringToPrint += `<div class='col-md-4'>`;
    stringToPrint += `<div class='${pet.type} pet-card'>`;
    stringToPrint +=  `<h2>${pet.name}</h2>`;
    stringToPrint +=  `<img src='${pet.imageUrl}'>`;
    stringToPrint +=  `<h3>${pet.color}</h3>`;
    stringToPrint +=  `<h4>${pet.specialSkill}</h4>`;
    if(pet.type.toUpperCase() === 'CAT'){
      stringToPrint +=  `<div class='type-cat'>${pet.type.toUpperCase()}</div>`;
    } else if (pet.type.toUpperCase() === 'DOG'){
      stringToPrint +=  `<div class='type-dog'>${pet.type.toUpperCase()}</div>`;
    } else {
      stringToPrint +=  `<div class='type-dino'>${pet.type.toUpperCase()}</div>`;
    }
    stringToPrint += `</div>`;
    stringToPrint += `</div>`;
  });
  return stringToPrint;
};

module.exports = printToDom;
