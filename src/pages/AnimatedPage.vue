<script setup>
import { onMounted, ref, computed } from "vue";
import MovieList from "../components/MovieList.vue";
import { useTvGenresStore } from "../stores/TvGenresStore";
import { useMoviesGenresStore } from "../stores/MovieGenresStore";
import BaseButton from "../components/Base/BaseButton.vue";

const tvStore = useTvGenresStore();
const movieStore = useMoviesGenresStore();

const currentGenre = ref(null);

const allAnimations = ref([]);

onMounted(async () => {
  await tvStore.fetchTvByGenre(16);
  await movieStore.fetchMoviesByGenre(16);
  currentGenre.value = genres[0];
});

const combinedAnimations = computed(() => {
  return (allAnimations.value = [
    ...(tvStore.genresTv || []),
    ...(movieStore.genresMovies || []),
  ].sort((a, b) => {
    const dateA = new Date(a.first_air_date || a.release_date);
    const dateB = new Date(b.first_air_date || b.release_date);
    return dateB - dateA;
  }));
});

const genres = [
  { id: null, name: "All" },
  { id: 16, name: "series" },
  { id: 16, name: "cartoon" },
];

const choosingCartoonGenre = (genre, page = 1, isLoadMore = false) => {
  currentGenre.value = genre;

  if (genre.id === null) {
    tvStore.fetchTvByGenre(16, page, isLoadMore);
    movieStore.fetchMoviesByGenre(16, page, isLoadMore);
  } else if (genre.name === "series") {
    tvStore.fetchTvByGenre(genre.id, page, isLoadMore);
  } else if (genre.name === "cartoon") {
    movieStore.fetchMoviesByGenre(genre.id, page, isLoadMore);
  }
};

const cartoonToShow = computed(() => {
  if (!currentGenre.value || currentGenre.value.name === "All") {
    return combinedAnimations.value;
  } else if (currentGenre.value.name === "series") {
    return tvStore.genresTv || [];
  } else if (currentGenre.value.name === "cartoon") {
    return movieStore.genresMovies || [];
  }
});

const handlePageUpdate = (page) => {
  choosingCartoonGenre(currentGenre.value, page, true);
};
</script>

<template>
  <div>
    <div class="tabs-sm">
      <BaseButton
        v-for="genre in genres"
        @click="choosingCartoonGenre(genre)"
        :isActive="currentGenre?.name === genre.name"
        :key="genre.name"
        size="sm"
      >
        {{ genre.name }}</BaseButton
      >
    </div>

    <MovieList
      isNeedMorePage
      :movies="cartoonToShow"
      @update-page="handlePageUpdate"
      title="Movies"
    />
  </div>
</template>
