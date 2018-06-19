//--initializing array with three values--//
var letters = ["a", "b", "c"];
var guessedLetters = [];
//--This is what we will use to countdown--//
var guessesLeft = 9;

//--This is the counter for wins and losses--//
var wins = 0;
var losses = 0;
//--This variable will be randomly assigned one of the three letters--//
var letterToGuess = letters[Math.floor(Math.random() * letters.length)];

function playGame(ev){
    var userChoice = ev.key;
    guessedLetters.push(userChoice);
    document.querySelector('#guesses-so-far').innerText = guessedLetters;
    //--This array will hold what we guess--//

    guessesLeft--;
    document.querySelector('#guesses-left').innerText = guessesLeft;

    if  (letterToGuess == userChoice){
        wins++;
        document.querySelector('#wins').innerText = wins;
        guessesLeft = 9;
        document.querySelector('#guesses-left').innerText = guessesLeft;
        guessedLetters = [];
        document.querySelector('#guesses-so-far').innerText = guessedLetters;
        letterToGuess = letters[Math.floor(Math.random() * letters.length)];
    }
    
    if (guessesLeft == 0 && letterToGuess != userChoice){
        losses++;
        document.querySelector('#losses').innerText = losses;
        guessesLeft = 9;
        document.querySelector('#guesses-left').innerText = guessesLeft;
        guessedLetters = [];
        document.querySelector('#guesses-so-far').innerText = guessedLetters;
        letterToGuess = letters[Math.floor(Math.random() * letters.length)];
    }

    if (guessesLeft == 0){
        guessesLeft = 9;
        document.querySelector('#guesses-left').innerText = guessesLeft;
        guessedLetters = [];
        document.querySelector('#guesses-so-far').innerText = guessedLetters;
        letterToGuess = letters[Math.floor(Math.random() * letters.length)];
    }
}

//--Below we will create three functions--//
var updateGuessesLeft = function(){
  //--here we are grabbing the html element and setting it equal to guesses left--//
  document.querySelector("#guesses-left").innerHTML = guessesLeft;
}

// var updateLetterToGuess = function(){
// //--Here we get a random letter to guess and assign it based on a random generator--//
//   lettersToGuess = letters[Math.floor(Math.random() * letters.length)];
// }

var updateGuessesSoFar = function(){
//--Here we take the guesses that the user ahs tried, then display it as letters separatted by commas--//
  document.querySelector("#guesses-so-far").innerHTML = guessedLetters.join(",");
}

//--Function will be callled when we reset everything--//
var reset = function(){
  guessesLeft = 9;
  guessedLetters =[];

  updateGuessesLeft();
  updateLetterToGuess();
  updateGuessesSoFar();

}


document.onkeyup = playGame;


