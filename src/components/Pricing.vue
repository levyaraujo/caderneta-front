<script setup lang="ts">
import {ref} from 'vue'

const features = ref([
  'Teste grátis por 14 dias',
  'Sem necessidade de cartão de crédito',
  'Gráficos intuitivos',
  'Análise de saúde financeira',
  'Comandos via WhatsApp',
  'Suporte premium'
])
</script>

<template>
  <section class="w-full bg-[#0F1729] py-24">
    <div class="max-w-7xl mx-auto px-4">
      <!-- Heading -->
      <div class="text-center mb-16">
        <h2
          class="text-4xl font-bold mb-2 bg-gradient-to-r from-emerald-400 to-green-500 bg-clip-text text-transparent">
          Preços Simples e Transparentes
        </h2>
        <p class="text-gray-500 text-lg">
          Comece gratuitamente e pague apenas quando estiver pronto
        </p>
      </div>

      <!-- Pricing Card -->
      <div class="max-w-lg mx-auto bg-[#1A2337] rounded-2xl overflow-hidden shadow-xl">
        <div class="p-8">
          <!-- Price -->
          <div class="flex items-baseline justify-center">
            <span class="text-5xl font-bold text-white">R$14</span>
            <span class="text-2xl text-white">,99</span>
            <span class="text-gray-400 ml-2">/mês</span>
          </div>

          <!-- Features List -->
          <div class="mt-8 space-y-4">
            <div v-for="feature in features" :key="feature" class="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5 text-emerald-400 mr-3"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
              <span class="text-gray-300">{{ feature }}</span>
            </div>
          </div>

          <!-- CTA Button -->
          <button
            class="w-full mt-8 mb-2 bg-emerald-500 hover:bg-emerald-600 text-white font-semibold py-4 px-6 rounded-lg transition-colors"
          >
            <a href="https://wa.me/5594984033357?text=Ol%C3%A1,%20quero%20testar%20o%20Caderneta" target="_blank">Começar Teste Grátis</a>
          </button>

          <!-- Footer Text -->
          <p class="text-center text-gray-400 text-sm">
            Cancele a qualquer momento
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>

</style>
