import { defineStore } from "pinia";
import MovieService from "../services/MovieService";
export const useMovieStore = defineStore({
  id: "movie",

  state: () => ({
    movies: [],
    loading: false,
    search: "",
  }),

  actions: {
    getTopRatedMovies() {
      this.loading = true;
      MovieService.topRated()
        .then((movies) => {
          if (movies.data) {
            this.movies = movies.data.results;
            this.loading = false;
          }
        })
        .catch((e) => {
          this.loading = false;
        });
    },
  },

  getters: {
    filteredMovies() {
      return this.movies.filter((movie) => {
        return movie.title.toLowerCase().includes(this.search);
      });
    },
  },
});
