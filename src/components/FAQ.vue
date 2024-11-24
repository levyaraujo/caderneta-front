<script setup lang="ts">
import { ref } from 'vue'

const faqItems = ref([
  {
    question: 'Como funciona o período de teste grátis?',
    answer: 'Você tem acesso a todas as funcionalidades do Caderneta gratuitamente por 14 dias. Não é necessário cadastrar cartão de crédito e você pode cancelar a qualquer momento.',
    isOpen: false
  },
  {
    question: 'Preciso instalar algum aplicativo?',
    answer: 'Não! O Caderneta funciona diretamente pelo WhatsApp. Você só precisa adicionar nosso número de contato e começar a usar.',
    isOpen: false
  },
  {
    question: 'Como faço para registrar minhas despesas?',
    answer: 'Basta enviar uma mensagem pelo WhatsApp com o valor e a descrição da despesa. Nosso robô inteligente entende e categoriza automaticamente seus gastos.' +
      ' Ex.: Vendi 820 de roupas ou Paguei 1250 aluguel',
    isOpen: false
  },
  {
    question: 'Meus dados financeiros estão seguros?',
    answer: 'Sim! Utilizamos criptografia de ponta a ponta e não compartilhamos suas informações com terceiros. Sua privacidade é nossa prioridade.',
    isOpen: false
  },
  {
    question: 'Posso exportar meus dados?',
    answer: 'Sim! Você pode exportar seus dados em diversos formatos, incluindo PDF e planilhas. Além disso, você tem acesso a relatórios detalhados diretamente pelo WhatsApp.',
    isOpen: false
  },
  {
    question: 'Como funciona o pagamento?',
    answer: 'Após o período de teste, você pode assinar o Caderneta por R$14,99/mês. Aceitamos diversos métodos de pagamento e você pode cancelar sua assinatura quando quiser.',
    isOpen: false
  }
])

const toggleItem = (index: number) => {
  faqItems.value[index].isOpen = !faqItems.value[index].isOpen
}
</script>

<template>
  <section class="w-full bg-[#0F1729] py-24" id="faq">
    <div class="max-w-7xl mx-auto px-4">
      <!-- Heading -->
      <div class="text-center mb-16">
        <h2 class="text-4xl font-bold mb-4 bg-gradient-to-r from-emerald-400 to-green-500 bg-clip-text text-transparent">
          Perguntas Frequentes
        </h2>
        <p class="text-gray-500">
          Tire suas dúvidas sobre o Caderneta
        </p>
      </div>

      <!-- FAQ Items -->
      <div class="max-w-3xl mx-auto space-y-4 transition-all duration-300">
        <div
          v-for="(item, index) in faqItems"
          :key="index"
          class="bg-[#1A2337] rounded-lg overflow-hidden hover:bg-[#1E293F] transition-colors duration-300"
        >
          <button
            @click="toggleItem(index)"
            class="w-full flex justify-between items-center p-6 text-left"
          >
            <span class="text-white font-medium text-lg">{{ item.question }}</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              :class="['w-5 h-5 transform transition-transform duration-300', item.isOpen ? 'rotate-180' : '']"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              class="text-emerald-400"
            >
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
            </svg>
          </button>

          <Transition
            enter-active-class="transition-all duration-300 ease-out"
            leave-active-class="transition-all duration-300 ease-in"
            enter-from-class="opacity-0 transform -translate-y-4"
            enter-to-class="opacity-100 transform translate-y-0"
            leave-from-class="opacity-100 transform translate-y-0"
            leave-to-class="opacity-0 transform -translate-y-4"
          >
            <div
              v-show="item.isOpen"
              class="px-6 pb-6"
            >
              <p class="text-gray-400">{{ item.answer }}</p>
            </div>
          </Transition>
        </div>
      </div>

      <!-- Support Link -->
      <div class="text-center mt-12">
        <p class="text-gray-400">
          Ainda tem dúvidas?
          <a href="#" class="text-emerald-400 hover:text-emerald-300 ml-1 transition-colors duration-300">
            Entre em contato com nosso suporte
          </a>
        </p>
      </div>
    </div>
  </section>
</template>

<style scoped>
.transform {
  transform-origin: top;
}
</style>