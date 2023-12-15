<script setup>
import { AppState } from '@/appstate.js';
import { computed, onMounted } from 'vue';
import { booksService } from '../services/BooksService.js'
import ActiveBook from '@/components/ActiveBook.vue';

function setFirstBookAsActive() {
  booksService.setActiveBook(books.value[0])
}

const books = computed(() => AppState.books)

onMounted(setFirstBookAsActive)

</script>

<template>
  <div class="container">
    <ActiveBook />
    <section class="row">
      <div v-for="book in books" :key="book.title" class="col-12 col-md-4">
        <img class="img-fluid" :src="book.imgFilePath" alt="">
      </div>
    </section>
  </div>
</template>


<style scoped></style>