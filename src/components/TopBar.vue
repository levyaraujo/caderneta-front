<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { whatsappLink } from '../utils.ts'

const navigation = [
  { name: 'Funcionalidades', href: '#features' },
  { name: 'Planos', href: '#pricing' },
  { name: 'FAQ', href: '#faq' }
]

const isScrolled = ref(false)
const isMobileMenuOpen = ref(false)

const handleScroll = () => {
  isScrolled.value = window.scrollY > 10
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<template>
  <nav
    :class="[
      'fixed top-0 left-0 right-0 z-50 transition-all duration-300 navbar',
      isScrolled ? 'bg-slate-900/80 backdrop-blur-md shadow-lg' : 'bg-transparent'
    ]"
  >
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-20">
        <!-- Logo -->
        <div class="flex-shrink-0">
          <a href="/" class="flex items-center text-2xl font-bold">
            <img src="../../public/icon.svg" alt="Icon Description" class="mr-2">
            <span class="bg-gradient-to-r from-green-400 to-green-600 bg-clip-text text-transparent">
        caderneta
      </span>
          </a>
        </div>

        <div class="hidden md:flex items-center space-x-8">
          <div class="flex space-x-8">
            <a
              v-for="item in navigation"
              :key="item.name"
              :href="item.href"
              :class="['hover:text-green-500 transition-colors duration-200 font-medium', isScrolled ? 'text-gray-500' : 'text-gray-600']"
            >
              {{ item.name }}
            </a>
          </div>
        </div>
        <button
          class="hidden md:block px-5 py-2.5 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white transition-all duration-200 transform hover:-translate-y-0.5"
        >
          <a :href="whatsappLink" target="_blank">Teste Grátis</a>
        </button>

        <!-- Mobile menu button -->
        <div class="md:hidden z-50">
          <button
            @click="isMobileMenuOpen = !isMobileMenuOpen"
            class="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-100 focus:outline-none"
          >
            <svg
              :class="['h-6 w-6', isMobileMenuOpen ? 'hidden' : 'block']"
              stroke="currentColor"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
            <svg
              :class="['h-6 w-6', isMobileMenuOpen ? 'block' : 'hidden']"
              stroke="currentColor"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>

    <!-- Mobile menu -->
    <div
      :class="[
    'md:hidden fixed inset-0 z-40 bg-#0F172A/90 backdrop-blur-lg transition-transform duration-300 ease-in-out',
    isMobileMenuOpen
      ? 'translate-y-0 opacity-100 pointer-events-auto'
      : '-translate-y-full opacity-0 pointer-events-none'
  ]"
      role="dialog"
      :aria-hidden="!isMobileMenuOpen"
    >
      <div class="px-4 pt-6 pb-4 space-y-3 shadow-lg">
        <!-- Navigation Links -->
        <a
          v-for="item in navigation"
          :key="item.name"
          :href="item.href"
          class="block px-4 py-2 text-lg rounded-lg font-medium text-gray-200 hover:text-white hover:bg-green-600 focus:bg-green-700 focus:ring-2 focus:ring-green-500 transition-all"
        >
          {{ item.name }}
        </a>

        <!-- Call to Action Button -->
        <div class="px-4 py-2">
          <button
            class="w-full py-2.5 rounded-full bg-gradient-to-r from-green-500 to-green-600 text-white font-medium shadow-lg shadow-green-500/30 hover:shadow-green-500/50 hover:scale-105 active:scale-100 transition-transform duration-200"
          >
            Teste Grátis
          </button>
        </div>
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
