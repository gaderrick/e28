<template>
    <div>
        <span>There are currently {{ sharedState.recipes.length }} recipes in the database.</span>
        <br />
        <br />
        <span>This month's featured recipes</span>
        <br />
        <br />
        <show-featured :id='1'></show-featured>
        <show-featured :id='3'></show-featured>
    </div>
</template>
<script>
import * as app from './../../app.js';
import ShowFeatured from './../ShowFeatured.vue';

export default {
    name: 'HomePage',
    components: { ShowFeatured },
    data: function() {
        return {
            sharedState: app.site,
            featured: [1, 3]
        };
    },
    mounted() {}
};
</script>

<style scoped>
</style>