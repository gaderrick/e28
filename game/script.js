// Define constants
let maxNumGuesses = 10;

// Variables used for the game
var remainingGuesses = maxNumGuesses;
var randomNumber = Math.round(Math.random() * 100);
var guessArray = [];
var newGame = 0;
var alertMessage = "";

// Define GUI element references
var spanMaxGuesses = document.getElementById("spanMaxGuesses");
spanMaxGuesses.innerHTML = maxNumGuesses;

var spanRemainingGuesses = document.getElementById("spanRemainingGuesses");
spanRemainingGuesses.innerHTML = remainingGuesses;

var spanPreviousGuesses = document.getElementById("spanPreviousGuesses");
var txtUserGuess = document.getElementById("txtUserGuess");

// Functions
function gamePlay() {
    var currentGuess = document.getElementById("txtUserGuess").value;

    if (guessArray.includes(currentGuess)) {
        alert("You already tried that number. Pick a different number.");
    } else {
        if (currentGuess < randomNumber) {
            remainingGuesses = remainingGuesses - 1;
            alertMessage = "You need to guess higher!";
        } else if (currentGuess > randomNumber) {
            remainingGuesses = remainingGuesses - 1;
            alertMessage = "You need to guess lower!";
        } else {
            alertMessage = "You guessed the number! Let's play again!";
            newGame = 1;
        }

        spanRemainingGuesses.innerHTML = remainingGuesses;

        if (remainingGuesses != 0) {
            guessArray.push(currentGuess);
            spanPreviousGuesses.innerHTML = guessArray.toString();
        } else {
            alertMessage = "You didn't guess the number in time. Try again!";
            guessArray = [];
            newGame = 1;
        }

        alert(alertMessage);

        if (newGame == 1) {
            remainingGuesses = maxNumGuesses;
            guessArray = [];
            spanPreviousGuesses.innerHTML = guessArray.toString();
            spanRemainingGuesses.innerHTML = remainingGuesses;
            newGame = 0;
        }
    }

    txtUserGuess.value = "";
}
