let app = new Vue({
    el: '#app',
    data: {
        'playerName': null,
        'guess': null,
        'guesses': [],
        'results': null,
        'settings': {
            'max': 200,
            'type': 'numeric',
            'guessLimit': 15
        },
        'answer': 55,
        'guessesDetailed': [
            { guess: 15, result: 'low' },
            { guess: 60, result: 'high' },
            { guess: 50, result: 'low' }
        ]
    },
    methods: {
        submitGuess: function () {
            this.guesses.push(this.guess);
        }
    }
});
