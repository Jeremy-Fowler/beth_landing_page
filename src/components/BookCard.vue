<script setup>
import { Book } from '@/models/Book.js';
import { booksService } from '@/services/BooksService.js';

const props = defineProps({ book: Book })

function setActiveBook() {
  booksService.setActiveBook(props.book)
  document.getElementById('activeBook').scrollIntoView({ behavior: 'smooth' })
}

</script>


<template>
  <div @click="setActiveBook()" role="button" :title="`View details for ${book.title}`" class="book-border">
    <img :src="book.imgFilePath" :alt="book.altDescription" class="img-fluid mb-1">
    <h3 class="text-center mb-0">{{ book.title }}</h3>
  </div>
</template>


<style scoped>
h3 {
  font-size: 1.2em;
}

.book-border {
  padding: 1em;
  border: 4px solid black;
  background-color: white;
  color: black;
}
</style>