<script setup>
import { useMovieStore } from "../stores/MovieStore";

import MovieList from "../components/MovieList.vue";

const movieStore = useMovieStore();
</script>

<template>
  <div class="movies">
    <template v-if="movieStore.unWatchedMovies.length > 0">
      <h3>All Movies ({{ movieStore.totalCountMovies }})</h3>

      <MovieList page="favorite" :movies="movieStore.unWatchedMovies" />
    </template>

    <template v-if="movieStore.watchedMovies.length > 0">
      <h3>Watched Movies ({{ movieStore.watchedMovies.length }})</h3>

      <MovieList page="favorite" :movies="movieStore.watchedMovies" />
    </template>

    <div
      class="movies-empty"
      v-if="
        movieStore.unWatchedMovies.length == 0 &&
        movieStore.watchedMovies.length == 0
      "
    >
      <img src="../assets/images/color-movies-folder.png" alt="empty" />
      <div class="movies-empty__desc">
        <p class="movies-empty__desc-title">Favorite Movies is empty!</p>
        <p class="movies-empty__desc-text">
          Add favorite movies and they will appear here
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped lang="css">
.movies {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.movies-empty {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 20px;
  margin: 60px 16px;
}
.movies-empty__desc {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
  color: white;
}
.movies-empty__desc-title {
  font-size: 24px;
  font-weight: 600;
}
@media (max-width: 480px) {
  .movies-empty {
    flex-direction: column;
  }
}
</style>
