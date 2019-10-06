let app = new Vue({
    el: '#app',
    data: {
        guess: '',
        mysteryWord: 'dinosaur',
        answered: false,
        showHint: false,
        statements: [],
        level: 'easy',
        correct: true,
        feedbackClass: '',
        valid: true,
        feedback: '',
        solution: 35,
        answer: '',
        imageSrc: '',
        imageAlt: '',

        firstName: '',
        lastName: '',
        guesses: [34, 56, 78, 100],
        correctGuess: 50,
    },
    methods: {
        submitAnswer: function () {
            this.answered = true;
            this.valid = true;
            this.correct = true;

            if (typeof (this.answer) != 'number') {
                this.feedbackClass = 'validationError';
                this.answered = false;
                this.valid = false;
                this.feedback = 'Enter a valid number';
            }

            if (this.answer == this.solution) {
                this.feedbackClass = '';
                this.feedback = 'You got it!';
                this.imageSrc = 'happy.png';
                this.imageAlt = 'Happy smiley face';
            } else {
                this.feedbackClass = 'error';
                this.feedback = 'You didn\'t get it!';
                this.correct = false;
                this.imageSrc = 'sad.png';
                this.imageAlt = 'Frowny face';
            }
        },
    }, computed: {
        fullName: function () {
            return this.firstName + ' ' + this.lastName;
        },
        displayWord: function () {
            var wordAsArray = this.mysteryWord.split('');
            for (let i = 0; i < wordAsArray.length; i += 2) {
                wordAsArray[i] = '_';
            }
            return wordAsArray.join('');
        },
        highGuesses: function () {
            function isHigh(number) {
                return number > this;
            }
            return this.guesses.filter(isHigh, this.correctGuess);
        }
    }, watch: {
        guess: function () {
            let mysteryWordArray = this.mysteryWord.split('');
            let guessArray = this.guess.split('');
            let correctCount = 0;

            guessArray.forEach(function (letter, index) {
                if (letter == mysteryWordArray[index]) {
                    correctCount++;
                }
            });

            this.feedback = 'Correct letters so far: ' + correctCount;
        }
    }
});