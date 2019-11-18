<template>
  <div>
    <div v-for='recipe in sharedState.recipes' :key='recipe.id'>{{ recipe.name }}</div>
    <br />
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