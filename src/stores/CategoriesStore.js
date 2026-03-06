import { defineStore } from "pinia";

const API_KEY = "5afbf246a51cba581df9c325275ef04b";
const BASE = "https://api.themoviedb.org/3";

export const useCategoriesStore = defineStore("categories", {
  state: () => ({
    popular: [],
    upcoming: [],
    nowPlaying: [],
    topRated: [],
    newReleases: [],
  }),

  actions: {
    async getPopular() {
      const res = await fetch(`${BASE}/movie/popular?api_key=${API_KEY}`);
      const data = await res.json();
      this.popular = data.results;
    },

    async getUpcoming() {
      const res = await fetch(`${BASE}/movie/upcoming?api_key=${API_KEY}`);
      const data = await res.json();
      this.upcoming = data.results;
    },

    async getNowPlaying() {
      const res = await fetch(`${BASE}/movie/now_playing?api_key=${API_KEY}`);
      const data = await res.json();
      this.nowPlaying = data.results;
    },

    async getTopRated() {
      const res = await fetch(`${BASE}/movie/top_rated?api_key=${API_KEY}`);
      const data = await res.json();
      this.topRated = data.results;
    },

    async getNewReleases(page = 1) {
      const res = await fetch(
        `${BASE}/discover/movie?api_key=${API_KEY}&sort_by=release_date.desc&page=${page}`,
      );
      const data = await res.json();
      this.newReleases = [...this.newReleases, ...data.results];
    },
  },
});
