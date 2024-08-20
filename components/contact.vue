<template>
  <div class="flex flex-wrap py-16 justify-center items-center px-4">
    <div id="contact-illustration" class="md:w-1/2 p-16 hidden md:block">
      <LottieAnimation
        :animation-data="ContactAnimation"
        :auto-play="true"
        :loop="true"
        :speed="1"
        ref="anim" />
    </div>
    <section class="dark:bg-primary rounded-xl md:p-16 p-8 w-full md:w-1/2">
      <div class="mx-auto">
        <div id="contact-illustration" class="w-full md:w-1/2 mb-8 md:hidden">
          <LottieAnimation
            :animation-data="ContactAnimation"
            :auto-play="true"
            :loop="true"
            :speed="1"
            ref="anim" />
        </div>
        <h2
          class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
          Tell Me About Your Project
        </h2>
        <p class="mb-8 font-light text-gray-500 dark:text-accent4 sm:text-xl">
          Let's create a solution for your problem. Feel free to discuss with
          me.
        </p>
        <form action="#" class="space-y-8">
          <div>
            <label
              for="email"
              class="block mb-2 text-md font-medium text-gray-900 dark:text-accent4"
              >Your email</label
            >
            <input
              type="email"
              id="email"
              class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-md rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary dark:focus:border-primary dark:shadow-sm-light"
              placeholder="name@flowbite.com"
              required />
          </div>
          <div>
            <label
              for="subject"
              class="block mb-2 text-md font-medium text-gray-900 dark:text-accent4"
              >Subject</label
            >
            <input
              type="text"
              id="subject"
              class="block p-3 w-full text-md text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary focus:border-primary dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary dark:focus:border-primary dark:shadow-sm-light"
              placeholder="Let us know how we can help you"
              required />
          </div>
          <div class="sm:col-span-2">
            <label
              for="message"
              class="block mb-2 text-md font-medium text-gray-900 dark:text-accent4"
              >Your message</label
            >
            <textarea
              id="message"
              rows="6"
              class="block p-2.5 w-full text-md text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary focus:border-primary dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary dark:focus:border-primary"
              placeholder="Leave a comment..."></textarea>
          </div>
          <div
            class="py-3 px-5 text-md font-medium text-center text-white rounded-lg bg-accent3 sm:w-fit hover:bg-accent3 focus:ring-4 focus:outline-none focus:ring-accent3 dark:bg-accent3 dark:hover:bg-accent3 dark:focus:ring-accent3 w-full">
            Send message
          </div>
        </form>
      </div>
    </section>
  </div>
</template>

<script>
  import ContactAnimation from "assets/lottie/contact.json";
  import { LottieAnimation } from "lottie-web-vue";

  export default {
    data() {
      return {
        ContactAnimation,
      };
    },
    components: {
      LottieAnimation,
    },
  };
</script>
