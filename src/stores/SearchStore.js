import { defineStore } from "pinia";
import { ref } from "vue";

const apiKey = "5afbf246a51cba581df9c325275ef04b";
const baseUrl = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=`;

export const useSearchStore = defineStore("searchStore", () => {
  const loader = ref(false);
  const movies = ref([]);
  const notFound = ref(false);

  const filters = ref({
    movieName: "",
    genre: "",
    year: "",
    minRating: "",
  });

  const buildQuery = (search) => {
    const params = new URLSearchParams();
    params.append("query", search);

    return params.toString();
  };

  const getMovies = async (search) => {
    if (!search.trim()) {
      movies.value = [];
      notFound.value = false;
      return;
    }

    loader.value = true;

    try {
      const query = buildQuery(search);
      const res = await fetch(`${baseUrl}&${query}`);
      const data = await res.json();

      movies.value = data.results;
      notFound.value = data.results.length === 0;
    } catch (e) {
      console.log(e);
      notFound.value = true;
    }

    loader.value = false;
  };

  return { movies, loader, getMovies, notFound, filters };
});
