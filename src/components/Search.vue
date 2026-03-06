<script setup>
import { ref, watch } from "vue";

import { useSearchStore } from "../stores/searchStore";
// import { useMovieStore } from "../stores/MovieStore";

const searchStore = useSearchStore();
// const movieStore = useMovieStore();
const searchMovie = ref("");
const moviesState = ref(false);

import BaseLoader from "./Base/BaseLoader.vue";
import BaseButton from "./Base/BaseButton.vue";
import MovieList from "./MovieList.vue";

const handleSearch = () => {
  searchStore.getMovies(searchMovie.value);
  moviesState.value = true;
};

watch(searchMovie, (val) => {
  if (searchStore.notFound) {
    searchStore.notFound = false;
  }
});
</script>

<template>
  <form class="search-form" @submit.prevent="handleSearch">
    <input
      type="text"
      class="search-input"
      placeholder="Write a movie to search"
      v-model="searchMovie"
    />

    <BaseButton :disabled="!searchMovie" theme="green"> Search </BaseButton>
  </form>

  <baseLoader v-if="searchStore.loader" />

  <div class="search-empty" v-if="!moviesState">
    <h3>Write a movie to search 🎬</h3>
  </div>

  <div class="search-empty" v-else-if="searchStore.notFound">
    <h3>Sorry, but no such films were found. 😢</h3>
  </div>

  <MovieList :movies="searchStore.movies" isSearch />
</template>

<style scoped>
.search-form {
  display: grid;
  grid-template-columns: 1fr auto;
  gap: 20px;
}
.search-input {
  border: 2px solid #e7e7e7;
  width: 100%;
  height: 40px;
  padding: 0 10px;
  margin-bottom: 20px;
  border-radius: 10px;
  color: white;
  outline: none;
}
.search-input:focus {
  border-color: #42b883;
}
.search-empty {
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 60px 16px;
}
h3 {
  text-align: center;
}
</style>
