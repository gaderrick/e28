import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router';
import HomePage from './components/pages/HomePage.vue';
import RecipesPage from './components/pages/RecipesPage.vue';
import RecipePage from './components/pages/RecipePage.vue';
import MyStuffPage from './components/pages/MyStuffPage.vue';
import MyToBrewPage from './components/pages/MyToBrewPage.vue';
import EditRecipePage from './components/pages/EditRecipePage.vue';

import store from './store'

Vue.use(VueRouter);
Vue.config.productionTip = false;

const routes = [
  { path: '/', component: HomePage, name: 'home' },
  { path: '/recipes', component: RecipesPage, name: 'recipes' },
  { path: '/recipes/:id', component: RecipePage, name: 'recipe', props: true },
  { path: '/mystuff', component: MyStuffPage, name: 'myStuff' },
  { path: '/mytobrew', component: MyToBrewPage, name: 'myToBrewList' },
  { path: '/recipes/edit/:propId', component: EditRecipePage, name: 'editRecipe', props: true }
];

const router = new VueRouter({
  routes: routes,
  mode: 'history'
});

new Vue({
  router: router,
  store: store, // Access using this.$store in ALL child components
  render: h => h(App),
}).$mount('#app');
