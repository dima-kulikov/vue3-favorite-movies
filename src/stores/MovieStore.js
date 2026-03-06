import { defineStore } from "pinia";
import { ref, computed, watch } from "vue";

export const useMovieStore = defineStore("movieStore", () => {
  const favoriteMovies = ref([]);
  const activeTab = ref(0);

  const moviesInLocalStorage = localStorage.getItem("favoriteMovies");
  if (moviesInLocalStorage) {
    favoriteMovies.value = JSON.parse(moviesInLocalStorage);
  }

  const unWatchedMovies = computed(() =>
    favoriteMovies.value.filter((el) => !el.isWatched),
  );
  const watchedMovies = computed(() =>
    favoriteMovies.value.filter((el) => el.isWatched),
  );
  const totalCountMovies = computed(() => favoriteMovies.value.length);

  const setActiveTab = (tabId) => {
    activeTab.value = tabId;
  };

  const toggleWatched = (id) => {
    const watched = favoriteMovies.value.find((el) => el.id == id);
    watched.isWatched = !watched.isWatched;
  };

  const deleteMovies = (id) => {
    favoriteMovies.value = favoriteMovies.value.filter((el) => el.id !== id);
  };

  const addToFavorite = (obj) => {
    favoriteMovies.value.push({ ...obj, isWatched: false });
  };

  const inFavorite = (id) => {
    return favoriteMovies.value.some((movie) => movie.id === id);
  };

  watch(
    favoriteMovies,
    (state) => {
      localStorage.setItem("favoriteMovies", JSON.stringify(state));
    },
    {
      deep: true,
    },
  );

  return {
    favoriteMovies,
    activeTab,
    watchedMovies,
    unWatchedMovies,
    totalCountMovies,
    inFavorite,
    setActiveTab,
    toggleWatched,
    deleteMovies,
    addToFavorite,
  };
});
