<template>
  <div id="app">
    <div>
      <label>
        <input type="radio" value="heads" v-model="choice" />heads
      </label>
      <label>
        <input type="radio" value="tails" v-model="choice" />tails
      </label>
    </div>

    <button id="flipBtn" v-on:click="flip">Flip!</button>

    <round-detail
      v-for="round in rounds"
      :number="round.number"
      :winner="round.winner"
      :key="round.number"
      v-on:delete-round="deleteRound($event)"
    >
      <template v-slot:choice>You chose {{ round.choice }}</template>
      <template v-slot:coin>The coin landed on {{ round.coin }}</template>
    </round-detail>
  </div>
</template>

<script>
import RoundDetail from "./components/RoundDetail.vue";

export default {
  name: "app",
  components: {
    RoundDetail
  },
  data: function() {
    return {
      flipped: false,
      choice: "heads",
      sides: ["heads", "tails"],
      rounds: [],
      round: 1
    };
  },
  methods: {
    flip: function() {
      this.flipped = true;
      this.coin = this.sides[Math.floor(Math.random() * 2)];

      let winner = "";
      if (this.choice == this.coin) {
        winner = "Player";
      } else {
        winner = "Computer";
      }

      this.rounds.push({
        number: this.round++,
        winner: winner,
        coin: this.coin,
        choice: this.choice
      });
    },
    deleteRound: function(roundNumber) {
      function isMatchingRound(round) {
        return round.number != this;
      }
      //console.log("Invoked deleteRound from root component");
      this.rounds = this.rounds.filter(isMatchingRound, roundNumber);
    }
  }
};
</script>

<style>
</style>
