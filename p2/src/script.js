import Vue from 'vue';
import GameLog from './components/GameLog.vue';

// root Vue instance
let app = new Vue({
    el: '#app',
    components: {
        // Components being imported need to be listed like below
        'game-log': GameLog,
    },
    data: {
        // Game overhead variables 
        'showRules': true,
        'showGameOverMessage': false,
        'maxAllowedGuesses': 10,        // max number of guesses allowed for each game
        'maxRandomNumber': 100,         // The max number the random number could be
        'currentRound': 0,              // tracks the number of rounds remaining
        'startNewGame': true,           // Flag to track if a new game can be started
        'randomNumber': 0,              // The random number to be guessed
        'gameGuesses': [],              // holds historical guesses for player and computer
        'wasCorrect': false,

        // Player related variables
        'playerGuess': '',              // Player's guess
        'playerGuessArray': [],         // Holds the player's historical guesses
        'playerRoundsTaken': '0',       // # of rounds taken by player to guess the number
        'playerFinalRound': '0',       // # of rounds taken by player to guess the number
        'playerGameOver': false,        // Status of the player's game 

        // Computer related variables
        'computerGuess': '',            // Computer's guesses
        'computersTurn': false,         // Tracks if it is the computer's turn
        'computerGuessArray': [],       // Holds the computer's historical guesses
        'computerRoundsTaken': '0',     // # of rounds taken by computer to guess the number
        'computerFinalRound': '0',     // # of rounds taken by computer to guess the number
        'computerGameOver': false,      // Status of the computer's game
        'lowWater': 0,                 // Tracks the computer's lowest guess for logic purposes
        'highWater': 0,                // Tracks the computer's highest guess for logic purposes
    },
    methods: {
        startGame: function () {
            this.startNewGame = false;
            this.gameGuesses = [];
            this.currentRound = 1;
            this.randomNumber = Math.round(Math.random() * this.maxRandomNumber) + 1;
            this.showRules = false;

            this.playerGuess = '';
            this.playerGuessArray = [];
            this.playerFinalRound = 0;
            this.playerGameOver = false;

            this.computerGuessArray = [];
            this.computersTurn = false;
            this.computerGuess = '';
            this.computerFinalRound = 0;
            this.computerGameOver = false;
            this.lowWater = 0;
            this.highWater = this.maxRandomNumber;

        },
        surrender: function () {
            this.startNewGame = true;
            this.gameGuesses = [];
            this.computersTurn = false;
        },
        makePlayerGuess: function () {
            this.wasCorrect = false;
            if (this.playerGuessArray.includes(this.playerGuess)) {
                alert('You already tried that value.');
                this.playerGuess = '';
            } else {
                if (this.playerGuess == this.randomNumber) {
                    this.statusMessage = 'Player guessed the random number!';
                    this.wasCorrect = true;
                    this.playerFinalRound = this.currentRound;
                    this.playerGameOver = true;
                } else {
                    if (this.playerGuess < this.randomNumber) {
                        this.statusMessage = "Guess was too low";
                    } else {
                        this.statusMessage = "Guess was too high";
                    }
                }
                // Store the historical guesses
                this.gameGuesses.push({
                    number: this.currentRound,
                    who: "Player",
                    guess: this.playerGuess,
                    message: this.statusMessage,
                    correctGuess: this.wasCorrect,
                });
                // Add this player's guess to his array
                this.playerGuessArray.push(this.playerGuess);
                //this.currentRound = this.currentRound + 1;
                if (this.rounds == 11) {
                    this.playerFinalRound = 10;
                }

                this.playerGuess = '';
                this.computersTurn = true;
            }
        },
        makeComputerGuess: function () {
            // This function handles the computer's picks
            this.wasCorrect = false;

            // Computer's first selection
            if (this.playerGuessArray.length == 0) {
                this.computerGuess = Math.round(Math.random() * this.maxRandomNumber) + 1;
            } else {
                // Computer logic to make follow up selections
                // The do loop handles the situation where the computer's next pick was already selected by the computer
                do
                    this.computerGuess = Math.round(Math.random() * (this.highWater - this.lowWater)) + this.lowWater;
                while (this.computerGuessArray.includes(this.computerGuess));
            }

            // Logic to check and evalate the computer's guess
            if (this.computerGuess == this.randomNumber) {
                this.statusMessage = 'Computer guessed the number!';
                this.wasCorrect = true;
                this.computerFinalRound = this.currentRound;
                this.computerGameOver = true;
                this.playerGameOver = true;
            } else {
                if (this.computerGuess < this.randomNumber) {
                    this.statusMessage = 'Guess was too low.';
                    this.lowWater = this.computerGuess;
                } else {
                    this.statusMessage = 'Guess was too high.';
                    this.highWater = this.computerGuess;
                }
            }

            // Store the historical guesses
            this.gameGuesses.push({
                number: this.currentRound,
                who: "Computer",
                guess: this.computerGuess,
                message: this.statusMessage,
                correctGuess: this.wasCorrect,
            });
            // Add the computer's guess to the array that tracks the computer's guesses
            this.computerGuessArray.push(this.computerGuess);

            if (this.currentRound == 11) {
                this.computerGameOver = true;
                this.computerFinalRound = 10;
            }
            this.computersTurn = false;
            this.currentRound = this.currentRound + 1;

            // Check for a win condition
            // 1 - Player found random number
            // 3 - Computer found random number
            // 4 - Player and computer found random number
            if (this.playerGameOver || this.computerGameOver) {
                this.whoWon = 0;
                //Console.log(this.playerGuessArray.includes(this.randomNumber));
                if (this.playerGameOver == true && this.playerGuessArray.includes(this.randomNumber)) {
                    this.whoWon += 1;
                }
                //Console.log(this.playerGuessArray.includes(this.randomNumber));
                if (this.computerGameOver == true && this.computerGuessArray.includes(this.randomNumber)) {
                    this.whoWon += 3;
                }

                // The following switch statement controls the logic for determining who won the game
                switch (this.whoWon) {
                    case 1:
                        // Player won
                        this.showGameOverMessage = 'The player won!';
                        this.wasCorrect = true;
                        break;
                    case 3:
                        // Computer won
                        this.showGameOverMessage = 'The computer won!';
                        this.wasCorrect = true;
                        break;
                    case 4:
                        // Both player and computer won
                        this.showGameOverMessage = 'Both the player and computer picked the random number!';
                        this.wasCorrect = true;
                        break;
                    default:
                        // Noone won
                        this.showGameOverMessage = 'Neither the player nor computer won.';
                        this.wasLow = true;
                }
                this.startNewGame = true;
            }
        },
        toggleRules: function () {
            this.showRules = !this.showRules;
        },
    },
});