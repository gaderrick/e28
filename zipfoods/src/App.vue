<template>
  <div id='app'>
    <img id='logo' alt='Vue logo' src='./assets/images/zipfoods-logo.png' />
    <nav>
      <ul>
        <li v-for='link in links' :key='link'>
          <router-link exact :to='{name:link}'>
            {{ link }}
            <span v-if='link=="cart"'>({{ cartCount }})</span>
          </router-link>
        </li>
      </ul>
    </nav>
    <router-view></router-view>
  </div>
</template>

<script>
import * as app from './app.js';
import { products } from './products.js';

export default {
  name: 'app',
  components: {},
  data: function() {
    return {
      products: products, // 11/23 missing from the lesson video
      links: ['home', 'products', 'categories', 'cart']
      //cartCount: null,
      //sharedState: app.store
    };
  },
  computed: {
    cartCount: function() {
      return this.$store.state.cartCount;
    }
  },
  mounted() {
    //console.log(this.$store.state.cartCount); // get data from the state
    this.cart = new app.Cart();
    //app.store.cartCount = this.cart.count();
    this.$store.commit('setCartCount', this.cart.count());

    this.$store.dispatch('setProducts');
  }
};
</script>

<style lang='scss'>
@import './assets/css/zipfoods.scss';
</style>
