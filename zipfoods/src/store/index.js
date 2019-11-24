import Vue from 'vue'
import Vuex from 'vuex'

import * as app from "./../app.js";

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
            app.axios
                //.get(app.config.api + "products")
                .get(app.config.api)
                .then(response => {
                    context.commit('setProducts', response.data.splice(1))
                    //this.products = response.data;
                });
        }
    },
    getters: {
        getProductById(state) {
            return function (id) {
                // javascript array filtering
                return state.products.find(product => product.id == id);
            }
        }
    }
})