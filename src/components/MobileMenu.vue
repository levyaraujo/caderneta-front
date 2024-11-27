<script setup lang="ts">
import useMobileState from "../state/burgerMenu.ts";
import { watch } from 'vue';

const { isMobileMenuOpen, toggleMobileMenu } = useMobileState();

defineProps(['navigation'])

watch(isMobileMenuOpen, (newValue) => {
  document.body.style.overflow = newValue ? 'hidden' : '';
});

</script>

<template>
  <!-- Mobile menu -->
  <div
    :class="[
    'md:hidden fixed inset-0 z-40 bg-#0F172A/90 backdrop-blur-lg transition-transform duration-300 ease-in-out',
    isMobileMenuOpen
      ? 'translate-y-0 opacity-100 pointer-events-auto '
      : '-translate-y-full opacity-0 pointer-events-none'
  ]"
    role="dialog"
    :aria-hidden="!isMobileMenuOpen"
  >
    <div class="px-4 pt-6 pb-4 space-y-3">
      <!-- Navigation Links -->
      <router-link
        @click="toggleMobileMenu"
        v-for="item in navigation"
        :key="item.name"
        :to="item.href"
        class="block px-4 py-2 text-lg rounded-lg font-medium text-gray-200 hover:text-white hover:bg-green-600 focus:bg-green-700 focus:ring-2 focus:ring-green-500 transition-all"
      >
        {{ item.name }}
      </router-link>

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
</template>

<style>

body.overflow-hidden {
  overflow: hidden;
  position: fixed;
  width: 100%;
  height: 100%;
}

</style>
