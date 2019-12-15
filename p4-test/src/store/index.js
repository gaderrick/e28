import Vue from 'vue'
import Vuex from 'vuex'
import * as app from './../app.js';

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        cartCount: 0,
        products: [],
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
        }
    },
    actions: {
        setProducts(context) {
            app.axios.get(app.config.api + 'jokes').then(response => {
                context.commit('setProducts', response.data);
            });
        }
    },
    // Getters are used when we want to to compute derived state based on store state
    // "computed properties for stores"
    // A getter's result is cached based on its dependencies, and will only re-evaluate when 
    // some of its dependencies have changed.
    // Getters will receive the state as their 1st argument
    getters: {
        // https://vuex.vuejs.org/guide/getters.html#method-style-access
        getProductById(state) {
            return function (id) {
                return state.products.find(product => product.id == id);
            }
        }
    }
})