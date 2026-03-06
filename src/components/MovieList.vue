<script setup>
import { ref } from "vue";
import { useMovieStore } from "../stores/MovieStore";
import BaseButton from "./Base/BaseButton.vue";

const emit = defineEmits(["update-page"]);
const movieStore = useMovieStore();
const pageNumber = ref(1);

const loadNextPage = () => {
  pageNumber.value += 1;
  emit("update-page", pageNumber.value);
};

import Movie from "./Movie.vue";

const props = defineProps({
  title: {
    type: String,
    required: false,
    default: "",
  },
  movies: {
    type: Object,
    required: true,
  },
  isSearch: {
    type: Boolean,
    required: false,
    default: false,
  },
  page: {
    type: String,
    default: "default",
  },
  isNeedMorePage: {
    type: Boolean,
    default: false,
  },
});
</script>

<template>
  <h3 v-if="title">{{ title }}</h3>
  <div class="movies_wrapper">
    <Movie
      v-for="movie in movies"
      :key="movie.id"
      :movie="movie"
      :isFavorite="movieStore.inFavorite(movie.id)"
      :page="props.page"
    />
  </div>
  <BaseButton
    class="movies_btn"
    theme="yellow"
    v-if="props.isNeedMorePage"
    @click="loadNextPage"
    >show more</BaseButton
  >
</template>

<style scoped lang="css">
.movies_wrapper {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
  gap: 16px;
}
.movies_btn {
  display: block;
  margin: 20px auto 0;
}
h3 {
  margin-bottom: 20px;
}

@media (max-width: 768px) {
  .movies_wrapper {
    gap: 10px;
    grid-template-columns: repeat(auto-fill, minmax(133px, 1fr));
  }
}
</style>
