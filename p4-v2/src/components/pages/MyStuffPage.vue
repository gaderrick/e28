<template>
  <div v-if='loaded && localRecipes.length > 1'>
    You have the below personal recipes stored. Click "Edit" or "Remove" to make changes.
    <br />
    <br />
    <div class='divWrap' v-for='(recipe, index) in localRecipes' :key='index'>
      <span v-if='index != ""'>
        <router-link
          data-test='edit-recipe'
          :to='{name: "editRecipe", params: {propId: index }}'
        >{{ recipe.recipeName }}</router-link>
        <br />
        <a data-test='remove-recipe' class='smallerText' v-on:click='deleteRecipe(index)'>remove</a>
      </span>
    </div>
  </div>
  <div v-else>You do not have any personal recipes stored.</div>
</template>

<script>
import * as app from './../../app.js';

export default {
  name: 'MyStuffPage',
  components: {},
  data: function() {
    return {
      localRecipes: null,
      loaded: false
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
    this.loaded = true;
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