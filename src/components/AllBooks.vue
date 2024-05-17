<script setup>
import { AppState } from '@/appstate.js';
import { computed } from 'vue'
import BookCard from './BookCard.vue';

const books = computed(() => AppState.books)

</script>


<template>
  <section class="row justify-content-center" id="allBooks">
    <div class="col-12">
      <h2 class="text-center my-4">My books</h2>
    </div>

    <div v-for="book in books" :key="book.title" class="col-6 col-md-3 mb-3">
      <BookCard :book="book" />
    </div>

  </section>
</template>


<style scoped>
section {
  background-color: var(--main-bg-color);
}

h2 {
  color: white;
}
</style>