import { defineStore } from "pinia";

const API_KEY = "5afbf246a51cba581df9c325275ef04b";
const BASE = "https://api.themoviedb.org/3/discover/movie?";

export const useMoviesGenresStore = defineStore("moviesGenres", {
  state: () => ({
    allMovies: [],
    genresMovies: [],
  }),
  actions: {
    async fetchAllMovies(page = 1, isLoadMore = false) {
      const res = await fetch(
        `${BASE}api_key=${API_KEY}&sort_by=release_date.desc&page=${page}`,
      );
      const data = await res.json();
      this.allMovies = isLoadMore
        ? [...this.allMovies, ...data.results]
        : data.results;
    },

    async fetchMoviesByGenre(genreId, page = 1, isLoadMore = false) {
      const res = await fetch(
        `${BASE}api_key=${API_KEY}&sort_by=release_date.desc&with_genres=${genreId}&page=${page}`,
      );
      const data = await res.json();
      this.genresMovies = isLoadMore
        ? [...this.genresMovies, ...data.results]
        : data.results;
    },
  },
});
