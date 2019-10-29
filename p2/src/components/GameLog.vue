<template>
  <div class="Row">
    <div class="Cell">
      <p>{{ number }}</p>
    </div>
    <div class="Cell">
      <p>{{ who }}</p>
    </div>
    <div class="Cell">
      <p>{{ guess }}</p>
    </div>
    <div class="Cell">
      <p>{{ message }}</p>
    </div>
    <div class="Cell" :class="[{ Match : correctGuess == true, NotMatch : correctGuess == false }]">
      <p>{{ correctGuess ? "Yes" : "No"}}</p>
    </div>
  </div>
</template>

<script>
module.exports = {
  data: function() {
    return {};
  },
  props: {
    number: {
      type: Number,
      default: 0
    },
    who: {
      type: String,
      default: ""
    },
    guess: {
      type: Number,
      default: 0
    },
    message: {
      type: String,
      default: ""
    },
    correctGuess: {
      type: Boolean,
      default: ""
    }
  },
  methods: {}
};
</script>

<style>
.Row {
  display: table-row;
}
.Cell {
  display: table-cell;
  border: solid;
  border-width: thin;
  padding-left: 5px;
  padding-right: 5px;
}
.NotMatch {
  background: red;
  text-align: center;
}
.Match {
  background: green;
  text-align: center;
}
</style>