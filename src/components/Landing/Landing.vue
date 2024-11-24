<script setup lang="ts">

import FAQ from './FAQ.vue'
import Hero from './Hero.vue'
import Pricing from './Pricing.vue'
import TopBar from './TopBar.vue'
import Examples from './Features.vue'
</script>

<template>
  <TopBar/>
  <Hero />
  <Examples />
  <Pricing />
  <FAQ id="faq"/>
  <router-view />
</template>

<style scoped>

</style>