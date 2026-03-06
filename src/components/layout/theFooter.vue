<script setup>
import ImgVue from "../../assets/images/vue.png";
import ImgPinia from "../../assets/images/pinia.png";
import ImgVite from "../../assets/images/vite.png";

const footerImages = [
  {
    img: ImgVue,
    name: "Vue.js",
  },
  {
    img: ImgPinia,
    name: "Pinia",
  },
  {
    img: ImgVite,
    name: "Vite",
  },
];
</script>

<template>
  <footer class="footer">
    <p class="footer-text">This is a <strong>pet project</strong> made with:</p>

    <div class="footer-img">
      <template v-for="img in footerImages" :key="img">
        <img :src="img.img" :alt="img.name" width="80px" height="80px" />
      </template>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  position: relative;
  padding: 40px 20px;
  text-align: center;
  background-color: #2c3341;
  color: #fff;
  border-top: 4px solid #f7aa43;
  width: 100%;
  max-width: 1080px;
  margin: 0 auto;
  border-bottom-left-radius: 26px;
  border-bottom-right-radius: 26px;
}

.footer-text {
  margin-bottom: 10px;
}

.footer-img {
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 15px;
}
</style>
