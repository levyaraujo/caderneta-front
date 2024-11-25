<script setup lang="ts">
import { computed } from 'vue'

const currentYear = computed(() => {
  return new Date().getFullYear();
});

</script>

<template>
  <footer class="bg-gray-900 text-gray-300 py-8 mt-16">
    <div class="max-w-6xl mx-auto px-4">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">

        <div class="space-y-4">
          <div class="flex items-center space-x-2">
            <img src="/icon.svg" alt="icon" />
            <span class="text-white font-semibold text-xl">caderneta</span>
          </div>
          <p class="text-sm text-gray-400">
            Organize seu dinheiro de forma simples e rápida direto pelo WhatsApp.
          </p>
        </div>

        <!-- Links -->
        <div class="space-y-4">
          <h3 class="text-white font-semibold">Links Úteis</h3>
          <ul class="space-y-2">
            <li>
              <router-link
                to="/politica-de-privacidade"
                class="hover:text-emerald-400 transition-colors duration-200"
              >
                Política de Privacidade
              </router-link>
            </li>
<!--            <li>-->
<!--              <router-link-->
<!--                to="/termos"-->
<!--                class="hover:text-emerald-400 transition-colors duration-200"-->
<!--              >-->
<!--                Termos de Uso-->
<!--              </router-link>-->
<!--            </li>-->
            <li>
              <router-link
                to="#faq"
                class="hover:text-emerald-400 transition-colors duration-200"
              >
                FAQ
              </router-link>
            </li>
          </ul>
        </div>

        <!-- Contact -->
        <div class="space-y-4">
          <h3 class="text-white font-semibold">Contato</h3>
          <ul class="space-y-2">
            <li>
              <a
                href="mailto:contato@caderneta.com"
                class="hover:text-emerald-400 transition-colors duration-200"
              >
                contato@caderneta.com
              </a>
            </li>
            <li>
              <a
                href="https://wa.me/5594981362600"
                class="hover:text-emerald-400 transition-colors duration-200"
              >
                WhatsApp
              </a>
            </li>
          </ul>
        </div>
      </div>

      <!-- Copyright -->
      <div class="border-t border-gray-800 mt-8 pt-8 text-center text-sm">
        <p>© {{ currentYear }} Caderneta. Todos os direitos reservados.</p>
      </div>
    </div>
  </footer>
</template>