<script setup lang="ts">
import { ref } from 'vue'

const name = ref('')
const email = ref('')
const message = ref('')
const nameError = ref('')
const emailError = ref('')
const messageError = ref('')

const submitForm = () => {
  nameError.value = ''
  emailError.value = ''
  messageError.value = ''

  let isValid = true

  if (!name.value) {
    nameError.value = 'Nome é obrigatório'
    isValid = false
  }

  if (!email.value || !isValidEmail(email.value)) {
    emailError.value = 'E-mail inválido'
    isValid = false
  }

  if (!message.value) {
    messageError.value = 'Mensagem é obrigatória'
    isValid = false
  }

  if (isValid) {
    console.log('Formulário enviado:', { name: name.value, email: email.value, message: message.value })
  }
}

const isValidEmail = (email: string) => {
  // Validação básica de email
  return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
}
</script>

<template>
  <div class="py-24 px-4 sm:px-6 lg:px-8">
    <div class="max-w-md m-auto">
      <h2 class="text-3xl font-bold text-white mb-2">Fale Conosco</h2>
      <p class="">Está com dúvidas ou quer fazer uma sugestão? Envie uma mensagem abaixo</p>
      <form @submit.prevent="submitForm" class="space-y-6 mt-8">
        <div>
          <label for="name" class="block text-sm font-medium text-gray-300">Nome</label>
          <input type="text" id="name" v-model="name" required class="bg-gray-800 border-gray-700 text-gray-300 rounded-md px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-green-500" />
          <div v-if="nameError" class="text-red-500 text-sm mt-1">{{ nameError }}</div>
        </div>
        <div>
          <label for="email" class="block text-sm font-medium text-gray-300">E-mail</label>
          <input type="email" id="email" v-model="email" required class="bg-gray-800 border-gray-700 text-gray-300 rounded-md px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-green-500" />
          <div v-if="emailError" class="text-red-500 text-sm mt-1">{{ emailError }}</div>
        </div>
        <div>
          <label for="message" class="block text-sm font-medium text-gray-300">Mensagem</label>
          <textarea id="message" v-model="message" required rows="4" class="resize-none bg-gray-800 border-gray-700 text-gray-300 rounded-md px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-green-500"></textarea>
          <div v-if="messageError" class="text-red-500 text-sm mt-1">{{ messageError }}</div>
        </div>
        <button type="submit" class="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-500 text-white font-medium rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2">
          Enviar
        </button>
      </form>
    </div>
  </div>
</template>
