<template>
    <div id='app'>
        <SiteHeader></SiteHeader>
        <nav>
            <ul>
                <li v-for='link in links' :key='link'>
                    <router-link exact :to='{name:link}'>{{ link }}</router-link>
                </li>
            </ul>
        </nav>
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
