let score = JSON.parse(localStorage.getItem('score')) || {
  wins: 0,
  losses: 0,
  ties: 0,
};


updateScoreElement();
function playGame(playerMove){
  const computerMove = pickComputerMove();
  let result = ''
  if(playerMove === 'scissors') {
    if(computerMove === 'paper') {
    result = 'You win.';
    } else if (computerMove === 'rock') {
      result = 'You loose.';
    } else {
      result = 'Tie.';}
      
  } else  if (playerMove === 'paper') {
      if(computerMove === 'rock') {
        result = 'You win.';
      } else if (computerMove === 'scissors') {
        result = 'You loose.';
      } else {
        result = 'Tie.';}

  } else if (playerMove === 'rock') {
      if(computerMove === 'scissors') {
        result = 'You win.';
      } else if (computerMove === 'paper') {
        result = 'You loose.';
      } else {
        result = 'Tie.';}
        }

  if(result === 'You win.') {
    score.wins += 1;
  } else if (result === 'You loose.') {
    score.losses += 1;
  } else {
    score.ties += 1;
  }

  localStorage.setItem('score', JSON.stringify(score));

  updateScoreElement();

  document.querySelector('.js-moves').innerHTML = `You <img src = "images/${playerMove}-emoji.png" class = "move-icon"><img src = "images/${computerMove}-emoji.png" class = "move-icon">Computer`;

  document.querySelector('.js-result').innerHTML = result;
}

function updateScoreElement() {
  document.querySelector('.js-score').innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
}
function pickComputerMove() {
  const randomNumber = Math.random()
  let computerMove = '';
  
  if (randomNumber >= 0 && randomNumber < 1/3){
    computerMove = 'rock'
  } else if (randomNumber >= 1/3 && randomNumber < 2/3){
    computerMove = 'paper'
  } else {
    computerMove = 'scissors'
  }
  return computerMove;
}