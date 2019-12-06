<template>
  <div>
    <div v-for='recipe in sharedState.recipes' :key='recipe.id'>
      <router-link
        data-test='recipe-name'
        :to='{ name: "recipe", params: {"id": recipe.id}}'
      >{{ recipe.name }}</router-link>
      <a data-test='brew-beer' href='#' @click='addToBrewList(recipe.id)'>Brew</a>
    </div>
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
    }
  },
  data: function() {
    return {
      sharedState: app.site
    };
  }
};
</script>

<style scoped>
</style>