let app = new Vue({
    el: '#app',

    data: {
        'maxAllowedGuesses': 10,
        'remainingRounds': 0,
        'maxRandomNumber': 100,
        'randomNumber': 0,
        'playerGuessArray': [1, 2, 3],
        'computerGuessArray': [4, 5, 6],
        'startNewGame': true
    },
    methods: {
        newGame: function () {
            this.remainingRounds = this.maxAllowedGuesses;
            this.playerGuessArray = [];
            this.computerGuessArray = [];
            this.randomNumber = Math.round(Math.random() * this.maxRandomNumber);
            this.startNewGame = false;
        }
    }
});
