<script setup>
import { AppState } from '@/appstate.js';
import { computed } from 'vue';

const book = computed(() => AppState.activeBook)

</script>


<template>
  <section v-if="book" class="row align-items-center">
    <div class="col-12 my-3">
      <h1>Available Now</h1>
    </div>
    <div class="col-12 col-md-6 order-2 order-md-1 mb-3">
      <div class="card-border">
        <h2 class="mb-3">{{ book.title }}</h2>
        <p class="mb-3">{{ book.description }}</p>
        <div>
          <a :href="book.amazonPurchaseLink" target="_blank" rel="noopener noreferrer">
            <button class="btn btn-outline-dark me-3">
              Purchase
            </button>
          </a>
          <a :href="book.amazonPreviewLink" target="_blank" rel="noopener noreferrer">
            <button class="btn btn-outline-dark">
              Free Preview
            </button>
          </a>
        </div>
      </div>
    </div>
    <div class="col-12 col-md-6 order-1 order-md-2 mb-3">
      <div class="text-center">
        <img class="img-fluid" :src="book.imgFilePath" :alt="'Book cover for ' + book.title">
      </div>
    </div>
  </section>
</template>


<style scoped>
img {
  height: 75dvh;
  box-shadow: 0 7px 10px rgb(94, 94, 94);
}
</style>