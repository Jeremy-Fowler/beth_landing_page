<script setup>
function navigateToSection(sectionId) {
  document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' })
}
</script>


<template>
  <section class="row justify-content-center align-items-center author-section">
    <div class="col-12 col-md-6 order-2 order-md-1">
      <div class="author-details">
        <h1>Bethany Kelli Rae</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel repellat quaerat est, sunt possimus ex saepe
          cupiditate commodi harum recusandae qui id deserunt magni tempore perferendis ea! Vitae, minima qui.
        </p>
        <div>
          <button @click="navigateToSection('aboutMe')" class="btn btn-outline-light me-3" type="button">
            About Me
          </button>
          <button @click="navigateToSection('allBooks')" class="btn btn-outline-light" type="button"
            title="See all of my books">
            Books
          </button>
        </div>
      </div>
    </div>
    <div class="col-12 col-md-4 order-1 order-md-2">
      <div class="author-img">
        <img src="/public/images/author.jpg" alt="Woman sitting at desk writing">
      </div>
    </div>
  </section>
</template>


<style scoped>
section {
  background-color: var(--main-bg-color);
}

.author-details {
  color: white;
  padding: 3em;
}

.author-img {
  padding: 3em;
}

img {
  width: 100%;
  border-radius: 999em 999em 0 0;
  min-height: 40dvh;
  object-fit: cover;
  filter: grayscale();
}
</style>