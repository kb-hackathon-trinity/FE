<script setup>
import { RouterView } from 'vue-router';
import NavTop from './components/navbars/NavTop.vue';
import Navbar from './components/navbars/Navbar.vue';
</script>

<template>
  <main class="main-content">
    <NavTop />
    <RouterView />
    <Navbar />
  </main>
</template>

<style scoped>
.main-content {
  padding: 40px 5px 80px 5px;
  min-height: 100vh;
}
.container-fluid {
  padding-bottom: 20px;
}

</style>
