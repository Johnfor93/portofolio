<template>
  <div class="dark:bg-black">
    <div class="container mx-auto">
      <div class="bg-hero-section h-screen flex justify-center items-center">
        <div class="w-100">
          <h1
            class="text-6xl sm:text-9xl text-gray-300 tracking-wider text-center font-header">
            JohnforJC
          </h1>
          <div
            class="text-xl sm:text-3xl text-gray-300 text-center font-content">
            WEB DEVELOPER | WEB DESIGNER
          </div>
        </div>
      </div>
      <About></About>
      <Contact></Contact>
    </div>
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
  import About from "~/components/about.vue";

  export default {
    components: {
      Contact,
      About,
    },
  };
</script>
