import { defineStore } from "pinia";

const API_KEY = "5afbf246a51cba581df9c325275ef04b";
const BASE = "https://api.themoviedb.org/3/discover/tv?";

export const useTvGenresStore = defineStore("TvGenres", {
  state: () => ({
    allTv: [],
    genresTv: [],
  }),
  actions: {
    async fetchAllTv(page = 1, isLoadMore = false) {
      const res = await fetch(
        `${BASE}api_key=${API_KEY}&sort_by=release_date.desc&page=${page}`,
      );
      const data = await res.json();

      this.allTv = isLoadMore ? [...this.allTv, ...data.results] : data.results;
    },

    async fetchTvByGenre(genreId, page = 1, isLoadMore = false) {
      const res = await fetch(
        `${BASE}api_key=${API_KEY}&sort_by=release_date.desc&with_genres=${genreId}&page=${page}`,
      );
      const data = await res.json();

      this.genresTv = isLoadMore
        ? [...this.genresTv, ...data.results]
        : data.results;
    },
  },
});
