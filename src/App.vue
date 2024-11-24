<script setup lang="ts">

import Footer from './components/Footer.vue'
import TopBar from './components/Landing/TopBar.vue'
</script>

<template>
  <TopBar />
  <router-view></router-view>
  <Footer />
</template>
