<template>
  <div class="w-full rounded-xl overflow-hidden ring-1 ring-gray-200 mb-8">
    <img :src="projectDetail.imageUrl" :alt="projectDetail.title" class="w-full" />
    <div id="projectDetail" class="p-4 flex">
      <div class="w-5/6">
        <h4 class="text-2xl text-gray-300 mb-2">{{ projectDetail.title }}</h4>
        <span class="inline-flex items-center rounded-md bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10">{{ projectDetail.category }}</span>
      </div>
      <div class="w-1/6 flex justify-end items-center">
        <a :href="projectDetail.url" class="inline-flex items-center justify-center p-2 rounded-full text-accent4 hover:text-accent3">
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-arrow-up-right-circle" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0M5.854 10.803a.5.5 0 1 1-.708-.707L9.243 6H6.475a.5.5 0 1 1 0-1h3.975a.5.5 0 0 1 .5.5v3.975a.5.5 0 1 1-1 0V6.707z" />
          </svg>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    projectDetail: {
      type: Object,
      required: true,
    },
  },
};
</script>
