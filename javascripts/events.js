const addEvents = () => {
  const myButtons = document.getElementsByClassName('btn');
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

module.exports = addEvents;
