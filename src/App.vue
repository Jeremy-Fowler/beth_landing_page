<script setup>
import { RouterView } from 'vue-router'
import NavigationBar from './components/NavigationBar.vue';

</script>

<template>
  <header>
    <NavigationBar />
  </header>

  <main>
    <RouterView />
  </main>

  <footer></footer>
</template>

<style scoped></style>
