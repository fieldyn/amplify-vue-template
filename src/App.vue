<script setup lang="ts">
import Todos from './components/Todos.vue'
</script>

<template>
  <main class="app-shell">
    <Todos />
  </main>
</template>

<style scoped>
.app-shell {
  min-height: 100vh;
  padding: clamp(1rem, 3vw, 2rem);
}
</style>
