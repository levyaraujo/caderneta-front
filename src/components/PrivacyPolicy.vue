<script setup lang="ts">
import { ref } from 'vue'

interface Section {
  id: number
  title: string
  content: string | string[]
  type: 'text' | 'list'
}

const sections = ref<Section[]>([
  {
    id: 1,
    title: "Introdução",
    content: "Bem-vindo à Política de Privacidade do Caderneta. Este documento explica como coletamos, usamos, armazenamos e protegemos suas informações pessoais durante o uso do nosso serviço de gestão financeira via WhatsApp.",
    type: "text"
  },
  {
    id: 2,
    title: "Informações que Coletamos",
    content: [
      "Número de telefone associado ao WhatsApp",
      "Endereço de e-mail para comunicações e recuperação de conta",
      "Dados de lançamentos financeiros (receitas, despesas, categorias)",
      "Data e hora das transações",
      "Histórico de conversas relacionadas a lançamentos financeiros"
    ],
    type: "list"
  },
  {
    id: 3,
    title: "Como Usamos suas Informações",
    content: [
      "Fornecer o serviço de gestão financeira",
      "Processar e categorizar seus lançamentos financeiros",
      "Gerar relatórios e análises personalizadas",
      "Enviar notificações importantes sobre sua conta",
      "Melhorar nossos serviços e desenvolver novos recursos",
      "Proteger a segurança da sua conta"
    ],
    type: "list"
  },
  {
    id: 4,
    title: "Proteção de Dados",
    content: [
      "Criptografia de ponta a ponta para todas as comunicações via WhatsApp",
      "Criptografia de dados em repouso nos nossos servidores",
      "Acesso restrito aos dados por funcionários autorizados",
      "Monitoramento contínuo de segurança",
      "Backups regulares e seguros"
    ],
    type: "list"
  },
  {
    id: 5,
    title: "Compartilhamento de Dados",
    content: [
      "Não vendemos, alugamos ou compartilhamos suas informações pessoais com terceiros, exceto:",
      "Quando necessário para fornecer o serviço (ex: processamento de pagamentos)",
      "Quando exigido por lei ou ordem judicial",
      "Para proteger nossos direitos ou propriedade"
    ],
    type: "list"
  },
  {
    id: 6,
    title: "Seus Direitos",
    content: [
      "Acessar seus dados pessoais",
      "Corrigir informações incorretas",
      "Exportar seus dados",
      "Solicitar a exclusão de sua conta e dados",
      "Opt-out de comunicações de marketing"
    ],
    type: "list"
  },
  {
    id: 7,
    title: "Retenção de Dados",
    content: "Mantemos seus dados pelo tempo necessário para fornecer o serviço e cumprir obrigações legais. Após o cancelamento da sua conta, seus dados serão mantidos por 6 meses e depois excluídos permanentemente.",
    type: "text"
  },
  {
    id: 8,
    title: "Uso do WhatsApp",
    content: "O Caderneta utiliza a plataforma WhatsApp para comunicação. Ao usar nosso serviço, você também está sujeito à política de privacidade do WhatsApp. Recomendamos a leitura das políticas do WhatsApp para entender como eles processam suas informações.",
    type: "text"
  },
  {
    id: 9,
    title: "Alterações na Política",
    content: "Podemos atualizar esta política periodicamente. Notificaremos você sobre mudanças significativas via WhatsApp ou e-mail. O uso contínuo do serviço após as alterações constitui aceitação da nova política.",
    type: "text"
  },
  {
    id: 10,
    title: "Contato",
    content: [
      "E-mail: privacidade@caderneta.app",
      "WhatsApp: (XX) XXXXX-XXXX",
      "Formulário de contato: www.caderneta.app/contato"
    ],
    type: "list"
  }
])

const lastUpdate = ref("24 de Novembro de 2024")
</script>

<template>
  <section class="min-h-screen bg-gray-50">
    <div class="max-w-4xl mx-auto px-4 py-12 pt-20">
      <!-- Header -->
      <header class="text-center mb-12">
        <h1 class="text-4xl font-bold text-gray-900 mb-4">
          Política de Privacidade
        </h1>
        <p class="text-gray-600">
          Última atualização: {{ lastUpdate }}
        </p>
      </header>

      <!-- Content -->
      <div class="prose prose-lg mx-auto text-gray-700">
        <!-- Sections -->
        <div v-for="section in sections" :key="section.id" class="mb-8">
          <h2 class="text-2xl font-semibold text-gray-900 mb-4">
            {{ section.id }}. {{ section.title }}
          </h2>

          <!-- Text Content -->
          <p v-if="section.type === 'text'" class="mb-4">
            {{ section.content }}
          </p>

          <!-- List Content -->
          <template v-else-if="section.type === 'list'">
            <ul class="list-disc pl-6 mt-2 space-y-2">
              <li
                v-for="(item, index) in section.content"
                :key="index"
                class="text-gray-700"
              >
                {{ item }}
              </li>
            </ul>
          </template>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.prose {
  max-width: 100%;
}

.prose h2 {
  color: #1a202c;
  margin-top: 2rem;
  margin-bottom: 1rem;
}

.prose ul {
  margin-top: 0.5rem;
  margin-bottom: 1rem;
}

.prose li {
  margin-top: 0.25rem;
  margin-bottom: 0.25rem;
}

@media (max-width: 640px) {
  .prose {
    font-size: 1rem;
  }

  h1 {
    font-size: 2rem;
  }

  h2 {
    font-size: 1.5rem;
  }
}
</style>
