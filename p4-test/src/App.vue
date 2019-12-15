<template>
    <div id='app'>
        <img id='logo' alt='ZipFoods logo' src='./assets/images/jokes.png' />

        <nav>
            <ul>
                <li v-for='link in links' :key='link'>
                    <router-link exact :to='{ name: link }'>
                        {{ link }}
                        <span data-test='cart-count' v-if='link == "cart"'>({{ cartCount }})</span>
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
            products: products,
            links: ['home', 'jokes', 'categories', 'cart'],
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
        this.cart = new app.Cart();
        //app.store.cartCount = this.cart.count();
        this.$store.commit('setCartCount', this.cart.count());
        this.$store.dispatch('setProducts');

    }
};
</script>

<style lang="scss">
@import './assets/css/index.scss';
</style>
