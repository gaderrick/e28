<template>
    <div>
        <span>There are currently {{ sharedState.recipes.length }} recipes in the database.</span>
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
            sharedState: app.site
        };
    },
    mounted() {}
};
</script>

<style scoped>
</style>