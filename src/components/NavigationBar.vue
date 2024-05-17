<script setup>
import { RouterLink } from 'vue-router';



</script>

<template>
  <nav class="navbar navbar-expand-lg bg-body-tertiary ps-3 py-4">
    <div class="container">
      <RouterLink :to="{ name: 'home' }" class="navbar-brand">
        Bethany Kelli Rae
      </RouterLink>
      <!-- <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <RouterLink :to="{ name: 'home' }" class="nav-link" :class="{ 'active': route.name == 'home' }">Home
            </RouterLink>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Books</a>
          </li>
          <li class="nav-item">
            <RouterLink :to="{ name: 'about' }" class="nav-link">
              About Me
            </RouterLink>
          </li>
        </ul>
      </div> -->
    </div>
  </nav>
</template>

<style scoped>
nav {
  border-bottom: 2px solid black;
}
</style>