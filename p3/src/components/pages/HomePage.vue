<template>
    <div>
        <br />
        <br />This is the
        <a>Home Page</a>
        <br />
        <span>There are {{ recipes.length }} recipes in the database.</span>
        <br />
        <br />
    </div>
</template>
<script>
import * as app from './../../app.js';

export default {
    name: 'HomePage',
    components: {},
    data: function() {
        return {
            recipes: [],
            recipeCount: 0
        };
    },
    mounted() {
        app.axios
            // .get(app.config.api + 'recipes')
            // .then(response => (this.recipes = response.data));
            .get(app.config.api + 'recipes')
            .then(response => {
                this.recipes = response.data;
                console.log(response.data);
            });
    }
};
</script>

<style scoped>
</style>