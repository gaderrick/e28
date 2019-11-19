<template>
  <div>
    <div class='divWrap' v-for='(recipe, index) in localRecipes' :key='index'>
      <span v-if='index != ""'>
        <router-link :to='{name: "editRecipe", params: {propId: index }}'>{{ recipe.recipeName }}</router-link>
        <br />
        <a class='smallerText' v-on:click='deleteRecipe(index)'>remove</a>
      </span>
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
  methods: {
    deleteRecipe: function(recipeId) {
      let recipeList = new app.Recipe();
      recipeList.remove(recipeId);

      // refresh the localstorage cache
      this.localRecipes = new app.Recipe().getDetails();
    }
  },
  mounted() {
    this.localRecipes = new app.Recipe().getDetails();
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