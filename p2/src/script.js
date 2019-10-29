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
        'maxAllowedGuesses': 10,        // max number of guesses allowed for each game
        'maxRandomNumber': 100,         // The max number the random number could be
        'currentRound': 0,              // tracks the number of rounds remaining
        'startNewGame': true,           // Flag to track if a new game can be started
        'randomNumber': 0,              // The random number to be guessed
        'gameGuesses': [],              // holds historical guesses for player and computer
        'wasCorrect': false,

        // Player related variables
        //'playerGuess': '',              // Player's guess
        'playerGuessArray': [],         // Holds the player's historical guesses
        'playerRoundsTaken': '0',       // # of rounds taken by player to guess the number
        'playerFinalRound': '0',       // # of rounds taken by player to guess the number
        'playerGameOver': false,        // Status of the player's game 

        // Computer related variables
        'computerGuess': '',            // Computer's guesses
        'computerGuessArray': [],       // Holds the computer's historical guesses
        'computerFinalRound': '0',     // # of rounds taken by computer to guess the number
        'computerGameOver': false,      // Status of the computer's game
        'lowWater': '',                 // Tracks the computer's lowest guess for logic purposes
        'highWater': '',                // Tracks the computer's highest guess for logic purposes
    },
    methods: {
        startGame: function () {
            this.startNewGame = false;
            this.playerGuess = '';
            this.playerGuessArray = [];
            this.computerGuessArray = [];
            this.gameGuesses = [];
            this.currentRound = 1;
            this.randomNumber = Math.round(Math.random() * this.maxRandomNumber) + 1;
            this.lowWater = 0;
            this.highWater = this.maxRandomNumber;
            this.showRules = false;
        },
        surrender: function () {
            this.startNewGame = true;
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
                    this.playerFinalRound = this.round;                             // use this for determining game over status
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
                this.currentRound = this.currentRound + 1;
                if (this.rounds == 11) {
                    this.playerGameOver = true;
                    this.playerFinalRound = 10;
                }
                this.playerGuess = '';
            }
        },
        toggleRules: function () {
            this.showRules = !this.showRules;
        },
    },
});