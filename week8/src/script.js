import Vue from 'vue';
import RoundDetail from './components/RoundDetail.vue';

// root Vue instance
let app = new Vue({
    el: '#app',
    components: {
        'round-detail': RoundDetail
    },
    data: {
        flipped: false,
        choice: 'heads',
        sides: ['heads', 'tails'],
        rounds: [],
        round: 1
    },
    methods: {
        flip: function () {
            this.flipped = true;
            this.coin = this.sides[Math.floor(Math.random() * 2)];

            let winner = '';
            if (this.choice == this.coin) {
                winner = 'Player';
            } else {
                winner = 'Computer';
            }

            this.rounds.push({
                number: this.round++,
                winner: winner,
                coin: this.coin,
                choice: this.choice
            })
        },
        deleteRound: function (roundNumber) {
            function isMatchingRound(round) {
                return round.number != this;
            }
            console.log('Invoked deleteRound from root component');
            this.rounds = this.rounds.filter(isMatchingRound, roundNumber);
        }
    }
});