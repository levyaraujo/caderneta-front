<script setup lang="ts">
import {ref, onMounted, onUnmounted, computed} from 'vue'
import { whatsappLink } from '../utils.ts'
import MobileMenu from "./MobileMenu.vue";
import BurgerIcon from "./BurgerIcon.vue";
import {useRoute} from "vue-router";

const navigation = ref([
  { name: 'Funcionalidades', href: '#features' },
  { name: 'Planos', href: '#pricing' },
  { name: 'FAQ', href: '#faq' }
])

const route = useRoute();

const isScrolled = ref(false)

const handleScroll = () => {
  isScrolled.value = window.scrollY > 10
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})

const isRootRoute = computed(() => route.path === '/');

</script>

<template>
  <nav
    :class="[
      'fixed top-0 left-0 right-0 z-40 transition-all duration-300 navbar',
      isScrolled ? 'bg-slate-900/80 backdrop-blur-md shadow-lg' : 'bg-transparent'
    ]"
  >
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div :class="['flex items-center h-20', isRootRoute ? 'justify-between' : 'justify-center']">
        <!-- Logo -->
        <div class="flex-shrink-0">
          <router-link to="#hero" class="flex items-center text-2xl font-bold">
            <img src="../../public/icon.svg" alt="Icon Description" class="mr-2">
            <span class="bg-gradient-to-r from-green-400 to-green-600 bg-clip-text text-transparent">
              caderneta
              </span>
          </router-link>
        </div>

        <div class="hidden md:flex items-center space-x-8">
          <div class="flex space-x-8">
            <router-link
              v-if="isRootRoute"
              v-for="item in navigation"
              :key="item.name"
              :to="item.href"
              :class="['hover:text-green-500 transition-colors duration-200 font-medium', isScrolled ? 'text-gray-500' : 'text-gray-600']"
            >
              {{ item.name }}
            </router-link>
          </div>
        </div>
        <button
          class="hidden md:block px-8 py-3 rounded-full bg-gradient-to-r from-green-500 to-green-600 text-white font-medium shadow-sm shadow-green-500/30 hover:shadow-green-500/50 transition-all duration-200 transform hover:shadow-md hover:-translate-y-0.5"
        >
          <a :href="whatsappLink" target="_blank">Teste Grátis</a>
        </button>

        <BurgerIcon v-if="isRootRoute"/>
        <MobileMenu :navigation="navigation" />

      </div>
    </div>
  </nav>
</template>

<style>

:root {
  --green-400: #4ade80;
  --green-500: #22c55e;
  --green-600: #16a34a;
}

.from-green-400 {
  --tw-gradient-from: var(--green-400);
}

.to-green-600 {
  --tw-gradient-to: var(--green-600);
}

.bg-gradient-to-r {
  background-image: linear-gradient(to right, var(--tw-gradient-from), var(--tw-gradient-to));
}

.bg-clip-text {
  -webkit-background-clip: text;
  background-clip: text;
}

.backdrop-blur-md {
  backdrop-filter: blur(12px);
}

.navbar {
  font-family: 'Poppins', sans-serif;
  font-weight: 600;
}
</style>
