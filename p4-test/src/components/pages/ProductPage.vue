<template>
    <div id='product-page' v-if='product'>
        <h1 data-test='product-name'>Title: {{ product.name }}</h1>
        <p class='id'>Joke #{{ product.id }}</p>
        <p class='description'>{{ product.description }}</p>
        <p class='categories'>Category: {{ product.categories }}</p>
        
        <button data-test='add-to-cart-button' @click='addToCart(product.id)'>Add to cart</button>
        <transition name='fade'>
            <div class='alert' v-if='addAlert'>Your cart has been updated!</div>
        </transition>
        <br/>
        <router-link :to='"/products"'>&larr; Return to all jokes</router-link>
    </div>
</template>

<script>
import Cart from './../../Cart.js';
//import * as app from './../../app.js';

export default {
    name: 'ProductPage',
    props: ['id'],
    data: function() {
        return {
            addAlert: false

        };
    },
    mounted() {
    },
    methods: {
        addToCart: function(productId) {
            let cart = new Cart();
            cart.add(productId);

            //app.store.cartCount = cart.count();
            //this.$store.commit('updateCartCount', 1);
            this.$store.commit('setCartCount', cart.count());


            this.addAlert = true;

            setTimeout(() => (this.addAlert = false), 2000);
        }
    },
    computed: {
        product: function() {
            return this.$store.getters.getProductById(this.id);
        }
    },
};
</script>