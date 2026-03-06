<script setup>
import { useMovieStore } from "../stores/MovieStore";
import BaseButton from "./Base/BaseButton.vue";

const movieStore = useMovieStore();
</script>

<template>
  <div class="tabs">
    <router-link to="/" class="tab" active-class="active">
      <BaseButton :isActive="$route.path === '/'">Home</BaseButton></router-link
    >

    <router-link to="/movies" class="tab" active-class="active"
      ><BaseButton :isActive="$route.path === '/movies'"
        >Movies</BaseButton
      ></router-link
    >

    <router-link to="/tv" class="tab" active-class="active"
      ><BaseButton :isActive="$route.path === '/tv'"
        >Series</BaseButton
      ></router-link
    >

    <router-link to="/animated" class="tab" active-class="active"
      ><BaseButton :isActive="$route.path === '/animated'"
        >Cartoons</BaseButton
      ></router-link
    >
    <router-link to="/search" class="tab" active-class="active"
      ><BaseButton :isActive="$route.path === '/search'"
        >Search</BaseButton
      ></router-link
    >

    <router-link
      to="/favorite"
      class="tab"
      active-class="active"
      const
      movieStore="useMovieStore();"
      ><BaseButton
        :isActive="$route.path === '/favorite'"
        :count="movieStore.totalCountMovies"
        >Favorite</BaseButton
      ></router-link
    >
  </div>
</template>
