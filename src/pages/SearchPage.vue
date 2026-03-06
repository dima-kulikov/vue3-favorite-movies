<script setup>
import { useMovieStore } from "../stores/MovieStore";

import Search from "../components/Search.vue";

const movieStore = useMovieStore();
</script>

<template>
  <div class="search">
    <h3>Search</h3>

    <Search />
  </div>
</template>

<style scoped lang="css">
h3 {
  margin-bottom: 20px;
}
</style>
