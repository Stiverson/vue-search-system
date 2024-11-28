import { createApp } from 'vue';
import App from './App.vue';
import './assets/themes.css';

import { createRouter, createWebHistory } from 'vue-router';
import Home from '../src/pages/Home.vue';
import NotFound from '../src/pages/NotFound.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/:pathMatch(.*)*', component: NotFound },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

createApp(App).use(router).mount('#app');
