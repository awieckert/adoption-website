const addEvents = () => {
  const myButtons = document.getElementsByClassName('filter');
  const unFilter = document.getElementById('unfilter');
  unFilter.addEventListener('click', unFiltered);
  for (let i = 0; i < myButtons.length; i++) {
    myButtons[i].addEventListener('click', filterPets);
  }
};

const filterPets = (e) => {
  const allThePets = document.getElementsByClassName('pet-card');
  for (let i = 0; i < allThePets.length; i++) {
    if (allThePets[i].classList[0] === e.target.id) {
      allThePets[i].style.display = '';
      allThePets[i].classList.remove('fadeout');
    } else {
      // allThePets[i].style.display = 'none';
      allThePets[i].classList.add('fadeout');
    }
  }
  const fadedPets = document.getElementsByClassName('fadeout');
  for (let j = 0; j < fadedPets.length; j++) {
    fadedPets[j].style.display = 'none';
  }
};

const unFiltered = () => {
  const allPets = document.getElementsByClassName('pet-card');
  for (let i = 0; i < allPets.length; i++) {
    allPets[i].style.display = '';
    allPets[i].classList.remove('fadeout');
  }
};

module.exports = addEvents;
