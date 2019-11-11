<template>
    <div id='app'>
        <SiteHeader></SiteHeader>
        <div>
            <br />
            <router-link exact to='/'>Home</router-link>&nbsp;&nbsp;
            <router-link exact to='/recipes'>Recipes</router-link>&nbsp;&nbsp;
            <router-link exact to='/vault'>Vault</router-link>
            <br />
            <br />
        </div>
        <router-view></router-view>
        <SiteFooter></SiteFooter>
    </div>
</template>

<script>
import SiteHeader from './components/common/SiteHeader.vue';
import SiteFooter from './components/common/SiteFooter.vue';

export default {
    name: 'app',
    components: {
        SiteHeader,
        SiteFooter
    },
    data: function() {
        return {
            links: ['home', 'recipes', 'vault']
        };
    }
};
</script>

<style lang='scss'>
@import './assets/css/p3.scss';
</style>
