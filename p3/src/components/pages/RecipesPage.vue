<template>
  <div>
    <div v-for='recipe in sharedState.recipes' :key='recipe.id'>
      <router-link :to='{ name: "recipe", params: {"id": recipe.id}}'>{{ recipe.name }}</router-link>
    </div>
  </div>
</template>
<script>
import * as app from './../../app.js';

export default {
  name: 'RecipesPage',
  components: {},
  data: function() {
    return {
      sharedState: app.site
    };
  }
};
</script>

<style scoped>
</style>