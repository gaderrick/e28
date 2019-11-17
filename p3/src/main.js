import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router';
import HomePage from './components/pages/HomePage.vue';
import RecipesPage from './components/pages/RecipesPage.vue';
import RecipePage from './components/pages/RecipePage.vue';
import VaultPage from './components/pages/VaultPage.vue';
import EditRecipePage from './components/pages/EditRecipePage.vue';

Vue.use(VueRouter);
Vue.config.productionTip = false;

const routes = [
  { path: '/', component: HomePage, name: 'home' },
  { path: '/recipes', component: RecipesPage, name: 'recipes' },
  { path: '/recipes/:id', component: RecipePage, name: 'recipe', props: true },
  { path: '/vault', component: VaultPage, name: 'vault' },
  { path: '/recipes/edit/:id', component: EditRecipePage, name: 'editRecipe', props: true }
];

const router = new VueRouter({
  routes: routes,
  mode: 'history'
});

new Vue({
  router: router,
  render: h => h(App),
}).$mount('#app');
