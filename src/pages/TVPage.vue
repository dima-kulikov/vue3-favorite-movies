<script setup>
import { onMounted, ref, computed } from "vue";
import MovieList from "../components/MovieList.vue";
import { useTvGenresStore } from "../stores/TvGenresStore";
import BaseButton from "../components/Base/BaseButton.vue";

const tvStore = useTvGenresStore();

const currentGenre = ref(null);

onMounted(async () => {
  await tvStore.fetchAllTv();
  currentGenre.value = genres[0];
});

const genres = [
  { id: null, name: "All" },
  { id: 18, name: "Drama" },
  { id: 9648, name: "Mystery" },
  { id: 10765, name: " Fantasy" },
  { id: 80, name: "Crime" },
  { id: 16, name: "Animation" },
];

const choosingFilmGenre = (genre, page, isLoadMore = false) => {
  currentGenre.value = genre;

  if (genre.id === null) {
    tvStore.fetchAllTv(page, isLoadMore);
  } else {
    tvStore.fetchTvByGenre(genre.id, page, isLoadMore);
  }
};

const tvToShow = computed(() => {
  return currentGenre.value?.id === null ? tvStore.allTv : tvStore.genresTv;
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
      :movies="tvToShow"
      @update-page="handlePageUpdate"
      title="Movies"
    />
  </div>
</template>
