<template>
  <div>
    <div v-for='recipe in sharedState.recipes' :key='recipe.id'>
      <router-link
        data-test='recipe-name'
        :to='{ name: "recipe", params: {"id": recipe.id}}'
      >{{ recipe.name }}</router-link>
      <a data-test='brew-beer' href='#' @click='addToBrewList(recipe.id)'>Brew</a>
    </div>
    <transition name='fade'>
      <div class='alert' v-if='addAlert'>Recipe added to your brew list</div>
    </transition>
  </div>
</template>
<script>
import * as app from './../../app.js';

export default {
  name: 'RecipesPage',
  components: {},
  methods: {
    addToBrewList: function(brewId) {
      this.$store.commit('addToBrewList', brewId);

      this.addAlert = true;
      setTimeout(() => (this.addAlert = false), 2000);
    }
  },
  data: function() {
    return {
      sharedState: app.site,
      addAlert: false
    };
  }
};
</script>

<style scoped>
</style>