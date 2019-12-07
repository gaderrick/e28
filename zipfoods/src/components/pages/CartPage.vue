<template>
  <div id='cart-page'>
    <h1>Your Cart</h1>

    <div v-if='items.length == 0'>No items</div>

    <ul data-test='cart-contents' v-else-if='products' class='cleanList'>
      <li v-for='item in items' :key='item.slug'>
        <button data-test='remove-from-cart-button' @click='removeFromCart(item.slug)'>Remove</button>
        {{ item.quantity }} x {{ getProductDetails(item.slug)['name'] }}
      </li>
    </ul>
  </div>
</template>

<script>
import * as app from './../../app.js';

export default {
  name: 'CartPage',
  data: function() {
    return {
      items: [],
      cart: null
      //products: []
    };
  },
  methods: {
    getProductDetails(productSlug) {
      return this.$store.getters.getProductBySlug(productSlug);
    },
    removeFromCart: function(productId) {
      this.cart.remove(productId);

      //app.store.cartCount = this.cart.count();

      this.$store.commit('setCartCount', this.cart.count());
    }
  },
  computed: {
    products: function() {
      return this.$store.state.products;
    }
  },

  mounted() {
    this.cart = new app.Cart();

    this.items = this.cart.getItems();

    // It would be more ideal if we could ping our server-api for *just*
    // the products that are in our cart. However, we don't have that option
    // with our Mock API, so we’re fetching all the product data.
    // this.products = app.axios
    //   .get(app.config.api + 'products')
    //   .then(response => {
    //     this.products = response.data;
    //   });
  }
};
</script>