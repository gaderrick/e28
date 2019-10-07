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
        },
        makeGuess: function () {
            if (this.playerGuessArray.includes(this.playerGuess)) {
                alert('You already tried that value.');
            } else {
                if (this.playerGuess == this.randomNumber) {
                    this.statusMessage = 'You guessed the random number!';
                    this.playerGameOver = true;
                    this.playerRoundsTaken = this.maxAllowedGuesses - this.remainingRounds;
                } else {
                    this.playerGuessArray.push(this.playerGuess);
                    this.statusMessage = 'Sorry, you didn\'t pick the random number. ';
                    if (this.playerGuess < this.randomNumber) {
                        this.statusMessage += 'Your guess was too low!'
                    } else {
                        this.statusMessage += 'Your guess was too high!'
                    }
                }
                this.remainingRounds = this.remainingRounds - 1;
                this.playerGuess = '';
                this.computersTurn = true;
            }
        },
        makeComputerGuess: function () {
            // Computer's first selection
            if (this.playerGuessArray.length == 0) {
                this.computerGuess = Math.round(Math.random() * this.maxRandomNumber) + 1;
            } else {
                // Computer logic to make follow up selections
                this.computerGuess = Math.round(Math.random() * (this.highWater - this.lowWater)) + this.lowWater;
            }

            if (this.computerGuess == this.randomNumber) {
                this.statusMessage = 'Computer guessed the number!';
                this.computerRoundsTaken = this.maxAllowedGuesses - this.remainingRounds;
                this.computerGameOver = true;
            } else {
                this.computerGuessArray.push(this.computerGuess);
                this.statusMessage = 'The computer didn\'t guess the number. ';
                if (this.computerGuess < this.randomNumber) {
                    this.statusMessage += 'The guess was too low.';
                    this.lowWater = this.computerGuess;
                } else {
                    this.statusMessage += 'The guess was too high.';
                    this.highWater = this.computerGuess;
                }
            }

            this.computersTurn = false;
        }
    }
});
