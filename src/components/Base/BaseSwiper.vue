<script setup>
import { ref } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation } from "swiper/modules";
import Movie from "../Movie.vue";
import BaseIcon from "../Base/BaseIcon.vue";

import "swiper/css";
import "swiper/css/navigation";

const modules = [Navigation];

const props = defineProps({
  title: String,
  movies: Array,
  isNeedIcon: {
    type: Boolean,
    default: false,
  },
  iconName: {
    type: String,
    default: "",
  },
});

const nextBtn = ref(null);
const prevBtn = ref(null);
</script>

<template>
  <div class="movie-row relative">
    <h2 class="movie-row__title">
      <BaseIcon
        v-if="isNeedIcon"
        :name="props.iconName"
        width="24px"
        height="24px"
      />
      {{ title }}
    </h2>

    <div ref="nextBtn" class="custom-arrow custom-next">
      <BaseIcon name="arrow" rotate="-90" width="36px" height="36px" />
    </div>
    <div ref="prevBtn" class="custom-arrow custom-prev">
      <BaseIcon name="arrow" rotate="90" width="36px" height="36px" />
    </div>

    <Swiper
      :modules="modules"
      :slides-per-view="3"
      :navigation="{ nextEl: nextBtn, prevEl: prevBtn }"
      :breakpoints="{
        320: { slidesPerView: 2.5, spaceBetween: 5 },
        768: { slidesPerView: 3.5, spaceBetween: 10 },
        1024: { slidesPerView: 4.5, spaceBetween: 20 },
      }"
    >
      <SwiperSlide v-for="movie in movies" :key="movie.id">
        <Movie isSwiper :movie="movie" />
      </SwiperSlide>
    </Swiper>
  </div>
</template>

<style scoped>
.swiper {
  padding: 0 40px;
  margin: 0 -40px;
}
.swiper-slide {
  height: auto !important;
  overflow: hidden;
}
.movie-row {
  position: relative;
  margin-bottom: 40px;
}

.movie-row__title {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 10px;
  font-size: 1.5rem;
  font-weight: bold;
  color: aliceblue;
}

.custom-arrow {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 10;
  cursor: pointer;
  transition: color 0.3s ease, transform 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
}

.custom-next {
  right: -38px;
}

.custom-prev {
  left: -38px;
}

@media (max-width: 768px) {
  .swiper {
    padding: 0 20px;
    margin: 0 -20px;
  }
  .custom-arrow {
    display: none;
  }
}

@media (max-width: 480px) {
  .swiper {
    padding: 0 16px;
    margin: 0 -16px;
  }
}
</style>
