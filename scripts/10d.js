const gamingButtonToggle = document.querySelector('.button-gaming');
const musicButtonToggle = document.querySelector('.button-music');
const techbuttonToggle = document.querySelector('.button-tech');

function clearAllActive() {
  gamingButtonToggle.classList.remove('gaming-button-active');
  musicButtonToggle.classList.remove('music-button-active');
  techbuttonToggle.classList.remove('tech-button-active');
}
function gamingButton() {
  clearAllActive();
      gamingButtonToggle.classList.add('gaming-button-active');
  }
  function musicButton() {
    clearAllActive();
    musicButtonToggle.classList.add('music-button-active');
  }
  function techButton() {
    clearAllActive();
    techbuttonToggle.classList.add('tech-button-active');
  }