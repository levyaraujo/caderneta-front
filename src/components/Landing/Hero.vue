<script setup lang="ts">
import { whatsappLink } from '../../utils.ts'

defineProps<{
  title?: string
}>()
</script>

<template>
  <section class="relative pt-32 pb-16 md:pt-40 md:pb-24 font-display">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <h1
        class="text-4xl md:text-6xl font-bold bg-gradient-to-r from-green-400 to-green-600 bg-clip-text text-transparent"
      >
        Gerencie suas finanças
        <br class="hidden md:block"/>
        via WhatsApp
      </h1>
      <p class="mt-6 text-lg md:text-md text-gray-600 max-w-3xl mx-auto">
        Organize seu dinheiro de forma simples e rápida direto pelo WhatsApp.
        Sem complicações, sem apps para instalar.
      </p>
      <div class="mt-10 flex justify-center gap-4">
        <button
          class="px-8 py-3 rounded-full bg-gradient-to-r from-green-500 to-green-600 text-white font-medium shadow-lg shadow-green-500/30 hover:shadow-green-500/50 transition-all duration-200 transform hover:-translate-y-0.5"
        >
          <a :href="whatsappLink" target="_blank">Começar Agora</a>
        </button>
        <button
          class="px-8 py-3 rounded-full border-2 border-green-500 text-green-600 font-medium transition-all duration-200"
        >
          <a href="#features">Ver Como Funciona</a>
        </button>
      </div>
    </div>
  </section>
</template>

<style scoped>
.font-display {
  font-family: 'Poppins', sans-serif;
}

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
</style>
