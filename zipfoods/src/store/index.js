import Vue from 'vue'
import Vuex from 'vuex'

import * as app from "./../app.js";

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        cartCount: 0,
        products: null,
    },
    mutations: {
        setCartCount(state, payload) {
            state.cartCount = payload;
        },
        updateCartCount(state, payload) {
            state.cartCount += payload;
        },
        setProducts(state, payload) {
            state.products = payload;
        },
        addProduct(state, payload) {
            _.merge(state.products, payload);
        }
    },
    actions: {
        setProducts(context) {
            app.axios.get(app.config.api + 'products.json').then(response => {
                // https://stackoverflow.com/questions/39156533/firebase-database-returns-null-at-beginning-of-each-new-node
                context.commit('setProducts', response.data)
            });
        }
    },
    getters: {
        getProductBySlug(state) {
            return function (slug) {
                //return state.products.find(product => product.id == id);
                return _.find(state.products, { 'slug': slug });
            }
        }
    }
})