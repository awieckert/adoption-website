const addEvents = () => {
  const myButtons = document.getElementsByClassName('filter');
  const unFilter = document.getElementById('unfilter');
  unFilter.addEventListener('click', unFiltered);
  for (let i = 0; i < myButtons.length; i++) {
    myButtons[i].addEventListener('click', filterPets);
  }
};

const filterPets = (e) => {
  console.log('Event: ', e);
  const allThePets = document.getElementsByClassName('pet-card');
  console.log('allthepets: ', allThePets);
  for (let i = 0; i < allThePets.length; i++) {
    if (allThePets[i].classList[0] === e.target.id) {
      allThePets[i].style.display = '';
    } else {
      allThePets[i].style.display = 'none';
    }
  }
};

const unFiltered = () => {
  const allPets = document.getElementsByClassName('pet-card');
  for (let i = 0; i < allPets.length; i++) {
    allPets[i].style.display = '';
  }
};

module.exports = addEvents;
