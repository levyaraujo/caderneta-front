<script setup lang="ts">
import { ref } from 'vue'
import { whatsappLink } from '../utils.ts'

interface Feature {
  title: string
  description: string
}

const features = ref<Feature[]>([
  {
    title: 'Teste grátis por 14 dias',
    description: 'Acesso completo a todas as funcionalidades'
  },
  {
    title: 'Sem necessidade de cartão de crédito',
    description: 'Comece agora mesmo sem compromisso'
  },
  {
    title: 'Gráficos intuitivos',
    description: 'Visualize seus dados de forma clara'
  },
  {
    title: 'Análise de saúde financeira',
    description: 'Relatórios detalhados do seu progresso'
  },
  {
    title: 'Comandos via WhatsApp',
    description: 'Gerencie suas finanças pelo WhatsApp'
  }
])
</script>

<template>
  <section class="w-full bg-[#0F1729] py-24" id="pricing">
    <div class="max-w-7xl mx-auto px-4">
      <!-- Heading -->
      <div class="text-center mb-16">
        <h2
          class="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-emerald-400 to-green-500 bg-clip-text text-transparent">
          Menos de R$0,50 por dia
        </h2>
        <p class="text-gray-500">
          Teste todas as funcionalidades gratuitamente por 14 dias, sem compromisso
        </p>
      </div>

      <!-- Pricing Card -->
      <div
        class="max-w-lg mx-auto bg-[#1A2337] rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-300">
        <div class="p-8">
          <!-- Price -->
          <div class="flex items-baseline justify-center">
            <span class="text-5xl md:text-6xl font-bold text-white">R$14</span>
            <span class="text-2xl md:text-3xl text-white">,99</span>
            <span class="text-gray-400 ml-2 text-lg">/mês</span>
          </div>

          <!-- Features List -->
          <div class="mt-8 space-y-4">
            <div
              v-for="feature in features"
              :key="feature.title"
              class="flex items-start p-3 rounded-lg hover:bg-[#232B3D] transition-colors duration-200"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5 text-emerald-400 mr-3 flex-shrink-0 mt-1"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
              <div>
                <h3 class="text-gray-200">{{ feature.title }}</h3>
                <p class="text-gray-400 text-sm mt-1">{{ feature.description }}</p>
              </div>
            </div>
          </div>

          <!-- CTA Button -->
          <a
            :href="whatsappLink"
            target="_blank"
            class="block w-full mt-8 bg-emerald-500 hover:bg-emerald-600 text-white text-center font-semibold py-4 px-6 rounded-lg transition-colors duration-200"
          >
            Começar Teste Grátis
          </a>

          <!-- Footer Text -->
          <p class="text-center text-gray-400 text-sm mt-4">
            Cancele a qualquer momento
          </p>
        </div>
      </div>
    </div>
  </section>
</template>