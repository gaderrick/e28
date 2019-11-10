<template>
    <div>
        <br />
        <br />This is the Recipe Page
        <br />
        Showing recipe for {{ recipe.name }}
    </div>
</template>
<script>
import * as app from './../../app.js';

export default {
    name: 'RecipePage',
    props: ['id'],
    components: {},
    data: function() {
        return {
            recipe: null
        };
    },
    mounted() {
        app.axios.get(app.config.api + 'recipes/' + this.id).then(response => {
            this.recipe = response.data;
            console.log(response.data);
        });
    }
};
</script>

<style scoped>
</style>