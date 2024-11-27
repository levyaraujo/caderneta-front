<script setup lang="ts">
import useMobileState from "../state/burgerMenu.ts";
import { watch, ref } from 'vue';

const { isMobileMenuOpen, toggleMobileMenu } = useMobileState();
const isClosing = ref(false);

defineProps(['navigation'])

watch(isMobileMenuOpen, (newValue) => {
  if (newValue) {
    // Reset closing state when opening
    isClosing.value = false;
    document.body.style.overflow = 'hidden';
  } else {
    // Add closing state when closing
    isClosing.value = true;

    // Remove overflow after animation completes
    setTimeout(() => {
      document.body.style.overflow = '';
      document.body.style.position = '';
    }, 300); // Match the transition duration
  }
});

// Method to handle menu close with animation
const handleClose = () => {
  toggleMobileMenu();
};
</script>

<template>
  <!-- Mobile menu -->
  <div
    :class="[
    'md:hidden fixed inset-0 backdrop-blur-lg transition-all duration-300 ease-in-out',
    isMobileMenuOpen
      ? 'translate-y-0 opacity-100 pointer-events-auto'
      : '-translate-y-full opacity-0 pointer-events-none',
    // Additional closing animation class
    isClosing ? 'animate-menu-close' : ''
  ]"
    role="dialog"
    :aria-hidden="!isMobileMenuOpen"
  >
    <div class="px-4 pt-6 pb-4 space-y-3">
      <!-- Navigation Links -->
      <router-link
        @click="handleClose"
        v-for="item in navigation"
        :key="item.name"
        :to="item.href"
        class="block px-4 py-2 text-lg rounded-lg font-medium text-gray-200 focus:bg-green-700 focus:ring-2 focus:ring-green-500 transition-all"
      >
        {{ item.name }}
      </router-link>

      <!-- Call to Action Button -->
      <div class="px-4 py-2">
        <button
          @click="handleClose"
          class="w-full py-2.5 rounded-full bg-gradient-to-r from-green-500 to-green-600 text-white font-medium shadow-lg shadow-green-500/30 hover:shadow-green-500/50 hover:scale-105 active:scale-100 transition-transform duration-200"
        >
          Teste Grátis
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Ensure the mobile menu takes up the full height when visible */
.md\:hidden {
  height: 100vh;  /* Full viewport height */
  background-color: rgba(15,23,42, 0.8);
}

/* Smooth transition for transform and opacity changes */
.transition-all {
  transition: transform 0.3s ease, opacity 0.3s ease;
}

/* Custom animation for menu closing */
@keyframes menuClose {
  0% {
    transform: translateY(0);
    opacity: 1;
  }
  100% {
    transform: translateY(-100%);
    opacity: 0;
  }
}

.animate-menu-close {
  animation: menuClose 0.3s ease-in-out forwards;
}
</style>
