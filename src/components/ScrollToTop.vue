<script setup>
import { ref, onMounted, onUnmounted } from "vue";

const showButton = ref(false);
const scrollThreshold = 800;

const checkScroll = () => {
  showButton.value = window.scrollY > scrollThreshold;
};

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

onMounted(() => {
  window.addEventListener("scroll", checkScroll);
});

onUnmounted(() => {
  window.removeEventListener("scroll", checkScroll);
});
</script>

<template>
  <button v-if="showButton" @click="scrollToTop" class="scroll-to-top">
    ⬆ Up
  </button>
</template>

<style scoped>
.scroll-to-top {
  position: fixed;
  bottom: 30px;
  right: 30px;
  padding: 10px 15px;
  font-size: 16px;
  border: none;
  border-radius: 5px;
  background-color: #f7aa43;
  color: white;
  cursor: pointer;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.3);
  transition: opacity 0.3s ease;
}
.scroll-to-top:hover {
  background-color: #e69a3b;
}
</style>
