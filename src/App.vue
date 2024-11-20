<script setup>
import { RouterView } from 'vue-router';
import Navbar from './components/navbars/Navbar.vue';
</script>

<template>
  <main class="main-content">
    <RouterView />
    <Navbar></Navbar>
  </main>
</template>

<style scoped>
.main-content {
  padding: 5px;
}
</style>
