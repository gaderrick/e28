<template>
  <div id='featured'>
    <h2>Featured Products</h2>
    <ul class='cleanList'>
      <li v-for='product in featuredProducts' :key='product.id'>{{ product.name }}</li>
    </ul>
  </div>
</template>
<script>
import { products } from './../products.js';

export default {
  name: 'ShowFeatured',
  components: {},
  props: ['category'],
  computed: {
    featuredProducts: function() {
      return _.filter(this.products, product => {
        return product.categories.includes(this.category);
      });
    }
  },
  data: function() {
    return {
      products: products
    };
  }
};
</script>

<style scoped>
</style>