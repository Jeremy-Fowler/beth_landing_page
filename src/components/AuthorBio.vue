<script setup>
import { AppState } from '@/appstate.js';

const socialMedias = AppState.socialMedias

</script>


<template>
  <section class="row align-items-center" id="aboutMe">
    <div class="col-12 col-md-6">
      <div class="p-3 p-md-5">
        <h2>About Me</h2>
        <p>
          Bethany Kelli Rae is a reading, writing, sunshine, and coffee enthusiast, who escapes to the mountains as
          frequently as possible to reboot her creative energies. She has three short stories out, and only recently
          found
          the courage to pursue her dream of publishing a full length novel. Her writing is loosely based on real life
          people, and a lot based on dreams and imagined adventures. She started writing creatively at the age of
          twelve,
          and with some well placed parental encouragement, she has been pouring words onto paper ever since.
        </p>
        <div class="d-flex gap-1 align-items-center">
          <h3 class="mb-0">Social Media:</h3>
          <nav class="mb-0">
            <ul class="d-flex gap-2 mb-0">
              <a v-for="social in socialMedias" :key="social.url" :href="social.url" target="_blank"
                :title="`Follow Bethany on ${social.name}!`">
                <li class="mdi fs-2" :class="social.icon"></li>
              </a>
            </ul>
          </nav>
        </div>
      </div>
    </div>
    <div class="col-12 col-md-6 p-3 p-md-5">
      <img src="/public/images/about_author.jpg" alt="Woman standing in forest" class="img-fluid">
    </div>
  </section>
</template>


<style scoped>
ul,
li {
  list-style: none;
}



img {
  height: 100%;
  width: 100%;
  object-fit: cover;
}
</style>