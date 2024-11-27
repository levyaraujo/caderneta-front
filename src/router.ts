import Landing from './components/Landing/Landing.vue'
import PrivacyPolicy from './components/PrivacyPolicy.vue'
import FAQ from './components/Landing/FAQ.vue'
import { createRouter, createWebHistory } from 'vue-router'
import Contato from "./components/Contato.vue";

const routes = [
  { path: '/', component: Landing },
  { path: '/politica-de-privacidade', component: PrivacyPolicy },
  { path: '/faq', component: FAQ },
  { path: '/contato', component: Contato}
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, _from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth'
      };
    } else {
      return { top: 0 };
    }
  }
});

export default router;
