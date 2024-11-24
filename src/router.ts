import Landing from './components/Landing/Landing.vue'
import PrivacyPolicy from './components/PrivacyPolicy.vue'
import { createRouter, createWebHistory } from 'vue-router'
import FAQ from './components/Landing/FAQ.vue'

const routes = [
  { path: '/', component: Landing },
  { path: '/politica-de-privacidade', component: PrivacyPolicy },
  { path: '/faq', component: FAQ }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { top: 0 };
    }
  }
});

export default router;