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


