let app = new Vue({
    el: '#app',

    data: {
        'maxAllowedGuesses': 10,
        'remainingRounds': 0,
        'maxRandomNumber': 100,
        'randomNumber': 0,
        'playerGuessArray': [],
        'computerGuessArray': [],
        'playerGuess': '',
        'startNewGame': true,
        'statusMessage': '',
        'computersTurn': false,
    },
    methods: {
        newGame: function () {
            this.remainingRounds = this.maxAllowedGuesses;
            this.playerGuessArray = [];
            this.computerGuessArray = [];
            this.randomNumber = Math.round(Math.random() * this.maxRandomNumber);
            this.startNewGame = false;
        },
        makeGuess: function () {
            if (this.playerGuessArray.includes(this.playerGuess)) {
                alert('You already tried that value.');
            } else {
                if (this.playerGuess == this.randomNumber) {
                    this.statusMessage = 'You guessed the random number!';
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
        computerGuess: function () {

        }
    }
});
