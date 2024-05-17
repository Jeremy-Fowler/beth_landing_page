<script setup>
import { AppState } from '@/appstate.js';
import { computed } from 'vue';

const book = computed(() => AppState.activeBook)

</script>


<template>
  <section v-if="book" class="row align-items-center" id="activeBook">
    <div class="col-12 col-md-5 p-0">
      <img :src="book.imgFilePath" alt="Book on table" class="img-fluid hero-book-img">
    </div>
    <div class="col-12 col-md-7">
      <div class="book-details text-center">
        <img class="mb-4" :src="book.imgFilePath" :alt="book.altDescription">
        <h2 class="mb-3">{{ book.title }}</h2>
        <h3 v-if="book.subtitle" class="mb-3">{{ book.subtitle }}</h3>
        <p class="text-start">{{ book.description }}</p>
        <div class="d-flex justify-content-center gap-3">
          <a :href="book.amazonPurchaseLink" target="_blank"
            :title="`Go to Amazon.com to purchase a copy of ${book.title}`">
            <button class="btn btn-outline-dark" type="button">Amazon Store Page</button>
          </a>
          <a :href="book.amazonPreviewLink" target="_blank" :title="`Go to Amazon.com for a preview of ${book.title}`">
            <button class="btn btn-outline-dark" type="button">Free Preview</button>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>


<style scoped>
.hero-book-img {
  min-height: 100%;
  width: 100%;
  object-fit: cover;
  object-position: center;
}


.book-details {
  padding: 1em 3em;
}

.book-details>img {
  max-height: 30dvh;
  aspect-ratio: 1/1;
  object-fit: cover;
  border-radius: 50%;
  object-position: top;
}

@media (max-width: 767.98px) {
  .book-details {
    padding: 1em;
  }
}
</style>