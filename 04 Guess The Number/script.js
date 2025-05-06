let raNum = parseInt(Math.random()*100 + 1);
const sub = document.querySelector('#subt');
const Inp = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remain = document.querySelector('.lastResult');
const lowHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');
const p = document.createElement('p');
let prevGuess = [];
let numGuess = 1;
let playGame = true;

if(playGame){
  sub.addEventListener('click', function(e){
    e.preventDefault();
    const g = parseInt(Inp.value);
    validateGuess(g);
  })
}
function validateGuess(guess){
  if(isNaN(guess)){
    alert('Please enter a valid number');
  }
  else if(guess<1){
    alert('Please enter a number greater than 1');
  }
  else if(guess>100){
    alert('Please enter a number less than 100');
  }
  else{
    prevGuess.push(`guess`);
    if(numGuess > 10){
      Guess(guess);
      message(`Game Over! Number was ${raNum}`);
      endGame();
    }
    else{
      Guess(guess);
      checkGuess(guess);
    }
  }
}
function checkGuess(guess){
  if(guess === raNum){
    message(`You Guessed the right number!`)
    endGame();
  }
  else if(guess<raNum){
    message(`Your guess is less than the number!`)
  }
  else{
    message(`Your guess is greater than the number!`)
  }
}
function Guess(guess){
  Inp.value = '';
  guessSlot.innerHTML += `${guess} `
  numGuess++;
  remain.innerHTML = `${11-numGuess}`
}
function message(message){
  lowHi.innerHTML = `<h2>${message}</h2>`
}
function newGame(){
  const newGameBut = document.querySelector('#newGame');
  newGameBut.addEventListener('click', function(e){
    raNum = parseInt(Math.random()*100 + 1);
    prevGuess = [];
    numGuess = 1;
    guessSlot.innerHTML = '';
    remain.innerHTML = `${11-numGuess}`
    Inp.removeAttribute('disabled');
    startOver.removeChild(p);
    playGame = true;
  })
}
function endGame(guess){
  Inp.value = '';
  Inp.setAttribute('disabled', '');
  p.classList.add('button');
  p.innerHTML = `<h2 id="newGame">Start New Game</h2>`
  startOver.appendChild(p);
  playGame = false;
  newGame();
}