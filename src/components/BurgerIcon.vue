<script setup lang="ts">
import useMobileState from '../state/burgerMenu.ts';

const { isMobileMenuOpen, toggleMobileMenu } = useMobileState();
</script>

<template>
  <div class="md:hidden z-50">
    <button
      @click="toggleMobileMenu"
      class="inline-flex items-center justify-center p-2 rounded-md text-gray-700 focus:outline-none"
    >
      <svg
        v-if="!isMobileMenuOpen"
        class="h-6 w-6"
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
        v-else
        class="h-6 w-6"
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
</template>

<style scoped></style>
