<template>
  <div class="dark:bg-black">
    <div class="container mx-auto">
      <div class="bg-hero-section h-screen flex justify-center items-center">
        <div class="w-100">
          <h1 class="text-6xl sm:text-9xl text-gray-300 tracking-wider text-center font-header">JohnforJC</h1>
          <div class="text-xl sm:text-3xl text-gray-300 text-center font-content">WEB DEVELOPER | WEB DESIGNER</div>
        </div>
      </div>
      <About></About>
      <section id="project">
        <div class="flex p-16 gap-6">
          <div class="w-full sm:w-1/2">
            <h3 class="text-4xl sm:text-6xl text-gray-300 font-header">Here is my Journey</h3>
            <p class="text-gray-300 font-content mb-6">Here my story and journey on website developement and design</p>
            <div id="portofolio-list1">
              <PortofolioCard v-for="item in dataPortofolio" :key="item.title" :projectDetail="item"></PortofolioCard>
            </div>
          </div>
          <div class="w-full sm:w-1/2">
            <div id="portofolio-list1">
              <PortofolioCard v-for="item in dataPortofolio2" :key="item.title" :projectDetail="item"></PortofolioCard>
            </div>
            <p class="text-gray-300 font-content mb-2">Want to see more project has been done?</p>
            <a href="/work">
              <button type="button" class="focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:focus:ring-yellow-900">See More</button>
            </a>
          </div>
        </div>
      </section>
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
import PortofolioCard from "~/components/portofolio-card.vue";

export default {
  components: {
    Contact,
    About,
    PortofolioCard,
  },
  data() {
    return {
      dataPortofolio: [
        {
          title: "Project 1",
          category: "Web Developement",
          imageUrl: "https://img.freepik.com/free-photo/top-view-career-guidance-items-designers_23-2149443522.jpg?t=st=1724245714~exp=1724249314~hmac=c6bfeb5eb0b5686d3959a984f64addbe689ff84f82bb4ad870118433fe4daeb4&w=360",
        },
        {
          title: "Project 2",
          category: "Web Developement",
          imageUrl: "https://img.freepik.com/free-vector/blog-main-page-template_53876-88262.jpg?t=st=1724247020~exp=1724250620~hmac=88589c4a96f94798132ed79dc8f959a3bec193f794439f7e225f570b7a1a449a&w=360",
        },
      ],
      dataPortofolio2: [
        {
          title: "Project 3",
          category: "Web Developement",
          imageUrl: "https://img.freepik.com/free-photo/homemade-recipe-food-nutrition-appetite_53876-133764.jpg?t=st=1724247104~exp=1724250704~hmac=911e9cd5235f38966f12534b399e4cf31409e414923e9daad463a7c132a7367f&w=360",
        },
        {
          title: "Project 4",
          category: "Web Developement",
          imageUrl: "https://img.freepik.com/premium-psd/social-media-device-mockup-design_23-2151237815.jpg?w=740",
        },
      ],
    };
  },
};
</script>
