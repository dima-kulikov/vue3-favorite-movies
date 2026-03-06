<script setup>
import { useMovieStore } from "../stores/MovieStore";

import BaseButton from "./Base/BaseButton.vue";

import ImgEmptyMovie from "../assets/images/coming-soon.jpg";

const movieStore = useMovieStore();

const props = defineProps({
  movie: {
    type: Object,
    required: true,
  },
  isSearch: {
    type: Boolean,
    required: false,
    default: false,
  },
  isFavorite: {
    type: Boolean,
    required: false,
    default: false,
  },
  isSwiper: {
    type: Boolean,
    required: false,
    default: false,
  },

  page: {
    type: String,
    default: "default",
    validator: (value) => ["default", "favorite"].includes(value),
  },
});
</script>

<template>
  <div class="movie">
    <div v-if="movie.vote_average" class="movie_vote">
      {{ movie.vote_average.toFixed(1) }}
    </div>

    <img
      v-if="movie.poster_path"
      :src="`https://image.tmdb.org/t/p/w300_and_h450_bestv2${movie.poster_path}`"
      :alt="movie.original_title"
      class="movie-img"
    />
    <div v-else class="movie-img empty">
      <img :src="ImgEmptyMovie" :alt="movie.original_title" class="movie-img" />
    </div>

    <div class="movie-description">
      <h3 class="movie-name">
        {{ movie.original_title || movie.name || movie.original_name || "" }}
      </h3>
      <p>{{ movie.release_date || "" }}</p>
      <div class="movie-buttons" v-if="props.page === 'favorite'">
        <BaseButton
          :isActive="movie.isWatched"
          @click="movieStore.toggleWatched(movie.id)"
        >
          <span v-if="!movie.isWatched">Watched</span>
          <span v-else>Unwatched</span>
        </BaseButton>

        <BaseButton theme="red" @click="movieStore.deleteMovies(movie.id)">
          Delete
        </BaseButton>
      </div>
      <div class="movie-buttons" v-else>
        <BaseButton
          class="btn btn_green"
          @click="movieStore.addToFavorite(movie)"
          :disabled="movieStore.inFavorite(movie.id)"
          :theme="movieStore.inFavorite(movie.id) ? 'yellow' : 'green'"
        >
          {{
            movieStore.inFavorite(movie.id) ? "In favorite" : "Add to favorite"
          }}</BaseButton
        >
      </div>
    </div>
  </div>
</template>

<style lang="css" scoped>
.movie {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  gap: 10px;
  /* margin-bottom: 20px; */
  /* border: 2px solid #efefef; */
  padding-bottom: 10px;
  border-radius: 10px;
  width: 100%;
  height: 100%;
  background: #d0d1d1;
  cursor: pointer;
}
.movie::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  transition: opacity 0.3s ease;
  border: 2px solid #f7aa43;
  border-radius: 10px;
  opacity: 0;
  pointer-events: none;
}
.movie:hover::before {
  opacity: 1;
}
.movie_vote {
  position: absolute;
  top: 0;
  right: 0;
  padding: 5px 10px;
  background: #f7aa43;
  color: #181717;
  border-radius: 0 0 0 10px;
}

.movie-description {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 0 10px 0;
  text-align: center;
  height: 100%;
}

.movie-description h3 {
  font-size: 16px;
}
.movie-description p {
  font-size: 14px;
}

.movie-accept {
  margin-right: 10px;
}

.movie-img {
  width: 100%;
  aspect-ratio: 3 / 4;
  height: auto;
  object-fit: cover;
  border-radius: 10px 10px 0 0;
}

.movie-img.empty {
  background-color: #f7aa43;
}

.movie-img.empty .movie-img {
  height: 100%;
}

.movie-name {
  display: flex;
  align-items: center;
  font-size: 20px;
  color: black;
}

.movie-buttons {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  margin-top: auto;
  gap: 10px;
}
</style>
