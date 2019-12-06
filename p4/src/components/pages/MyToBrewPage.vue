<template>
  <div v-if='toBrewList.length > 0'>
    The following recipes are currently in your "to brew" list. Click "Remove" to remove one from your list.
    <br />
    <br />
    <div data-test='recipe-name' v-for='(recipeId, index) in toBrewList' :key='index'>
      {{ getRecipeName(recipeId) }}
      <a
        data-test='remove-brew'
        href='#'
        class='smallerText'
        v-on:click='removeFromBrewList(index)'
      >Remove</a>
      <br />
    </div>
  </div>
  <div v-else>There are currently no beers in your "to brew" list.</div>
</template>

<script>
import * as app from './../../app.js';

export default {
  name: 'MyToBrewPage',
  methods: {
    removeFromBrewList: function(brewIndex) {
      this.$store.commit('removeFromBrewList', brewIndex);
    },
    getRecipeName: function(recipeId) {
      let rName = null;
      this.sharedState.recipes.forEach(function(recipe) {
        if (recipe.id == recipeId) {
          rName = recipe.name;
        }
      });
      return rName;
    }
  },
  computed: {
    toBrewList: function() {
      return this.$store.state.toBrewList;
    },
    sharedState: function() {
      return app.site;
    }
  }
};
</script>

<style scoped>
.smallerText {
  font-size: smaller;
}
.divWrap {
  display: inline-block;
}
.spanAlign {
  text-align: center;
}
</style>