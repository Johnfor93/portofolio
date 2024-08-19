<template>
  <div>
    <div class="bg-hero-section h-screen flex justify-center items-center">
      <h1 class="text-6xl sm:text-8xl bebas-neue-regular text-gray-300 tracking-wider">JohnforJC</h1>
    </div>
    <Contact></Contact>
  </div>
</template>

<style>
.bg-hero-section {
  background: url("/img/background.png");
  background-size: cover;
  background-position: center center;
}
</style>

<script>
import Contact from "~/components/contact.vue";

export default {
  components: {
    Contact,
  },
};
</script>
