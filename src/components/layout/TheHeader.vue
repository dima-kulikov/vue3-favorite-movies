<script setup>
import { onMounted, onUnmounted, ref } from "vue";

import { useMovieStore } from "../../stores/MovieStore";
import { useScreenSizes } from "../../utils/screenSizes";

import BaseButton from "../Base/BaseButton.vue";
const movieStore = useMovieStore();

const { screenWidth } = useScreenSizes();

import BaseIcon from "../Base/BaseIcon.vue";
</script>

<template>
  <header class="header">
    <div class="header_wrapper">
      <div class="header_logo">
        <img src="/logo.svg" alt="logo" class="header_logo-img" />

        <h2>{{ screenWidth.isMoreThan768 ? "My Favorite Movies" : "MS" }}</h2>
      </div>

      <div class="header_actions">
        <router-link to="/search" class="header_search">
          <BaseIcon name="search" width="25px" height="25px" />
        </router-link>
        <router-link to="/favorite">
          <div class="header_favorite">
            <BaseIcon
              name="heart"
              width="25px"
              height="25px"
              :colorClass="movieStore.totalCountMovies ? '--red' : ''"
            />
            <div
              class="header_favorite_count"
              v-if="movieStore.totalCountMovies"
            >
              {{ movieStore.totalCountMovies }}
            </div>
          </div>
        </router-link>

        <div class="header-reg-log">
          <BaseButton size="sm" theme="yellow" :disabled="true"
            >Sign In</BaseButton
          >
          <BaseButton size="sm" theme="yellow" :disabled="true"
            >Sign Up</BaseButton
          >
        </div>
      </div>
    </div>
  </header>
</template>

<style>
.header {
  position: fixed;
  left: 0;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px 20px;
  background: #3f4a63;
  width: 100%;
  z-index: 100;
  color: #4ab8a1;
  border-bottom: 4px solid #f7aa43;
}
.header_wrapper {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1280px;
}
.header_logo {
  display: flex;
  align-items: center;
}
.header_logo-img {
  max-width: 30px;
  margin-right: 10px;
}
.header_favorite,
.header_search {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}
.header_favorite_count {
  position: absolute;
  right: -5px;
  top: -5px;
  width: 15px;
  height: 15px;
  border-radius: 50%;
  background-color: #f7aa43;
  color: #ffffff;
  font-size: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.header_actions {
  display: flex;
  align-items: center;
  gap: 10px;
}
.header-reg-log {
  display: flex;
  gap: 10px;
}
</style>
