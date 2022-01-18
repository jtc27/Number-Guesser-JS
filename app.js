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
    winningNum = 2,
    guessesLeft = 3;

//UI Elements
const UIgame = document.querySelector('#game'),  // OR document.getElementById('game'),
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
    setMessage(`Please enter a number between ${min} and ${max}`)
  } else{

  }

})

// Outputs error message to UI
function setMessage(message){
  UImessage.textContent= message;
  UImessage.style.color = 'red';
}