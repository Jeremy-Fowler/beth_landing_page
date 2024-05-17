<script setup>
import { AppState } from '@/appstate.js';
import { onBeforeMount } from 'vue';
import { booksService } from '../services/BooksService.js'
import AuthorIntro from '@/components/AuthorIntro.vue';
import ActiveBook from '@/components/ActiveBook.vue';
import AllBooks from '@/components/AllBooks.vue';
import AuthorBio from '@/components/AuthorBio.vue';

function setFirstBookAsActive() {
  booksService.setActiveBook(AppState.books[0])
}


onBeforeMount(setFirstBookAsActive)

</script>

<template>
  <div class="container-fluid">

    <AuthorIntro />

    <ActiveBook />

    <AllBooks />

    <AuthorBio />

  </div>
</template>


<style scoped></style>