<template>
    <div id='header'>
        <img id='logo' src='./../../assets/logo-small.png' />
    </div>
</template>
<script>
import * as app from './../../app.js';

export default {
    name: 'SiteHeader',
    components: {},
    data: function() {
        return {
            sharedState: app.site
        };
    },
    mounted() {
        app.axios.get(app.config.api + 'recipes').then(response => {
            app.site.recipes = response.data;
            console.log(response.data);
        });
    }
};
</script>

<style scoped>
</style>