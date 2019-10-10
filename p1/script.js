let app = new Vue({
    el: '#app',

    data: {
        'maxAllowedGuesses': 10,        // max number of guesses allowed for each game
        'remainingRounds': 0,           // tracks the number of rounds remaining
        'maxRandomNumber': 100,         // The max number the random number could be
        'randomNumber': 0,              // The random number to be guessed
        'playerGuessArray': [],         // Holds the player's historical guesses
        'playerGuess': '',              // Player's guess
        'playerRoundsTaken': '0',       // # of rounds taken by player to guess the number
        'playerGameOver': false,        // Status of the player's game
        'computerGuessArray': [],       // Holds the computer's historical guesses
        'computerGuess': '',            // Computer's guesses
        'computerRoundsTaken': '0',     // # of rounds taken by computer to guess the number
        'computerGameOver': false,      // Status of the computer's game
        'computersTurn': false,         // Tracks if it is the computer's turn
        'startNewGame': true,           // Flag to track if a new game is starting
        'statusMessage': '',            // Variable to hold messages for the game
        'lowWater': '',                 // Tracks the computer's lowest guess for logic purposes
        'highWater': '',                // Tracks the computer's highest guess for logic purposes
        'wasLow': false,                // Used to set the class of status messages
        'wasHigh': false,               // Used to set the class of status messages
        'wasCorrect': false,            // Used to set the class of status messages
        'whoWon': 0,                    // Holds the value of who one
    },
    methods: {
        newGame: function () {
            // This function initializes the new game and all the variables needed
            this.remainingRounds = this.maxAllowedGuesses;
            this.playerGuessArray = [];
            this.playerGuess = '';
            this.playerRoundsTaken = 0;
            this.playerGameOver = false;
            this.computerGuessArray = [];
            this.computerGuess = '';
            this.computerRoundsTaken = 0;
            this.computerGameOver = false;
            this.computersTurn = false;
            this.randomNumber = Math.round(Math.random() * this.maxRandomNumber) + 1;
            this.startNewGame = false;
            this.lowWater = 0;
            this.highWater = this.maxRandomNumber;
            this.whoWon = 0
            this.statusMessage = '';
            this.wasLow = false;
            this.wasHigh = false;
            this.wasCorrect = false;
        },
        makeGuess: function () {
            // This function handles the logic for the player
            this.wasLow = false;
            this.wasHigh = false;
            this.wasCorrect = false;
            if (this.playerGuessArray.includes(this.playerGuess)) {
                alert('You already tried that value.');
            } else {
                if (this.playerGuess == this.randomNumber) {
                    this.statusMessage = 'You guessed the random number!';
                    this.wasCorrect = true;
                    this.playerGameOver = true;
                    this.computerGameOver = true;
                    this.playerRoundsTaken = this.maxAllowedGuesses - this.remainingRounds;
                } else {
                    this.statusMessage = 'Sorry, you didn\'t pick the random number. ';
                    if (this.playerGuess < this.randomNumber) {
                        this.statusMessage += 'Your guess was too low!'
                        this.wasLow = true;
                    } else {
                        this.statusMessage += 'Your guess was too high!'
                        this.wasHigh = true;
                    }
                }

                this.playerGuessArray.push(this.playerGuess);

                this.remainingRounds = this.remainingRounds - 1;
                if (this.remainingRounds == 0) {
                    this.playerGameOver = true;
                }
                this.playerGuess = '';
                this.computersTurn = true;
            }
        },
        makeComputerGuess: function () {
            // This function handles the computer's picks
            this.wasLow = false;
            this.wasHigh = false;
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
                this.computerRoundsTaken = this.maxAllowedGuesses - this.remainingRounds;
                this.computerGameOver = true;
                this.playerGameOver = true;
            } else {
                this.statusMessage = 'The computer didn\'t guess the number. ';
                if (this.computerGuess < this.randomNumber) {
                    this.statusMessage += 'The guess was too low.';
                    this.wasLow = true;
                    this.lowWater = this.computerGuess;
                } else {
                    this.statusMessage += 'The guess was too high.';
                    this.wasHigh = true;
                    this.highWater = this.computerGuess;
                }
            }

            // Add the computer's guess to the array that tracks the computer's guesses
            this.computerGuessArray.push(this.computerGuess);

            if (this.remainingRounds == 0) {
                this.computerGameOver = true;
            }
            this.computersTurn = false;

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
                        this.statusMessage = 'The player won!';
                        this.wasCorrect = true;
                        break;
                    case 3:
                        // Computer won
                        this.statusMessage = 'The computer won!';
                        this.wasCorrect = true;
                        break;
                    case 4:
                        // Both player and computer won
                        this.statusMessage = 'Both the player and computer picked the random number!';
                        this.wasCorrect = true;
                        break;
                    default:
                        this.statusMessage = 'Neither the player nor computer won.';
                        this.wasLow = true;
                    // Noone won
                }
                this.startNewGame = true;
            }
        }
    }
});
