import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        toBrewList: [],
    },
    mutations: {
        addToBrewList(state, payload) {
            // code
            state.toBrewList.push(payload);
        },
        removeFromBrewList(state, payload) {
            // code
            state.toBrewList.splice(payload, 1);
        }
    }
})