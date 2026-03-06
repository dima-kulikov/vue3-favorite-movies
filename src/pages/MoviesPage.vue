<script setup>
import { onMounted, ref, computed } from "vue";
import MovieList from "../components/MovieList.vue";
import { useMoviesGenresStore } from "../stores/MovieGenresStore";
import BaseButton from "../components/Base/BaseButton.vue";

const moviesStore = useMoviesGenresStore();

const currentGenre = ref(null);

onMounted(async () => {
  await moviesStore.fetchAllMovies();
  currentGenre.value = genres[0];
});

const genres = [
  { id: null, name: "All" },
  { id: 28, name: "Action" },
  { id: 35, name: "Comedy" },
  { id: 10751, name: "Family" },
  { id: 14, name: "Fantasy" },
  { id: 53, name: "Thriller" },
  { id: 37, name: "Western" },
  { id: 16, name: "Animation" },
];

const choosingFilmGenre = (genre, page, isLoadMore = false) => {
  currentGenre.value = genre;

  if (genre.id === null) {
    moviesStore.fetchAllMovies(page, isLoadMore);
  } else {
    moviesStore.fetchMoviesByGenre(genre.id, page, isLoadMore);
  }
};

const moviesToShow = computed(() => {
  return currentGenre.value?.id === null
    ? moviesStore.allMovies
    : moviesStore.genresMovies;
});

const handlePageUpdate = (page) => {
  choosingFilmGenre(currentGenre.value, page, true);
};
</script>

<template>
  <div>
    <div class="tabs-sm">
      <BaseButton
        v-for="genre in genres"
        @click="choosingFilmGenre(genre)"
        :isActive="currentGenre?.id === genre.id"
        :key="genre.id"
        size="sm"
      >
        {{ genre.name }}</BaseButton
      >
    </div>

    <MovieList
      isNeedMorePage
      :movies="moviesToShow"
      title="Movies"
      @update-page="handlePageUpdate"
    />
  </div>
</template>
