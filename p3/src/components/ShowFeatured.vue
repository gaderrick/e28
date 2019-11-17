<template>
  <div>
    <span v-for='recipe in featuredRecipes' :key='recipe.id'>
      <router-link :to='{ name: "recipe", params: {"id": recipe.id}}'>
        <img :src='require("./../assets/images/" + recipe.image)' />
        <br />
        {{ recipe.name }}
      </router-link>
    </span>
  </div>
</template>
<script>
import * as app from './../app.js';

export default {
  name: 'ShowFeatured',
  components: {},
  props: ['id'],
  computed: {
    featuredRecipes: function() {
      function isMatch(recipe) {
        return recipe.id == this;
      }
      return this.sharedState.recipes.filter(isMatch, this.id);
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
img {
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 50%;
}
</style>