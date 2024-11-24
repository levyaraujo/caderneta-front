<script setup lang="ts">
import {ChartLine, Heart, Terminal, LayoutDashboard} from 'lucide-vue-next'

const features = [
  {
    icon: ChartLine,
    title: 'Gráficos Intuitivos',
    description: 'Visualize seus dados financeiros de forma clara e objetiva com nossos gráficos interativos e fáceis de entender.'
  },
  {
    icon: Heart,
    title: 'Análise de Saúde Financeira',
    description: 'Acompanhe sua saúde financeira com indicadores personalizados e recomendações para melhorar sua gestão.'
  },
  {
    icon: Terminal,
    title: 'Diversos Comandos',
    description: 'Utilize comandos simples para registrar transações, consultar saldos e gerar relatórios rapidamente.'
  },
  {
    icon: LayoutDashboard,
    title: 'Dashboard (Em Breve)',
    description: 'Tenha uma visão completa das suas finanças em um único lugar com nosso dashboard personalizado.'
  }
]
</script>

<template>
  <div class="w-full h-auto rounded md:w-10/12 mx-auto">
    <img src="../assets/hero.png" alt="Celular com WhatsApp Caderneta" class="w-full h-auto rounded">
  </div>

  <section class="py-16 bg-[#151922] border-dashed border-4 border-gray-700 border-opacity-20 p-1" id="funcionalidades">
    <div class="max-w-7xl mx-auto px-4">
      <h2 class="text-5xl font-bold text-center bg-gradient-to-r from-green-400 to-green-600 bg-clip-text text-transparent">
        Funcionalidades Principais
      </h2>
      <p class="text-gray-600 text-center mb-14 mt-2">Tenha acesso a diversos recursos, gráficos e mais!</p>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div v-for="feature in features" :key="feature.title"
             class="feature-card relative bg-[#1E2530] p-8 rounded-xl border border-gray-700 group">
          <div class="absolute inset-0 rounded-xl transition-opacity opacity-0 group-hover:opacity-100"></div>
          <div class="relative z-10">
            <div class="flex justify-center mb-6">
              <component :is="feature.icon"
                         class="w-12 h-12 text-white group-hover:text-[#4CAF50] transition-colors"/>
            </div>
            <h3 class="text-xl font-semibold text-white text-center mb-4">
              {{ feature.title }}
            </h3>
            <p class="text-gray-400 text-center leading-relaxed">
              {{ feature.description }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
:root {
  --bg-dark: #151922;
  --bg-darker: #1E2530;
  --text-success: #4CAF50;
  --card-border-radius: 0.75rem;
  --card-padding: 1px;
  --card-gradient-start: 135deg;
  --card-gradient-color: rgba(76, 175, 80, 0.2);
  --card-transition-duration: 0.3s;
}

.feature-card {
  transition: transform 0.3s ease, border-color 0.3s ease;
}

.feature-card:hover {
  transform: translateY(-2px);
  border-color: rgba(76, 175, 80, 0.5);
}

.feature-card::before {
  content: '';
  position: absolute;
  top: -1px;
  left: -1px;
  right: -1px;
  bottom: -1px;
  border-radius: var(--card-border-radius);
  padding: var(--card-padding);

  mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  -webkit-mask-composite: xor;
  mask-composite: exclude;

  opacity: 0;
  transition: opacity var(--card-transition-duration) ease;
}

.feature-card:hover::before {
  opacity: 1;
}
</style>
