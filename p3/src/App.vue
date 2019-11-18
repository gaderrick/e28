<template>
  <div id='app'>
    <SiteHeader></SiteHeader>
    <div>
      <br />
      <router-link exact :to='{name: "home"}'>Home</router-link>&nbsp;&nbsp;
      <router-link exact :to='{name: "recipes"}'>Recipe Catalog</router-link>&nbsp;&nbsp;
      <router-link exact :to='{name: "myStuff"}'>My Stuff</router-link>&nbsp;|&nbsp;
      <router-link exact :to='{name: "editRecipe", params: {propId: 0 }}'>Add a Recipe</router-link>
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
      //links: ['home', 'recipes', 'mystuff']
    };
  }
};
</script>

<style lang='scss'>
@import './assets/css/p3.scss';
</style>
