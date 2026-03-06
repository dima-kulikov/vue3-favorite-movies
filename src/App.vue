<script setup>
import BaseBackground from "./components/Base/BaseBackground.vue";
import SectionNav from "./components/SectionNav.vue";
import TheHeader from "./components/layout/TheHeader.vue";
import TheFooter from "./components/layout/TheFooter.vue";
import ImgDecor from "./assets/images/penguins-of-Madagascar.png";
import ScrollToTop from "./components/ScrollToTop.vue";
</script>

<template>
  <div class="wrapper">
    <BaseBackground />

    <TheHeader />

    <main>
      <div class="decor">
        <img :src="ImgDecor" alt="decor" class="decor-img" />
      </div>

      <div class="main-header">
        <img src="/logo.svg" alt="logo" class="main-header_logo" />
        <h2>My Favorite Movies</h2>
      </div>

      <SectionNav />
      <router-view />
    </main>
    <TheFooter />
    <ScrollToTop />
  </div>
</template>

<style lang="css">
.wrapper {
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 150px 60px 40px;
  background-color: #faebd7;
  min-height: 100vh;
}

.decor {
  position: absolute;
  top: -70px;
  right: 0;
  width: 320px;
  height: 86px;
  overflow: hidden;
  z-index: 10;
}
.decor img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 1;
}

.decor-img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 0.3;
}

main {
  position: relative;
  display: flex;
  flex: 1;
  flex-direction: column;
  max-width: 1080px;
  width: 100%;
  margin: 0 auto;
  padding: 70px 40px 40px;
  background-color: #3f4a63;
  border-top-left-radius: 26px;
  border-top-right-radius: 26px;
}

.main-header {
  position: absolute;
  left: 0;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  background: #f7aa43;
  width: 100%;
  border-top-left-radius: 26px;
  border-top-right-radius: 26px;
  max-width: 1080px;
  margin: 0 auto;
}
.main-header_logo {
  max-width: 30px;
  margin-right: 10px;
}

@media (max-width: 768px) {
  main {
    padding: 70px 20px 20px;
  }
  .wrapper {
    padding: 140px 40px 0;
  }
  .decor {
    width: 300px;
    height: 80px;
    top: -66px;
  }
}

@media (max-width: 480px) {
  main {
    padding: 70px 16px 20px;
  }
  .wrapper {
    padding: 140px 12px 0;
  }
}
</style>
