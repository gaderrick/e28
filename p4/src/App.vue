<template>
  <div id='app'>
    <SiteHeader></SiteHeader>
    <div>
      <br />
      <router-link data-test='menu-home' exact :to='{name: "home"}'>Home</router-link>&nbsp;&nbsp;
      <router-link data-test='menu-recipes' exact :to='{name: "recipes"}'>Recipe Catalog</router-link>&nbsp;&nbsp;
      <router-link data-test='menu-mystuff' exact :to='{name: "myStuff"}'>My Recipes</router-link>&nbsp;&nbsp;
      <router-link data-test='menu-brewlist' exact :to='{name: "myToBrewList"}'>My To Brew List</router-link>|&nbsp;
      <router-link
        data-test='menu-edit'
        exact
        :to='{name: "editRecipe", params: {propId: 0 }}'
      >Add a Recipe</router-link>
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
  mounted() {
    console.log(this.$store);
  },
  data: function() {
    return {};
  }
};
</script>

<style lang='scss'>
@import './assets/css/p3.scss';
</style>
