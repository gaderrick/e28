<template>
  <div v-bind:class="{ winner : winner == 'Player'}">
    <ul>
      <li>Round number: {{ number }}</li>
      <li>Winner: {{ winner }}</li>
      <li>
        <slot name="choice"></slot>
      </li>
      <li>
        <slot name="coin"></slot>
      </li>
    </ul>
    <button @click="$emit('delete-round', number)">Remove Round Test</button>
  </div>
</template>

<script>
export default {
  data: function() {
    return {};
  },
  props: {
    number: {
      type: Number,
      default: 0
    },
    winner: {
      type: String,
      default: ""
    }
  },
  methods: {
    // this is a NO NO: you don't want to alter the parent directly from child instances
    // shown for example only
    deleteRound() {
      console.log(this.$root.rounds);
    }
  },
  template: "#round-detail"
};
</script>

<style scoped>
ul {
  background-color: red;
}
</style>