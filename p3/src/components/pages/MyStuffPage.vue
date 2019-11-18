<template>
  <div>
    <div v-for='(recipe, index) in localRecipes' :key='index'>
      <router-link
        v-if='index != ""'
        exact
        :to='{name: "editRecipe", params: {propId: index }}'
      >{{ recipe.recipeName }}</router-link>
    </div>
  </div>
</template>

<script>
import * as app from './../../app.js';

export default {
  name: 'MyStuffPage',
  components: {},
  data: function() {
    return {
      localRecipes: null
    };
  },
  mounted() {
    //localStorage.clear();
    this.localRecipes = new app.Recipe().getDetails();
  }
};
</script>

<style scoped>
</style>