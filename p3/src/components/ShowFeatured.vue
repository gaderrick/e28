<template>
    <div>
        <li v-for='recipe in featuredRecipes' :key='recipe.id'>{{ recipe.name }}</li>
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
</style>