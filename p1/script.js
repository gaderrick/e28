let app = new Vue({
    el: '#app',

    data: {
        'maxAllowedGuesses': 10,
        'remainingRounds': 0,
        'maxRandomNumber': 100,
        'randomNumber': 0,
        'playerGuessArray': [],
        'playerGuess': '',
        'playerRoundsTaken': '0',
        'playerGameOver': false,
        'computerGuessArray': [],
        'computerGuess': '',
        'computerRoundsTaken': '0',
        'computerGameOver': false,
        'computersTurn': false,
        'startNewGame': true,
        'statusMessage': '',
        'lowWater': '',
        'highWater': '',
        'wasLow': false,
        'wasHigh': false,
        'wasCorrect': false,
        'whoWon': 0,
    },
    methods: {
        newGame: function () {
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
            this.wasLow = false;
            this.wasHigh = false;
            this.wasCorrect = false;
            // Computer's first selection
            if (this.playerGuessArray.length == 0) {
                this.computerGuess = Math.round(Math.random() * this.maxRandomNumber) + 1;
            } else {
                // Computer logic to make follow up selections
                do
                    this.computerGuess = Math.round(Math.random() * (this.highWater - this.lowWater)) + this.lowWater;
                while (this.computerGuessArray.includes(this.computerGuess));
            }

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
