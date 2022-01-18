/*
Game:
- Player guesses number between min & max
- Player has limited number of guesses
- Notify Player of guesses remaining
- Notify Player of the correct answer if game over
- Play again option

*/

//game values
let min = 3, 
    max = 10,
    winningNum = 5,
    guessesLeft = 3;

//UI Elements
const UIgameWrapper = document.querySelector('#game'),  // OR document.getElementById('game'),
      UIminNum = document.querySelector('.min-num'),  //class is . // id is #
      UImaxNum = document.querySelector('.max-num'),
      UIguessBtn = document.querySelector('#guess-btn'),
      UIguessInput = document.querySelector('#guess-input'),
      UImessage = document.querySelector('.message');

//UI min and max assign
UIminNum.textContent = min
UImaxNum.textContent = max

//Btn event listener
UIguessBtn.addEventListener('click', function(){
  let guess = parseInt(UIguessInput.value); //makes the input an integer, and a variable

  //validate input
  if( isNaN(guess) || guess < min || guess > max){
    setMessage(`Please enter a number between ${min} and ${max}`, 'red')
  } 

  //Did player win?
  if(guess === winningNum){
    gameOver('win', `You Win!  The winning number is ${winningNum}!`)
  } else {
    //wrong guess
    guessesLeft -= 1;

    if (guessesLeft === 0){
      gameOver('lose', `Sorry you lose, the correct number was ${winningNum}`)
    } else {
      //game continues
      UIguessInput.value = ''
      UIguessInput.style.borderColor = 'red'
      setMessage(`${guess} is not correct.  You have ${guessesLeft} guesses left`, 'red')
    }
  }
})

//BTN 'Play again' event listener
// mousedown instead of 'click'.  if you click, it will 'mouseup' and hit 'play-again'.
UIgameWrapper.addEventListener('mousedown', function(e){
  if(e.target.className === 'play-again'){
    window.location.reload()
  }
})

function gameOver(result, msg){
  let color;
  result === 'win' ? color = 'green' : color = 'red';

  UIguessInput.disabled = true
  UIguessInput.style.borderColor = color

  setMessage(msg, color)

  UIguessBtn.value = 'Play Again'
  UIguessBtn.className += 'play-again' //class for the button is created, 'play-again'
}

// Outputs error message to UI
function setMessage(message, color){
  UImessage.textContent = message;
  UImessage.style.color = color;
}